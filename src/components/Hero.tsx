import type { ReactNode } from "react";

type MetaItem = { label: string; value: string };

export default function Hero({
  eyebrow,
  title,
  subtitle,
  tagline = false,
  meta,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle: string;
  tagline?: boolean;
  meta?: MetaItem[];
  children?: ReactNode;
}) {
  return (
    <div className="hero">
      <div className="wrap">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p className="hero-sub">{subtitle}</p>
        {tagline && (
          <p>
            <span className="dc-tagline">
              ¿Buscas jale o quien jale pa´ tu restaurante?
            </span>
          </p>
        )}
        {children && <div className="hero-ctas">{children}</div>}
        {meta && meta.length > 0 && (
          <div className="hero-meta">
            {meta.map((m) => (
              <div key={m.label}>
                <b>{m.label}</b> {m.value}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
