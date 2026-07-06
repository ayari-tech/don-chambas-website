import type { CSSProperties } from "react";

const SRC = {
  light: "/images/brand/lockup-white.svg", // wordmark naranja + tagline navy (fondos claros)
  navy: "/images/brand/lockup-navy.svg", //  wordmark naranja + tagline blanca (fondos navy)
  red: "/images/brand/lockup-red.svg", //    wordmark naranja + tagline navy (fondos rojos)
} as const;

const ALT =
  "Don Chambas — ¿Buscas jale o quien jale pa’ tu restaurante?";

/**
 * Lockup oficial de marca (wordmark brush + tagline + sparkles) en SVG.
 * Elige la variante de color según el fondo donde se monta.
 */
export default function BrushWordmark({
  variant = "light",
  className,
  style,
}: {
  variant?: keyof typeof SRC;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={SRC[variant]}
      alt={ALT}
      className={className}
      style={style}
      draggable={false}
    />
  );
}
