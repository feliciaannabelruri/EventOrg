interface SparkProps {
  data: number[];
  color?: string;
  height?: number;
  fill?: string;
}

export function Spark({ data, color = 'var(--green)', height = 60, fill }: SparkProps) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const w = 200;
  const h = height;
  const pts = data.map((v, i) => {
    const x = (i / (data.length - 1)) * w;
    const y = h - ((v - min) / (max - min || 1)) * (h - 8) - 4;
    return [x, y] as const;
  });
  const path = 'M ' + pts.map((p) => p.join(',')).join(' L ');
  const fillPath = path + ` L ${w},${h} L 0,${h} Z`;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" height={h} preserveAspectRatio="none">
      {fill && <path d={fillPath} fill={fill} />}
      <path
        d={path}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
