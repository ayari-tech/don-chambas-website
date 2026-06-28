import Link from "next/link";
import BrushWordmark from "./BrushWordmark";
import CharacterStrip from "./CharacterStrip";

export default function Footer() {
  return (
    <footer>
      <CharacterStrip size="sm" className="footer-characters" />
      <div className="wrap">
        <div className="footer-brand">
          <BrushWordmark variant="navy" className="footer-wordmark" />
          <p style={{ marginTop: "8px" }}>
            © {new Date().getFullYear()} Don Chambas — Ciudad de México
          </p>
        </div>
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <Link href="/privacidad" style={{ color: "rgba(255,255,255,0.6)", borderBottom: "1px solid currentColor" }}>
            Aviso de privacidad
          </Link>
          <Link href="/terminos" style={{ color: "rgba(255,255,255,0.6)", borderBottom: "1px solid currentColor" }}>
            Términos de uso
          </Link>
          <Link href="/contacto" style={{ color: "rgba(255,255,255,0.6)", borderBottom: "1px solid currentColor" }}>
            Contacto
          </Link>
        </div>
      </div>
    </footer>
  );
}
