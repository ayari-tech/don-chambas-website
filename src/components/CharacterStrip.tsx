const CHARACTERS = [
  { src: "/images/brand/characters/char-mesero.png", alt: "Mesero" },
  { src: "/images/brand/characters/char-cocinero.png", alt: "Cocinero" },
  { src: "/images/brand/characters/char-anfitriona.png", alt: "Anfitriona" },
  { src: "/images/brand/characters/char-bartender.png", alt: "Bartender" },
  { src: "/images/brand/characters/char-lavaplatos.png", alt: "Lavaplatos" },
] as const;

/**
 * Tira de personajes ilustrados de la marca (mesero, cocinero, anfitriona,
 * bartender, lavaplatos). Elemento decorativo del hero y el footer.
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
