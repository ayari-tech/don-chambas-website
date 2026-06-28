import Link from "next/link";
import Sparkle from "./Sparkle";

export default function Nav() {
  return (
    <nav className="nav">
      <div className="wrap">
        <div className="nav-inner">
          <Link href="/" className="brand plain">
            <span className="brand-name">
              DON <span className="accent">CHAMBAS</span>
              <Sparkle size={14} color="var(--dc-red-logo)" className="brand-sparkle" />
            </span>
          </Link>
          <div className="nav-links">
            <Link href="/piloto">Programa piloto</Link>
            <Link href="/carreras">Construye con nosotros</Link>
            <Link href="/contacto">Contacto</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
