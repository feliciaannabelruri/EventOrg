import type { ReactNode } from 'react';

interface CardTitleProps {
  title: ReactNode;
  hint?: ReactNode;
  action?: ReactNode;
}

export function CardTitle({ title, hint, action }: CardTitleProps) {
  return (
    <div className="card-title">
      <h3>{title}</h3>
      <div className="row" style={{ gap: 8 }}>
        {hint != null && <span className="muted" style={{ fontSize: 12 }}>{hint}</span>}
        {action}
      </div>
    </div>
  );
}
