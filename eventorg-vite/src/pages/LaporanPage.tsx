import { Badge, Bar, CardTitle, Donut, Kpi } from '@/components/shared';
import type { BadgeTone } from '@/types';

interface DivisionScore {
  label: string;
  value: number;
  color: string;
}

const DIVISIONS: DivisionScore[] = [
  { label: 'Div. Acara', value: 82, color: 'var(--green)' },
  { label: 'Div. Humas', value: 78, color: 'var(--violet)' },
  { label: 'Sponsorship', value: 65, color: 'var(--coral)' },
  { label: 'Perlengkapan', value: 70, color: 'var(--blue)' },
  { label: 'Konsumsi', value: 88, color: 'var(--green)' },
  { label: 'Dokumentasi', value: 60, color: 'var(--pink)' },
  { label: 'Dekorasi', value: 75, color: 'var(--amber)' },
  { label: 'Keamanan', value: 80, color: 'var(--rose)' },
];

interface ArchivedEvent {
  e: string;
  y: string;
  p: string;
  b: string;
  s: number;
  tone: BadgeTone;
}

const ARCHIVES: ArchivedEvent[] = [
  { e: 'TECHFEST 2024', y: '2024', p: '1.847', b: 'Rp 85 Jt', s: 92, tone: 'green' },
  { e: 'TECHFEST 2023', y: '2023', p: '1.342', b: 'Rp 65 Jt', s: 87, tone: 'green' },
  { e: 'UTI Innovation 2022', y: '2022', p: '920', b: 'Rp 45 Jt', s: 79, tone: 'amber' },
];

export function LaporanPage() {
  return (
    <>
      <div className="page-head">
        <div>
          <h1>Laporan & Evaluasi</h1>
          <p>Dashboard ringkasan, laporan keuangan final, evaluasi divisi</p>
        </div>
        <div className="actions">
          <button type="button" className="btn btn-ghost"><i className="ti ti-file-export" /> Export Laporan</button>
          <button type="button" className="btn btn-primary"><i className="ti ti-archive" /> Arsipkan Event</button>
        </div>
      </div>

      <div className="grid g-5" style={{ marginBottom: 18 }}>
        <Kpi label="Anggota" value="73" icon="users" tone="violet" />
        <Kpi label="Task" value="142/183" sub="78% selesai" trend="up" icon="checks" tone="green" />
        <Kpi label="Budget" value="23%" sub="Rp 23 / 100 Jt" icon="wallet" tone="coral" />
        <Kpi label="Sponsor" value="3/7" sub="deal closed" icon="building-store" tone="amber" />
        <Kpi label="Hari" value="47" sub="menuju hari H" icon="calendar" tone="green" />
      </div>

      <div className="grid g-7-5" style={{ marginBottom: 18 }}>
        <div className="card card-pad-lg">
          <CardTitle title="Evaluasi per Divisi" hint="Skor 1–100" />
          <div className="stack" style={{ gap: 12 }}>
            {DIVISIONS.map((d) => (
              <div
                key={d.label}
                style={{ display: 'grid', gridTemplateColumns: '120px 1fr 50px', gap: 12, alignItems: 'center' }}
              >
                <div style={{ fontSize: 13 }}>{d.label}</div>
                <Bar value={d.value} color={d.color} />
                <div className="mono" style={{ textAlign: 'right', fontWeight: 700, fontSize: 13 }}>{d.value}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="card card-pad-lg">
          <CardTitle title="Distribusi Budget" />
          <div className="donut-wrap">
            <Donut
              total={100}
              data={[
                { value: 25, color: 'var(--green)' },
                { value: 30, color: 'var(--violet)' },
                { value: 20, color: 'var(--amber)' },
                { value: 15, color: 'var(--blue)' },
                { value: 10, color: 'var(--coral)' },
              ]}
            />
            <div className="donut-legend">
              <div className="legend-item">
                <span className="dot" style={{ background: 'var(--green)' }} />
                <span className="lbl">Acara</span>
                <span className="val">Rp 25 Jt</span>
              </div>
              <div className="legend-item">
                <span className="dot" style={{ background: 'var(--violet)' }} />
                <span className="lbl">Perlengkapan</span>
                <span className="val">Rp 30 Jt</span>
              </div>
              <div className="legend-item">
                <span className="dot" style={{ background: 'var(--amber)' }} />
                <span className="lbl">Humas</span>
                <span className="val">Rp 20 Jt</span>
              </div>
              <div className="legend-item">
                <span className="dot" style={{ background: 'var(--blue)' }} />
                <span className="lbl">Konsumsi</span>
                <span className="val">Rp 15 Jt</span>
              </div>
              <div className="legend-item">
                <span className="dot" style={{ background: 'var(--coral)' }} />
                <span className="lbl">Lainnya</span>
                <span className="val">Rp 10 Jt</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card card-pad-lg">
        <CardTitle title="Arsip Event Sebelumnya" />
        <table>
          <thead>
            <tr>
              <th>Event</th>
              <th>Tahun</th>
              <th>Peserta</th>
              <th>Budget</th>
              <th>Skor</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {ARCHIVES.map((r, i) => (
              <tr key={i}>
                <td style={{ fontWeight: 600 }}>{r.e}</td>
                <td className="muted">{r.y}</td>
                <td className="mono">{r.p}</td>
                <td className="mono">{r.b}</td>
                <td><Badge tone={r.tone}>{r.s}/100</Badge></td>
                <td style={{ textAlign: 'right' }}>
                  <button type="button" className="btn btn-ghost btn-sm">
                    <i className="ti ti-eye" /> Lihat
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
