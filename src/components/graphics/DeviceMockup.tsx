/**
 * Generated interface mockups for case studies — pure SVG, no stock imagery.
 * Three archetypes: an operations dashboard, a client portal, an e-commerce admin.
 */

const frame = "rgba(155,161,171,0.25)";
const line = "rgba(155,161,171,0.35)";
const soft = "rgba(155,161,171,0.14)";
const brass = "#c6a15b";
const panel = "rgba(26,30,39,0.9)";

function Chrome({ children, title }: { children: React.ReactNode; title: string }) {
  return (
    <svg viewBox="0 0 480 300" role="img" aria-label={title} className="h-auto w-full">
      <rect x="0.5" y="0.5" width="479" height="299" rx="8" fill={panel} stroke={frame} />
      <circle cx="18" cy="16" r="3" fill={soft} />
      <circle cx="30" cy="16" r="3" fill={soft} />
      <circle cx="42" cy="16" r="3" fill={soft} />
      <line x1="0" y1="30" x2="480" y2="30" stroke={frame} strokeWidth="1" />
      {children}
    </svg>
  );
}

function DashboardMock({ title }: { title: string }) {
  return (
    <Chrome title={title}>
      {/* sidebar */}
      <rect x="14" y="44" width="90" height="240" rx="4" fill={soft} opacity="0.5" />
      {[0, 1, 2, 3, 4].map((i) => (
        <rect key={i} x="24" y={58 + i * 24} width={i === 0 ? 60 : 48} height="6" rx="3" fill={i === 0 ? brass : line} opacity={i === 0 ? 0.9 : 0.5} />
      ))}
      {/* stat tiles */}
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x={118 + i * 118} y="44" width="106" height="56" rx="4" fill="none" stroke={frame} />
          <rect x={128 + i * 118} y="56" width="40" height="5" rx="2.5" fill={line} opacity="0.6" />
          <rect x={128 + i * 118} y="72" width={64 - i * 12} height="10" rx="2" fill={i === 1 ? brass : "rgba(244,242,237,0.7)"} />
        </g>
      ))}
      {/* chart */}
      <rect x="118" y="112" width="224" height="122" rx="4" fill="none" stroke={frame} />
      <polyline
        points="130,214 160,196 190,202 220,176 250,168 280,148 310,142 330,128"
        fill="none"
        stroke={brass}
        strokeWidth="2"
      />
      {[130, 160, 190, 220, 250, 280, 310, 330].map((x, i) => (
        <circle key={i} cx={x} cy={[214, 196, 202, 176, 168, 148, 142, 128][i]} r="2.5" fill={brass} />
      ))}
      {/* table */}
      <rect x="354" y="112" width="112" height="122" rx="4" fill="none" stroke={frame} />
      {[0, 1, 2, 3, 4].map((i) => (
        <g key={i}>
          <rect x="364" y={126 + i * 21} width="52" height="5" rx="2.5" fill={line} opacity="0.55" />
          <rect x="428" y={126 + i * 21} width="28" height="5" rx="2.5" fill="rgba(244,242,237,0.5)" />
        </g>
      ))}
      {/* activity rows */}
      {[0, 1].map((i) => (
        <g key={i}>
          <rect x="118" y={246 + i * 20} width="348" height="12" rx="3" fill={soft} opacity={0.7 - i * 0.25} />
        </g>
      ))}
    </Chrome>
  );
}

