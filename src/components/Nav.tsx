"use client";

import Link from "next/link";
import { useState } from "react";

const LINKS = [
  { href: "/piloto", label: "Programa piloto" },
  { href: "/carreras", label: "Únete al equipo" },
  { href: "/contacto", label: "Contacto" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="wrap">
        <div className="nav-inner">
          <Link href="/" className="brand plain" aria-label="Don Chambas — inicio">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/brand/wordmark_amarillo-blanco.png"
              alt="Don Chambas"
              className="brand-logo"
              draggable={false}
            />
          </Link>

          <button
            type="button"
            className="nav-toggle"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            aria-controls="nav-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="nav-toggle-bar" />
            <span className="nav-toggle-bar" />
            <span className="nav-toggle-bar" />
          </button>

          <div id="nav-menu" className={`nav-links${open ? " is-open" : ""}`}>
            {LINKS.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
