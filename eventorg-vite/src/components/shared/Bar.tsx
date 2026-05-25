interface BarProps {
  value: number;
  color?: string;
  lg?: boolean;
}

export function Bar({ value, color = 'var(--green)', lg = false }: BarProps) {
  return (
    <div className={`bar ${lg ? 'lg' : ''}`.trim()}>
      <div style={{ width: `${value}%`, background: color }} />
    </div>
  );
}
