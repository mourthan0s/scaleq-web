import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Local, trusted SVG logo assets (public/projects/logos/*.svg) need this —
    // Next.js blocks SVGs through its image optimizer otherwise. Sandboxed via
    // CSP since SVG can carry script.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
