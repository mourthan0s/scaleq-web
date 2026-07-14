/**
 * Interim SCALEQ wordmark until the final logo is delivered.
 * The Q is drawn as a custom glyph: a circle whose tail steps upward —
 * the "scaling step" that anchors the visual identity.
 */
export function Wordmark({
  className = "",
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-baseline font-sans font-extrabold tracking-[0.14em] ${className}`}
      aria-label="SCALEQ"
    >
      <span>SCALE</span>
      <svg
        viewBox="0 0 30 30"
        className={compact ? "ml-[0.09em] h-[0.78em] w-[0.78em]" : "ml-[0.09em] h-[0.8em] w-[0.8em]"}
        aria-hidden="true"
      >
        <circle
          cx="14"
          cy="14"
          r="11"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.4"
        />
        {/* stepped tail — a staircase rising out of the circle */}
        <path
          d="M17 20 h5 v-4 h5"
          fill="none"
          stroke="var(--color-brass)"
          strokeWidth="3.4"
          strokeLinecap="square"
        />
      </svg>
    </span>
  );
}
