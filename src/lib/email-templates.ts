interface ContactSubmission {
  name: string;
  company: string;
  email: string;
  phone: string;
  interest: string;
  service: string;
  budget: string;
  timeline: string;
  message: string;
  locale: "el" | "en";
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function row(label: string, value: string): string {
  if (!value) return "";
  return `<tr><td style="padding:4px 12px 4px 0;color:#6b7280;white-space:nowrap;vertical-align:top;">${escapeHtml(label)}</td><td style="padding:4px 0;">${escapeHtml(value)}</td></tr>`;
}

/** Internal notification sent to the SCALEQ team on every new submission. */
export function internalNotificationEmail(data: ContactSubmission): { subject: string; html: string } {
  const subject = `Νέο μήνυμα επικοινωνίας — ${data.company || data.name}`;
  const html = `
    <div style="font-family:-apple-system,Segoe UI,Roboto,sans-serif;font-size:14px;color:#111;max-width:560px;">
      <h2 style="margin:0 0 16px;">Νέο μήνυμα από τη φόρμα επικοινωνίας</h2>
      <table style="border-collapse:collapse;width:100%;margin-bottom:20px;">
        ${row("Όνομα", data.name)}
        ${row("Εταιρεία", data.company)}
        ${row("Email", data.email)}
        ${row("Τηλέφωνο", data.phone)}
        ${row("Ενδιαφέρον", data.interest)}
        ${row("Υπηρεσία", data.service)}
        ${row("Budget", data.budget)}
        ${row("Χρονοδιάγραμμα", data.timeline)}
        ${row("Γλώσσα", data.locale === "en" ? "English" : "Ελληνικά")}
      </table>
      <div style="white-space:pre-wrap;border-left:3px solid #C9A25B;padding-left:12px;color:#111;">${escapeHtml(data.message)}</div>
    </div>
  `;
  return { subject, html };
}

/** Auto-reply sent to the person who submitted the form, in their locale. */
export function autoReplyEmail(data: ContactSubmission): { subject: string; html: string } {
  if (data.locale === "en") {
    return {
      subject: "We received your message — SCALEQ",
      html: `
        <div style="font-family:-apple-system,Segoe UI,Roboto,sans-serif;font-size:15px;color:#111;max-width:520px;line-height:1.6;">
          <p>Hi ${escapeHtml(data.name.split(" ")[0] || data.name)},</p>
          <p>Thank you for reaching out to SCALEQ. We've received your message and will get back to you within 1–2 business days.</p>
          <p>Here's a copy of what you sent us:</p>
          <div style="white-space:pre-wrap;border-left:3px solid #C9A25B;padding-left:12px;color:#374151;margin:16px 0;">${escapeHtml(data.message)}</div>
          <p>Talk soon,<br/>The SCALEQ team</p>
        </div>
      `,
    };
  }
  return {
    subject: "Λάβαμε το μήνυμά σας — SCALEQ",
    html: `
      <div style="font-family:-apple-system,Segoe UI,Roboto,sans-serif;font-size:15px;color:#111;max-width:520px;line-height:1.6;">
        <p>Γεια σας ${escapeHtml(data.name.split(" ")[0] || data.name)},</p>
        <p>Ευχαριστούμε που επικοινωνήσατε με τη SCALEQ. Λάβαμε το μήνυμά σας και θα επικοινωνήσουμε μαζί σας εντός 1–2 εργάσιμων ημερών.</p>
        <p>Αντίγραφο του μηνύματός σας:</p>
        <div style="white-space:pre-wrap;border-left:3px solid #C9A25B;padding-left:12px;color:#374151;margin:16px 0;">${escapeHtml(data.message)}</div>
        <p>Τα λέμε σύντομα,<br/>Η ομάδα της SCALEQ</p>
      </div>
    `,
  };
}
