import type { ReactNode } from "react";

export default function CtaFinal({
  title,
  description,
  children,
  style,
}: {
  title: ReactNode;
  description: string;
  children: ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <div className="cta-final" style={style}>
      <h3>{title}</h3>
      <p>{description}</p>
      <div style={{ marginTop: "var(--sp-5)" }}>{children}</div>
    </div>
  );
}
