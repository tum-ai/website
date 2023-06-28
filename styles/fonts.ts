import { IBM_Plex_Sans } from "@next/font/google";

const ibm_plex_sans = IBM_Plex_Sans({
  weight: ["400", "700"],
  variable: "--font-ibm-plex-sans",
  fallback: ["arial", "helvetica", "sans-serif"],
});

export { ibm_plex_sans };
