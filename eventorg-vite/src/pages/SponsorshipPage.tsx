import { Badge, Bar, CardTitle, Donut, Kpi } from '@/components/shared';
import type { BadgeTone } from '@/types';

type SponsorTier = 'Platinum' | 'Gold' | 'Silver' | 'Bronze';

interface Sponsor {
  logo: string;
  name: string;
  tier: SponsorTier;
  target: string;
  pct: number;
  stage: string;
  tone: BadgeTone;
}

const SPONSORS: Sponsor[] = [
  { logo: 'TL', name: 'Telkomsel', tier: 'Platinum', target: 'Rp 20.000.000', pct: 60, stage: 'Negosiasi', tone: 'amber' },
  { logo: 'GJ', name: 'Gojek', tier: 'Gold', target: 'Rp 15.000.000', pct: 100, stage: 'Deal ✓', tone: 'green' },
  { logo: 'ID', name: 'Indosat Ooredoo', tier: 'Gold', target: 'Rp 15.000.000', pct: 100, stage: 'Masuk ✓', tone: 'green' },
  { logo: 'SC', name: 'Samsung Campus', tier: 'Silver', target: 'Rp 10.000.000', pct: 30, stage: 'Proposal', tone: 'violet' },
  { logo: 'XL', name: 'XL Axiata', tier: 'Silver', target: 'Rp 8.000.000', pct: 10, stage: 'Cold Lead', tone: 'gray' },
  { logo: 'SP', name: 'Shopee', tier: 'Bronze', target: 'Rp 5.000.000', pct: 100, stage: 'Masuk ✓', tone: 'green' },
  { logo: 'BC', name: 'BCA Mobile', tier: 'Bronze', target: 'Rp 5.000.000', pct: 45, stage: 'Negosiasi', tone: 'amber' },
];

const TIER_TONE: Record<SponsorTier, BadgeTone> = {
  Platinum: 'violet',
  Gold: 'amber',
  Silver: 'gray',
  Bronze: 'coral',
};

const BAR_COLOR = (tone: BadgeTone): string => {
  switch (tone) {
    case 'green': return 'var(--green)';
    case 'amber': return 'var(--amber)';
    case 'violet': return 'var(--violet)';
    default: return 'var(--ink-3)';
  }
};

export function SponsorshipPage() {
  return (
    <>
      <div className="page-head">
        <div>
          <h1>Sponsorship & Kemitraan</h1>
          <p>Database sponsor, estimasi dana, tracker negosiasi</p>
        </div>
        <div className="actions">
          <button type="button" className="btn btn-ghost"><i className="ti ti-file-description" /> Template Proposal</button>
          <button type="button" className="btn btn-primary"><i className="ti ti-plus" /> Tambah Sponsor</button>
        </div>
      </div>

      <div className="grid g-4" style={{ marginBottom: 18 }}>
        <Kpi label="Target Dana" value="Rp 60 Jt" sub="dari sponsorship" icon="target" tone="violet" />
        <Kpi label="Sudah Masuk" value="Rp 28 Jt" sub="47% dari target" trend="up" icon="cash" tone="green" />
        <Kpi label="Negosiasi" value="4" sub="pipeline aktif" icon="message-circle" tone="amber" />
        <Kpi label="Deal Selesai" value="3" sub="dari 7 prospek" icon="check" tone="coral" />
      </div>

      <div className="grid g-7-5">
        <div className="card card-pad-lg">
          <CardTitle
            title="Database Sponsor"
            hint={`${SPONSORS.length} kontak aktif`}
            action={
              <button type="button" className="btn btn-ghost btn-sm">
                <i className="ti ti-filter" /> Tier
              </button>
            }
          />
          {SPONSORS.map((s, i) => (
            <div key={i} className="sponsor-row">
              <div className="sponsor-logo">{s.logo}</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                  <div style={{ fontSize: 14, fontWeight: 600 }}>{s.name}</div>
                  <Badge tone={TIER_TONE[s.tier]}>{s.tier}</Badge>
                </div>
                <div className="muted tiny mono" style={{ marginTop: 2 }}>{s.target}</div>
              </div>
              <div style={{ width: 100 }}>
                <Bar value={s.pct} color={BAR_COLOR(s.tone)} />
              </div>
              <Badge tone={s.tone}>{s.stage}</Badge>
            </div>
          ))}
        </div>

        <div className="stack" style={{ gap: 18 }}>
          <div className="card card-pad-lg card-tone-green">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
              <div className="eyebrow" style={{ color: 'rgba(255,255,255,0.8)' }}>Pencapaian</div>
              <i className="ti ti-trophy" style={{ fontSize: 22, opacity: 0.7 }} />
            </div>
            <div
              style={{
                fontFamily: 'Plus Jakarta Sans',
                fontWeight: 800,
                fontSize: 44,
                letterSpacing: '-0.03em',
                lineHeight: 1,
              }}
            >
              47%
            </div>
            <div style={{ fontSize: 13, opacity: 0.85, marginTop: 6 }}>Target sponsorship</div>
            <div style={{ marginTop: 14 }}>
              <div className="bar" style={{ background: 'rgba(255,255,255,0.15)' }}>
                <div style={{ width: '47%', background: 'white' }} />
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8, fontSize: 11.5, opacity: 0.75 }}>
              <span>Rp 28 Jt</span>
              <span>Rp 60 Jt</span>
            </div>
          </div>

          <div className="card card-pad-lg">
            <CardTitle title="Distribusi Tier" />
            <div className="donut-wrap">
              <Donut
                total={60}
                centerLabel="60Jt"
                centerSub="Target"
                data={[
                  { value: 20, color: 'var(--violet)' },
                  { value: 30, color: 'var(--amber)' },
                  { value: 18, color: 'var(--ink-3)' },
                  { value: 10, color: 'var(--coral)' },
                ]}
              />
              <div className="donut-legend">
                <div className="legend-item">
                  <span className="dot" style={{ background: 'var(--violet)' }} />
                  <span className="lbl">Platinum</span>
                  <span className="val">Rp 20 Jt</span>
                </div>
                <div className="legend-item">
                  <span className="dot" style={{ background: 'var(--amber)' }} />
                  <span className="lbl">Gold</span>
                  <span className="val">Rp 30 Jt</span>
                </div>
                <div className="legend-item">
                  <span className="dot" style={{ background: 'var(--ink-3)' }} />
                  <span className="lbl">Silver</span>
                  <span className="val">Rp 18 Jt</span>
                </div>
                <div className="legend-item">
                  <span className="dot" style={{ background: 'var(--coral)' }} />
                  <span className="lbl">Bronze</span>
                  <span className="val">Rp 10 Jt</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
