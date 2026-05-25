import { useState } from 'react';
import { Avatar, Badge, CardTitle, Kpi, Stars } from '@/components/shared';
import { useToast } from '@/context/ToastContext';
import type { AvatarTone, BadgeTone } from '@/types';

interface Applicant {
  n: string;
  nim: string;
  ipk: number;
  j: string;
  s: string;
  tone: BadgeTone;
  avatar: AvatarTone;
}

type CriterionKey = 'comm' | 'kreasi' | 'lead' | 'motivasi' | 'tim';

export function RekrutmenPage() {
  const toast = useToast();

  const applicants: Applicant[] = [
    { n: 'Farah Maulida', nim: '2021130045', ipk: 3.87, j: '15 Jul · 10:00', s: 'Terjadwal', tone: 'green', avatar: 'green' },
    { n: 'Bima Prakoso', nim: '2022140067', ipk: 3.72, j: '15 Jul · 11:00', s: 'Terjadwal', tone: 'green', avatar: 'coral' },
    { n: 'Nabila Rahman', nim: '2022140089', ipk: 3.91, j: '—', s: 'Pending', tone: 'amber', avatar: 'amber' },
    { n: 'Kevin Wijaya', nim: '2021130102', ipk: 3.65, j: '16 Jul · 09:00', s: 'Terjadwal', tone: 'green', avatar: 'violet' },
    { n: 'Lisa Amelia', nim: '2022140055', ipk: 3.80, j: '—', s: 'Pending', tone: 'amber', avatar: 'pink' },
  ];

  const [selected, setSelected] = useState(0);
  const [scores, setScores] = useState<Record<CriterionKey, number>>({
    comm: 4,
    kreasi: 5,
    lead: 3,
    motivasi: 4,
    tim: 5,
  });

  const sum = Object.values(scores).reduce((a, b) => a + b, 0);
  const totalPct = Math.round((sum / 25) * 100);
  const sel = applicants[selected];

  const criteria: Array<[string, CriterionKey]> = [
    ['Komunikasi', 'comm'],
    ['Kreativitas', 'kreasi'],
    ['Kepemimpinan', 'lead'],
    ['Motivasi', 'motivasi'],
    ['Kerjasama Tim', 'tim'],
  ];

  return (
    <>
      <div className="page-head">
        <div>
          <h1>Rekrutmen & Interview</h1>
          <p>62 pendaftar total · Rekrutmen ditutup 20 Juli 2025</p>
        </div>
        <div className="actions">
          <button type="button" className="btn btn-ghost"><i className="ti ti-filter" /> Filter</button>
          <button type="button" className="btn btn-primary"><i className="ti ti-plus" /> Buka Rekrutmen</button>
        </div>
      </div>

      <div className="grid g-4" style={{ marginBottom: 18 }}>
        <Kpi label="Total Pendaftar" value="62" sub="4 divisi" icon="users" tone="violet" />
        <Kpi label="Dijadwalkan" value="28" sub="minggu depan" trend="up" icon="calendar-clock" tone="green" />
        <Kpi label="Menunggu Review" value="12" sub="belum dinilai" icon="hourglass" tone="amber" />
        <Kpi label="Diterima" value="0" sub="pengumuman 25 Jul" icon="trophy" tone="coral" />
      </div>

      <div className="grid g-7-5">
        <div className="card card-pad-lg">
          <CardTitle
            title="Pelamar — Div. Humas"
            hint="18 pendaftar"
            action={
              <select className="search" style={{ padding: '6px 14px', maxWidth: 160, fontSize: 12 }}>
                <option>Semua status</option>
                <option>Terjadwal</option>
                <option>Pending</option>
              </select>
            }
          />
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Nama</th>
                <th>NIM</th>
                <th>IPK</th>
                <th>Jadwal</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {applicants.map((a, i) => (
                <tr
                  key={i}
                  onClick={() => setSelected(i)}
                  style={{
                    cursor: 'pointer',
                    background: i === selected ? 'var(--green-soft)' : '',
                  }}
                >
                  <td style={{ width: 38 }}>
                    <Avatar name={a.n} tone={a.avatar} size="sm" />
                  </td>
                  <td style={{ fontWeight: 600 }}>{a.n}</td>
                  <td className="muted mono">{a.nim}</td>
                  <td className="mono">{a.ipk}</td>
                  <td className="muted">{a.j}</td>
                  <td>
                    <Badge tone={a.tone}>{a.s}</Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="card card-pad-lg">
          <CardTitle title="Scorecard Interview" hint={<Badge tone="violet">In progress</Badge>} />
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
            <Avatar name={sel.n} tone={sel.avatar} size="lg" />
            <div>
              <div style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 700, fontSize: 16 }}>{sel.n}</div>
              <div className="muted" style={{ fontSize: 12.5 }}>Div. Humas · {sel.j}</div>
            </div>
          </div>
          {criteria.map(([lbl, k]) => (
            <div key={k} className="score-row">
              <div style={{ flex: 1, fontSize: 13 }}>{lbl}</div>
              <Stars value={scores[k]} onChange={(v) => setScores((prev) => ({ ...prev, [k]: v }))} />
            </div>
          ))}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 18,
              padding: 14,
              background: 'var(--green-soft)',
              borderRadius: 14,
            }}
          >
            <div>
              <div className="eyebrow">Skor Total</div>
              <div
                style={{
                  fontFamily: 'Plus Jakarta Sans',
                  fontWeight: 800,
                  fontSize: 28,
                  color: 'var(--green-2)',
                  letterSpacing: '-0.025em',
                }}
              >
                {totalPct} <span style={{ fontSize: 16, color: 'var(--ink-3)' }}>/ 100</span>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 6 }}>
              <button type="button" className="btn btn-ghost btn-sm" onClick={() => toast('Tidak lulus dicatat')}>
                Tidak Lulus
              </button>
              <button type="button" className="btn btn-primary btn-sm" onClick={() => toast('Pelamar diluluskan')}>
                <i className="ti ti-check" /> Lulus
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