function PortalMock({ title }: { title: string }) {
  return (
    <Chrome title={title}>
      {/* header row */}
      <rect x="14" y="44" width="120" height="8" rx="4" fill="rgba(244,242,237,0.7)" />
      <rect x="14" y="60" width="70" height="5" rx="2.5" fill={line} opacity="0.5" />
      {/* progress steps */}
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <circle cx={34 + i * 130} cy="96" r="7" fill={i < 2 ? brass : "none"} stroke={i < 2 ? brass : line} strokeWidth="1.5" opacity={i < 2 ? 1 : 0.6} />
          {i < 3 && <line x1={44 + i * 130} y1="96" x2={154 + i * 130} y2="96" stroke={i < 1 ? brass : line} strokeWidth="1.5" opacity={i < 1 ? 0.9 : 0.4} />}
          <rect x={12 + i * 130} y="112" width="44" height="5" rx="2.5" fill={line} opacity="0.55" />
        </g>
      ))}
      {/* documents list */}
      <rect x="14" y="136" width="284" height="148" rx="4" fill="none" stroke={frame} />
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <rect x="26" y={150 + i * 34} width="16" height="20" rx="2" fill="none" stroke={line} opacity="0.7" />
          <rect x="52" y={154 + i * 34} width={120 - i * 10} height="6" rx="3" fill="rgba(244,242,237,0.6)" />
          <rect x="52" y={166 + i * 34} width="60" height="4" rx="2" fill={line} opacity="0.45" />
          <rect x="252" y={156 + i * 34} width="34" height="12" rx="6" fill={i === 0 ? brass : soft} opacity={i === 0 ? 0.9 : 0.8} />
        </g>
      ))}
      {/* message panel */}
      <rect x="312" y="136" width="154" height="148" rx="4" fill={soft} opacity="0.45" />
      <rect x="324" y="150" width="80" height="6" rx="3" fill="rgba(244,242,237,0.65)" />
      {[0, 1, 2].map((i) => (
        <rect key={i} x="324" y={168 + i * 14} width={126 - i * 24} height="5" rx="2.5" fill={line} opacity="0.5" />
      ))}
      <rect x="324" y="246" width="130" height="24" rx="4" fill="none" stroke={brass} opacity="0.8" />
      <rect x="334" y="255" width="56" height="6" rx="3" fill={brass} opacity="0.85" />
    </Chrome>
  );
}

function CommerceMock({ title }: { title: string }) {
  return (
    <Chrome title={title}>
      {/* order pipeline */}
      {["", "", ""].map((_, i) => (
        <g key={i}>
          <rect x={14 + i * 154} y="44" width="142" height="34" rx="4" fill="none" stroke={frame} />
          <circle cx={30 + i * 154} cy="61" r="5" fill={i === 2 ? brass : line} opacity={i === 2 ? 0.95 : 0.55} />
          <rect x={44 + i * 154} y="52" width="70" height="6" rx="3" fill="rgba(244,242,237,0.6)" />
          <rect x={44 + i * 154} y="64" width="44" height="4" rx="2" fill={line} opacity="0.45" />
        </g>
      ))}
      {/* flow arrows */}
      <path d="M156 61 h12 m-4 -4 4 4 -4 4" fill="none" stroke={brass} strokeWidth="1.5" opacity="0.9" />
      <path d="M310 61 h12 m-4 -4 4 4 -4 4" fill="none" stroke={brass} strokeWidth="1.5" opacity="0.9" />
      {/* product grid */}
      {[0, 1, 2, 3, 4, 5].map((i) => {
        const x = 14 + (i % 3) * 100;
        const y = 96 + Math.floor(i / 3) * 92;
        return (
          <g key={i}>
            <rect x={x} y={y} width="88" height="80" rx="4" fill="none" stroke={frame} />
            <rect x={x + 10} y={y + 10} width="68" height="34" rx="3" fill={soft} opacity="0.7" />
            <rect x={x + 10} y={y + 52} width="48" height="5" rx="2.5" fill="rgba(244,242,237,0.6)" />
            <rect x={x + 10} y={y + 64} width="28" height="6" rx="3" fill={brass} opacity="0.85" />
          </g>
        );
      })}
      {/* sync panel */}
      <rect x="322" y="96" width="144" height="172" rx="4" fill={soft} opacity="0.45" />
      <rect x="334" y="110" width="72" height="6" rx="3" fill="rgba(244,242,237,0.65)" />
      {[0, 1, 2, 3, 4].map((i) => (
        <g key={i}>
          <rect x="334" y={128 + i * 26} width="80" height="5" rx="2.5" fill={line} opacity="0.5" />
          <path
            d={`M436 ${126 + i * 26} a5 5 0 1 1 -0.01 0`}
            fill="none"
            stroke={i < 3 ? brass : line}
            strokeWidth="1.5"
            opacity={i < 3 ? 0.9 : 0.4}
          />
        </g>
      ))}
    </Chrome>
  );
}

export function DeviceMockup({
  variant,
  title,
  className = "",
}: {
  variant: "dashboard" | "portal" | "commerce";
  title: string;
  className?: string;
}) {
  return (
    <div className={className}>
      {variant === "dashboard" && <DashboardMock title={title} />}
      {variant === "portal" && <PortalMock title={title} />}
      {variant === "commerce" && <CommerceMock title={title} />}
    </div>
  );
}
