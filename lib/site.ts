// ============================================================
// EDIT HERE: images and social links (all values are fake placeholders)
// ============================================================

// Images live in /public/images. Replace the files keeping the same names
// (or change the file names below if you use another extension).
export const IMAGES = {
  hero: "/images/IMG_1.jpg", // cover image, wide / landscape works best (~1920x1080)
  band: "/images/IMG_2.jpg", // band photo in the footer (~1200x800)
};

// FAKE LINKS: replace each href with the real profile URL.
export const SOCIALS = [
  {
    id: "spotify",
    label: "Spotify",
    href: "https://open.spotify.com/artist/0Ll82dHz6oTK1LemBg570g?si=_QS7RZKySFGLe3lmYiWttQ",
  },
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/findefantasma",
  },
  { id: "tiktok", label: "TikTok", href: "http://tiktok.com/@findefantasma" },
  {
    id: "youtube",
    label: "YouTube",
    href: "https://www.youtube.com/@findefantasma",
  },
  { id: "x", label: "X / Twitter", href: "https://x.com/findefantasma" },
] as const;

export type SocialId = (typeof SOCIALS)[number]["id"];

// Bandsintown follow page (real)
export const BANDSINTOWN_PAGE =
  "https://www.bandsintown.com/a/15574428-finde-fantasma";
