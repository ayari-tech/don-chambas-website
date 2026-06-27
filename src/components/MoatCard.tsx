import type { ReactNode } from "react";

export default function MoatCard({
  title,
  badge,
  children,
}: {
  title: string;
  badge: string;
  children: ReactNode;
}) {
  return (
    <div className="moat">
      <div className="moat-head">
        <h3>{title}</h3>
        <span className="id">{badge}</span>
      </div>
      <div className="body">{children}</div>
    </div>
  );
}
