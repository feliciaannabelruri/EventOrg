import type { Tone } from '@/types';

type KpiTone = Exclude<Tone, 'gray' | 'rose' | 'pink' | 'blue'> | 'plain';
type Trend = 'up' | 'down';

interface KpiProps {
  label: string;
  value: string | number;
  sub?: string;
  trend?: Trend;
  icon?: string;
  tone?: KpiTone;
}

export function Kpi({ label, value, sub, trend, icon, tone = 'plain' }: KpiProps) {
  const isGreenCard = tone === 'green';
  return (
    <div className={`kpi ${isGreenCard ? 'green' : ''}`.trim()}>
      <div className="kpi-row">
        <div className="kpi-label">{label}</div>
        {icon && (
          <div className={`kpi-circle ${tone === 'plain' ? '' : tone}`.trim()}>
            <i className={`ti ti-${icon}`} />
          </div>
        )}
      </div>
      <div className="kpi-value">{value}</div>
      {sub && (
        <div className={`kpi-sub ${trend ?? ''}`.trim()}>
          {trend === 'up' && <i className="ti ti-trending-up" style={{ fontSize: 13 }} />}
          {trend === 'down' && <i className="ti ti-trending-down" style={{ fontSize: 13 }} />}
          {sub}
        </div>
      )}
    </div>
  );
}
