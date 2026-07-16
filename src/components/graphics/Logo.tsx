import Image from "next/image";

/**
 * The real SCALEQ logo (icon + wordmark), white-on-transparent — for use on
 * the site's dark header/footer surfaces only. Source: brand asset supplied
 * directly by SCALEQ, recoloured to white; see ASSETS.md.
 *
 * Display size is controlled entirely via `className` height utilities
 * (e.g. "h-[26px] lg:h-[30px]") — width follows automatically (`w-auto`)
 * from the image's fixed aspect ratio. The `width`/`height` attributes below
 * are just the intrinsic source dimensions Next.js needs to avoid layout shift.
 */
export function Logo({
  className = "",
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src="/brand/scaleq-logo-white.png"
      alt="SCALEQ"
      width={1005}
      height={333}
      priority={priority}
      className={`h-[28px] w-auto ${className}`}
    />
  );
}
