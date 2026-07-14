"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { localeHref, type Locale } from "@/lib/i18n";
import { contactContent } from "@/content/contact";
import { services } from "@/data/services";

type Status = "idle" | "submitting" | "success" | "error";

interface FieldErrors {
  [key: string]: string | undefined;
}

const inputClass =
  "w-full border border-steel/30 bg-ink-2 px-4 py-3.5 text-sm text-paper placeholder:text-steel/50 transition-colors focus:border-brass focus:outline-none aria-[invalid=true]:border-red-400";

const labelClass = "mb-2 block text-[13px] font-semibold tracking-wide text-paper";
const optionalClass = "ml-2 font-normal text-steel/70 normal-case";

export function ContactForm({ locale }: { locale: Locale }) {
  const t = contactContent[locale].form;
  const c = contactContent[locale];
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});

  function validate(data: FormData): FieldErrors {
    const errs: FieldErrors = {};
    const required = ["name", "company", "email", "interest", "message"];
    for (const field of required) {
      if (!String(data.get(field) ?? "").trim()) errs[field] = t.required;
    }
    const email = String(data.get("email") ?? "");
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = t.invalidEmail;
    if (!data.get("consent")) errs.consent = t.required;
    return errs;
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const errs = validate(data);
    setErrors(errs);
    if (Object.keys(errs).length > 0) {
      const firstInvalid = form.querySelector<HTMLElement>("[aria-invalid='true'], [data-error='true']");
      firstInvalid?.focus();
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          company: data.get("company"),
          email: data.get("email"),
          phone: data.get("phone"),
          interest: data.get("interest"),
          service: data.get("service"),
          budget: data.get("budget"),
          timeline: data.get("timeline"),
          message: data.get("message"),
          consent: Boolean(data.get("consent")),
          website: data.get("website"), // honeypot — humans leave it empty
          locale,
        }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="border border-brass/40 bg-ink-2 p-10 text-center"
        role="status"
      >
        <svg viewBox="0 0 48 48" className="mx-auto h-12 w-12" aria-hidden="true">
          <circle cx="24" cy="24" r="22" fill="none" stroke="#c6a15b" strokeWidth="1.5" />
          <path d="M15 24.5 21 30.5 33 18" fill="none" stroke="#c6a15b" strokeWidth="2.4" strokeLinecap="square" />
        </svg>
        <h3 className="display mt-6 text-2xl text-paper">{t.successTitle}</h3>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-steel">{t.successBody}</p>
      </motion.div>
    );
  }

  const err = (field: string) =>
    errors[field] ? (
      <p id={`${field}-error`} className="mt-1.5 text-xs text-red-400" role="alert">
        {errors[field]}
      </p>
    ) : null;

  const ariaProps = (field: string) => ({
    "aria-invalid": errors[field] ? true : undefined,
    "aria-describedby": errors[field] ? `${field}-error` : undefined,
  });

  return (
    <form onSubmit={onSubmit} noValidate>
      {/* Honeypot — visually hidden, real users never fill it */}
      <div className="absolute -left-[9999px] top-auto" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            {t.name} *
          </label>
          <input id="name" name="name" type="text" autoComplete="name" className={inputClass} {...ariaProps("name")} />
          {err("name")}
        </div>
        <div>
          <label htmlFor="company" className={labelClass}>
            {t.company} *
          </label>
          <input id="company" name="company" type="text" autoComplete="organization" className={inputClass} {...ariaProps("company")} />
          {err("company")}
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            {t.email} *
          </label>
          <input id="email" name="email" type="email" autoComplete="email" className={inputClass} {...ariaProps("email")} />
          {err("email")}
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            {t.phone}
            <span className={optionalClass}>({t.phoneOptional})</span>
          </label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" className={inputClass} />
        </div>

        <div>
          <label htmlFor="interest" className={labelClass}>
            {t.interest} *
          </label>
          <select id="interest" name="interest" className={inputClass} defaultValue="" {...ariaProps("interest")}>
            <option value="" disabled>
              {t.selectPlaceholder}
            </option>
            {c.interests.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
          {err("interest")}
        </div>
        <div>
          <label htmlFor="service" className={labelClass}>
            {t.service}
            <span className={optionalClass}>({t.serviceOptional})</span>
          </label>
          <select id="service" name="service" className={inputClass} defaultValue="">
            <option value="">{t.selectPlaceholder}</option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.title[locale]}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="budget" className={labelClass}>
            {t.budget}
            <span className={optionalClass}>({t.budgetOptional})</span>
          </label>
          <select id="budget" name="budget" className={inputClass} defaultValue="">
            <option value="">{t.selectPlaceholder}</option>
            {c.budgets.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="timeline" className={labelClass}>
            {t.timeline}
            <span className={optionalClass}>({t.timelineOptional})</span>
          </label>
          <select id="timeline" name="timeline" className={inputClass} defaultValue="">
            <option value="">{t.selectPlaceholder}</option>
            {c.timelines.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-6">
        <label htmlFor="message" className={labelClass}>
          {t.message} *
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          placeholder={t.messagePlaceholder}
          className={inputClass}
          {...ariaProps("message")}
        />
        {err("message")}
      </div>

      <div className="mt-6">
        <label className="flex items-start gap-3 text-sm leading-relaxed text-steel">
          <input
            type="checkbox"
            name="consent"
            className="mt-1 accent-brass"
            data-error={errors.consent ? "true" : undefined}
            aria-describedby={errors.consent ? "consent-error" : undefined}
          />
          <span>
            {t.consent}{" "}
            <Link href={localeHref(locale, "/privacy")} className="underline transition-colors hover:text-paper">
              {t.consentLinkLabel}
            </Link>
            . *
          </span>
        </label>
        {errors.consent && (
          <p id="consent-error" className="mt-1.5 text-xs text-red-400" role="alert">
            {errors.consent}
          </p>
        )}
      </div>

      <AnimatePresence>
        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-6 border border-red-400/40 bg-red-950/30 p-4"
            role="alert"
          >
            <p className="text-sm font-semibold text-red-300">{t.errorTitle}</p>
            <p className="mt-1 text-sm text-red-300/80">{t.errorBody}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-8 inline-flex items-center gap-3 bg-paper px-8 py-4 text-sm font-semibold text-ink transition-colors hover:bg-brass disabled:cursor-wait disabled:opacity-60"
      >
        {status === "submitting" && (
          <span
            className="h-4 w-4 animate-spin rounded-full border-2 border-ink/30 border-t-ink"
            aria-hidden="true"
          />
        )}
        {status === "submitting" ? t.submitting : t.submit}
      </button>
    </form>
  );
}
