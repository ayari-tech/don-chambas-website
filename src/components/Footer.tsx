import Link from "next/link";
import BrushWordmark from "./BrushWordmark";
import CharacterStrip from "./CharacterStrip";
import Icon from "./Icon";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/lib/config";

export default function Footer({
  showCharacters = true,
}: {
  showCharacters?: boolean;
}) {
  return (
    <footer>
      {showCharacters && (
        <CharacterStrip size="sm" className="footer-characters" />
      )}
      <div className="wrap">
        <div className="footer-brand">
          <BrushWordmark variant="navy" className="footer-wordmark" />
          <p style={{ marginTop: "8px" }}>
            © {new Date().getFullYear()} Don Chambas — Ciudad de México
          </p>
        </div>
        <div className="footer-links">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener"
            className="footer-instagram"
          >
            <Icon name="instagram" size={18} />@{INSTAGRAM_HANDLE}
          </a>
          <div className="footer-legal">
            <Link href="/privacidad">Aviso de privacidad</Link>
            <Link href="/terminos">Términos de uso</Link>
            <Link href="/contacto">Contacto</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
