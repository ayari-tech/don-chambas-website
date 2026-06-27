"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const LINKS = [
  { href: "/#problema", label: "Problema" },
  { href: "/#solucion", label: "Solución" },
  { href: "/#moats", label: "Moats" },
  { href: "/#producto", label: "Producto" },
  { href: "/restaurantes", label: "Restaurantes" },
  { href: "/inversionistas", label: "Inversionistas" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="wrap">
        <div className="nav-inner">
          <Link href="/" className="brand plain" onClick={() => setOpen(false)}>
            <Image
              src="/images/logo-don.svg"
              alt="Don Chambas"
              width={36}
              height={36}
            />
            <span className="brand-name">
              DON <span className="accent">CHAMBAS</span>
            </span>
          </Link>

          <div className="nav-links">
            {LINKS.map((l) => (
              <Link key={l.href} href={l.href}>
                {l.label}
              </Link>
            ))}
          </div>

          <div className="nav-ctas">
            <Link href="/restaurantes#piloto" className="btn btn-primary">
              Únete al piloto
            </Link>
            <Link href="/inversionistas" className="btn btn-outline">
              Inversionistas
            </Link>
          </div>

          <button
            type="button"
            className="nav-toggle"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="nav-toggle-bar" data-open={open} />
            <span className="nav-toggle-bar" data-open={open} />
            <span className="nav-toggle-bar" data-open={open} />
          </button>
        </div>

        {open && (
          <div className="nav-mobile">
            {LINKS.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            ))}
            <Link
              href="/restaurantes#piloto"
              className="btn btn-primary"
              onClick={() => setOpen(false)}
            >
              Únete al piloto
            </Link>
            <Link
              href="/contacto"
              className="btn btn-outline"
              onClick={() => setOpen(false)}
            >
              Contacto
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
