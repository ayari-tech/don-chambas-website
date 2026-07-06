const CHARACTERS = [
  { src: "/images/brand/personaje_mesero-clasico_rojo.png", alt: "Mesero" },
  { src: "/images/brand/personaje_cocinero_rojo.png", alt: "Cocinero" },
  { src: "/images/brand/personaje_cajera_rojo.png", alt: "Cajera" },
  { src: "/images/brand/personaje_bartender_rojo.png", alt: "Bartender" },
  { src: "/images/brand/personaje_lavaloza_rojo.png", alt: "Lavaloza" },
] as const;

/**
 * "Banda de oficios" de la marca (mesero, cocinero, cajera, bartender,
 * lavaloza — assets canónicos de don-chambas-brand). Decorativa; nunca
 * sustituye a la mascota ni funciona como íconos de UI.
 */
export default function CharacterStrip({
  size = "lg",
  className,
}: {
  size?: "sm" | "lg";
  className?: string;
}) {
  return (
    <div
      className={`characters-strip ${size}${className ? ` ${className}` : ""}`}
      aria-hidden="true"
    >
      {CHARACTERS.map((c) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img key={c.src} src={c.src} alt={c.alt} draggable={false} />
      ))}
    </div>
  );
}
