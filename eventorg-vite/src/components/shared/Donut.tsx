interface DonutSlice {
  value: number;
  color: string;
}

interface DonutProps {
  data: DonutSlice[];
  total: number;
  centerLabel?: string;
  centerSub?: string;
}

export function Donut({
  data,
  total,
  centerLabel = '100Jt',
  centerSub = 'Total Budget',
}: DonutProps) {
  const R = 56;
  const C = 2 * Math.PI * R;
  let acc = 0;
  return (
    <svg viewBox="0 0 140 140" width="140" height="140" style={{ flexShrink: 0 }}>
      <circle cx="70" cy="70" r={R} fill="none" stroke="var(--bg)" strokeWidth="18" />
      {data.map((d, i) => {
        const len = (d.value / total) * C;
        const off = -acc;
        acc += len;
        return (
          <circle
            key={i}
            cx="70"
            cy="70"
            r={R}
            fill="none"
            stroke={d.color}
            strokeWidth="18"
            strokeDasharray={`${len} ${C - len}`}
            strokeDashoffset={off}
            transform="rotate(-90 70 70)"
          />
        );
      })}
      <text
        x="70"
        y="68"
        textAnchor="middle"
        fontFamily="Plus Jakarta Sans"
        fontWeight="700"
        fontSize="20"
        fill="var(--ink)"
      >
        {centerLabel}
      </text>
      <text x="70" y="86" textAnchor="middle" fontFamily="Inter" fontSize="10" fill="var(--ink-3)">
        {centerSub}
      </text>
    </svg>
  );
}
