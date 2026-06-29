import Link from "next/link";

export default function Nav() {
  return (
    <nav className="nav">
      <div className="wrap">
        <div className="nav-inner">
          <Link href="/" className="brand plain" aria-label="Don Chambas — inicio">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/brand/wordmark-amarillo-blanco.png"
              alt="Don Chambas"
              className="brand-logo"
              draggable={false}
            />
          </Link>
          <div className="nav-links">
            <Link href="/piloto">Programa piloto</Link>
            <Link href="/carreras">Únete al equipo</Link>
            <Link href="/contacto">Contacto</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
