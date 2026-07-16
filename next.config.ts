import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Self-hosted on Hostinger (not Vercel) without a confirmed-working
    // `sharp` binary in that container — server-side image optimization
    // needs sharp and can take the whole process down if the native binary
    // doesn't match the runtime environment. Serve originals unprocessed
    // instead; images are already reasonably sized/compressed.
    unoptimized: true,
    // Local, trusted SVG logo assets (public/projects/logos/*.svg) need this —
    // Next.js blocks SVGs through its image optimizer otherwise. Sandboxed via
    // CSP since SVG can carry script.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
