import { useState } from 'react';
import { Bar, CardTitle, Kpi, Spark } from '@/components/shared';
import { useToast } from '@/context/ToastContext';

interface Approval {
  id: number;
  name: string;
  sub: string;
  amt: string;
}

interface RabRow {
  d: string;
  b: string;
  t: string;
  s: string;
  pct: number;
}

interface Transaction {
  ico: string;
  tone: 'green' | 'coral';
  label: string;
  sub: string;
  amt: string;
  neg?: boolean;
}

export function KeuanganPage() {
  const toast = useToast();
  const [approvals, setApprovals] = useState<Approval[]>([
    { id: 1, name: 'Print Spanduk 3x1m', sub: 'Humas · 2 jam lalu', amt: 'Rp 750.000' },
    { id: 2, name: 'Sewa Kamera DSLR 2 hari', sub: 'Dokumentasi · 5 jam lalu', amt: 'Rp 1.500.000' },
    { id: 3, name: 'ATK Kesekretariatan', sub: 'Sekretariat · Kemarin', amt: 'Rp 320.000' },
  ]);

  const decide = (id: number, ok: boolean) => {
    setApprovals((prev) => prev.filter((x) => x.id !== id));
    toast(ok ? 'Reimbursement disetujui' : 'Pengajuan ditolak');
  };

  const rab: RabRow[] = [
    { d: 'Acara', b: '25 Jt', t: '8,2 Jt', s: '16,8 Jt', pct: 33 },
    { d: 'Humas', b: '20 Jt', t: '6,5 Jt', s: '13,5 Jt', pct: 33 },
    { d: 'Perlengkapan', b: '30 Jt', t: '5,1 Jt', s: '24,9 Jt', pct: 17 },
    { d: 'Konsumsi', b: '15 Jt', t: '2,0 Jt', s: '13,0 Jt', pct: 13 },
    { d: 'Dekorasi', b: '10 Jt', t: '1,2 Jt', s: '8,8 Jt', pct: 12 },
  ];

  const transactions: Transaction[] = [
    { ico: 'arrow-up', tone: 'coral', label: 'Transport survey venue', sub: 'Acara · 10 Jul', amt: '−Rp 150.000', neg: true },
    { ico: 'arrow-down', tone: 'green', label: 'Transfer sponsor Indosat', sub: 'Sponsorship · 8 Jul', amt: '+Rp 15.000.000' },
    { ico: 'arrow-up', tone: 'coral', label: 'Print proposal sponsorship', sub: 'Humas · 7 Jul', amt: '−Rp 85.000', neg: true },
    { ico: 'arrow-down', tone: 'green', label: 'Dana awal kampus', sub: 'Bendahara · 1 Jul', amt: '+Rp 30.000.000' },
  ];

  return (
    <>
      <div className="page-head">
        <div>
          <h1>Keuangan & Reimbursement</h1>
          <p>RAB, tracker pengeluaran, dan approval reimbursement</p>
        </div>
        <div className="actions">
          <button type="button" className="btn btn-ghost"><i className="ti ti-file-export" /> Export PDF</button>
          <button type="button" className="btn btn-primary"><i className="ti ti-upload" /> Upload Bukti</button>
        </div>
      </div>

      <div className="grid g-4" style={{ marginBottom: 18 }}>
        <Kpi label="Total Budget" value="Rp 100 Jt" sub="kampus + sponsor" icon="wallet" tone="violet" />
        <Kpi label="Terpakai" value="Rp 23 Jt" sub="23% dari budget" trend="down" icon="arrow-up" tone="coral" />
        <Kpi label="Sisa Budget" value="Rp 77 Jt" sub="tersedia" trend="up" icon="cash" tone="green" />
        <Kpi label="Pending ACC" value={String(approvals.length)} sub="menunggu approval" icon="hourglass" tone="amber" />
      </div>

      <div className="grid g-7-5" style={{ marginBottom: 18 }}>
        <div className="card card-pad-lg">
          <CardTitle title="RAB per Divisi" hint="Pemakaian realtime" />
          <table>
            <thead>
              <tr>
                <th>Divisi</th>
                <th>Budget</th>
                <th>Terpakai</th>
                <th>Sisa</th>
                <th style={{ width: 120 }}>%</th>
              </tr>
            </thead>
            <tbody>
              {rab.map((r, i) => (
                <tr key={i}>
                  <td style={{ fontWeight: 600 }}>{r.d}</td>
                  <td className="mono">Rp {r.b}</td>
                  <td className="mono" style={{ color: 'var(--coral)' }}>Rp {r.t}</td>
                  <td className="mono" style={{ color: 'var(--green-2)' }}>Rp {r.s}</td>
                  <td><Bar value={r.pct} color="var(--green)" /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="card card-pad-lg">
          <CardTitle title="Pending Approval" hint={`${approvals.length} item`} />
          {approvals.length === 0 ? (
            <div style={{ padding: '24px 14px', textAlign: 'center', color: 'var(--ink-3)', fontSize: 13 }}>
              <i className="ti ti-circle-check" style={{ fontSize: 32, color: 'var(--green)' }} />
              <div style={{ marginTop: 8 }}>Semua approval selesai 🎉</div>
            </div>
          ) : (
            approvals.map((a) => (
              <div key={a.id} className="approve-row">
                <div className="approve-info">
                  <div className="approve-name">{a.name}</div>
                  <div className="approve-sub">{a.sub}</div>
                </div>
                <div className="mono" style={{ fontWeight: 700, fontSize: 13.5 }}>{a.amt}</div>
                <button type="button" className="btn-yes" onClick={() => decide(a.id, true)}>
                  <i className="ti ti-check" />
                </button>
                <button type="button" className="btn-no" onClick={() => decide(a.id, false)}>
                  <i className="ti ti-x" />
                </button>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="grid g-7-5">
        <div className="card card-pad-lg">
          <CardTitle title="Cash Flow" hint="Juni — Juli 2025" />
          <div style={{ display: 'flex', gap: 22, alignItems: 'flex-end', marginBottom: 10 }}>
            <div>
              <div className="eyebrow">Net This Month</div>
              <div
                style={{
                  fontFamily: 'Plus Jakarta Sans',
                  fontWeight: 800,
                  fontSize: 32,
                  letterSpacing: '-0.025em',
                  color: 'var(--green-2)',
                }}
              >
                +Rp 12,4 Jt
              </div>
            </div>
            <div style={{ display: 'flex', gap: 14, marginBottom: 6 }}>
              <div className="row" style={{ gap: 6 }}>
                <span className="tag-dot" style={{ background: 'var(--green)' }} />
                <span className="tiny muted">Pemasukan</span>
              </div>
              <div className="row" style={{ gap: 6 }}>
                <span className="tag-dot" style={{ background: 'var(--coral)' }} />
                <span className="tiny muted">Pengeluaran</span>
              </div>
            </div>
          </div>
          <Spark
            data={[2, 5, 4, 8, 6, 12, 9, 15, 14, 17, 19, 16]}
            color="var(--green)"
            fill="var(--green-soft)"
            height={120}
          />
        </div>

        <div className="card card-pad-lg">
          <CardTitle title="Transaksi Terbaru" />
          {transactions.map((t, i) => (
            <div
              key={i}
              style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 0', borderBottom: '1px dashed var(--line)' }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 10,
                  background: t.tone === 'green' ? 'var(--green-soft)' : 'var(--coral-soft)',
                  color: t.tone === 'green' ? 'var(--green-2)' : '#b95423',
                  display: 'grid',
                  placeItems: 'center',
                }}
              >
                <i className={`ti ti-${t.ico}`} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13.5, fontWeight: 500 }}>{t.label}</div>
                <div className="muted tiny">{t.sub}</div>
              </div>
              <div
                className="mono"
                style={{ fontWeight: 700, fontSize: 13.5, color: t.neg ? 'var(--coral)' : 'var(--green-2)' }}
              >
                {t.amt}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
