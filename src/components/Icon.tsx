import type { CSSProperties, ReactNode } from "react";

/**
 * Íconos de marca (line-art, stroke=currentColor) en el estilo de las
 * ilustraciones de Don Chambas. NO emojis. viewBox 0 0 24 24.
 */
const PATHS: Record<string, ReactNode> = {
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <line x1="20.5" y1="20.5" x2="16.5" y2="16.5" />
    </>
  ),
  heart: (
    <path d="M12 21C12 21 4 13.5 4 8.5A4.5 4.5 0 0 1 12 6 4.5 4.5 0 0 1 20 8.5C20 13.5 12 21 12 21Z" />
  ),
  "calendar-x": (
    <>
      <rect x="3" y="4.5" width="18" height="16.5" rx="2.5" />
      <line x1="3" y1="9.5" x2="21" y2="9.5" />
      <line x1="8" y1="2.5" x2="8" y2="6" />
      <line x1="16" y1="2.5" x2="16" y2="6" />
      <line x1="9.5" y1="13.5" x2="14.5" y2="18.5" />
      <line x1="14.5" y1="13.5" x2="9.5" y2="18.5" />
    </>
  ),
  "trending-up": (
    <>
      <polyline points="3 17 9 11 13 15 21 7" />
      <polyline points="16 7 21 7 21 12" />
    </>
  ),
  code: (
    <>
      <polyline points="9 8 5 12 9 16" />
      <polyline points="15 8 19 12 15 16" />
    </>
  ),
  layers: (
    <>
      <path d="M12 3 21 8 12 13 3 8Z" />
      <polyline points="3 12 12 17 21 12" />
      <polyline points="3 16 12 21 21 16" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <polyline points="3.5 7 12 13 20.5 7" />
    </>
  ),
  instagram: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="16.8" cy="7.2" r="0.7" fill="currentColor" stroke="none" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21C12 21 5 14 5 9A7 7 0 0 1 19 9C19 14 12 21 12 21Z" />
      <circle cx="12" cy="9" r="2.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8" />
      <polyline points="12 8 12 12 15 14" />
    </>
  ),
  bolt: <path d="M13 2 4 14h7l-1 8 9-12h-7z" />,
  sliders: (
    <>
      <line x1="4" y1="7" x2="20" y2="7" />
      <line x1="4" y1="17" x2="20" y2="17" />
      <circle cx="9" cy="7" r="2.5" />
      <circle cx="15" cy="17" r="2.5" />
    </>
  ),
  "bar-chart": (
    <>
      <line x1="4" y1="20" x2="20" y2="20" />
      <line x1="7.5" y1="20" x2="7.5" y2="13" />
      <line x1="12" y1="20" x2="12" y2="8" />
      <line x1="16.5" y1="20" x2="16.5" y2="15" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 20 6v5c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z" />
      <polyline points="9 12 11.5 14.5 15.5 9.5" />
    </>
  ),
};

export default function Icon({
  name,
  size = 24,
  className,
  style,
}: {
  name: keyof typeof PATHS;
  size?: number;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
      style={style}
    >
      {PATHS[name]}
    </svg>
  );
}
