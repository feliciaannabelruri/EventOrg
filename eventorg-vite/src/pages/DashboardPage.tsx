import { useState } from 'react';
import { Avatar, Bar, Badge, CardTitle, Kpi } from '@/components/shared';
import { useToast } from '@/context/ToastContext';

interface ApprovalItem {
  id: number;
  name: string;
  sub: string;
}

function ApprovalPreview() {
  const toast = useToast();
  const [items, setItems] = useState<ApprovalItem[]>([
    { id: 1, name: 'Print Spanduk 3x1m', sub: 'Humas · Rp 750.000 · 2j lalu' },
    { id: 2, name: 'Sewa DSLR 2 hari', sub: 'Dokumentasi · Rp 1.500.000 · 5j' },
  ]);

  const decide = (id: number, ok: boolean) => {
    setItems((prev) => prev.filter((x) => x.id !== id));
    toast(ok ? 'Reimbursement disetujui' : 'Pengajuan ditolak');
  };

  if (items.length === 0) {
    return (
      <div
        style={{
          padding: 14,
          background: 'var(--surface)',
          borderRadius: 12,
          fontSize: 12.5,
          color: 'var(--ink-3)',
          textAlign: 'center',
        }}
      >
        Semua approval selesai 🎉
      </div>
    );
  }
  return (
    <div style={{ background: 'var(--surface)', borderRadius: 14, padding: '4px 14px' }}>
      <div className="eyebrow" style={{ padding: '10px 0 4px' }}>Pending Approval</div>
      {items.map((it) => (
        <div key={it.id} className="approve-row">
          <div className="approve-info">
            <div className="approve-name">{it.name}</div>
            <div className="approve-sub">{it.sub}</div>
          </div>
          <button type="button" className="btn-yes" onClick={() => decide(it.id, true)}>
            <i className="ti ti-check" />
          </button>
          <button type="button" className="btn-no" onClick={() => decide(it.id, false)}>
            <i className="ti ti-x" />
          </button>
        </div>
      ))}
    </div>
  );
}

export function DashboardPage() {
  const toast = useToast();

  const divisions = [
    { name: 'Acara', emoji: '🎪', value: 82, color: 'var(--green)' },
    { name: 'Humas & Konten', emoji: '📣', value: 67, color: 'var(--violet)' },
    { name: 'Sponsorship', emoji: '💰', value: 55, color: 'var(--coral)' },
    { name: 'Perlengkapan', emoji: '🎤', value: 43, color: 'var(--blue)' },
    { name: 'Dokumentasi', emoji: '📷', value: 30, color: 'var(--pink)' },
  ];

  const reminders = [
    { t: 'Submit RAB Divisi', d: 'Overdue 2 hari', tone: 'rose' },
    { t: 'Konfirmasi Venue', d: 'Hari ini', tone: 'amber' },
    { t: 'Kirim Proposal Sponsor', d: 'Besok', tone: 'amber' },
    { t: 'Desain Poster Utama', d: '3 hari lagi', tone: 'violet' },
  ] as const;

  const reminderDotColor: Record<typeof reminders[number]['tone'], string> = {
    rose: '#ff7676',
    amber: '#f7c34e',
    violet: '#a89cef',
  };

  const recruitment = [
    { d: 'Acara', reg: 24, q: 10, pct: 95, s: 'Buka', tone: 'green' as const },
    { d: 'Humas', reg: 18, q: 8, pct: 80, s: 'Buka', tone: 'green' as const },
    { d: 'Sponsorship', reg: 9, q: 6, pct: 60, s: 'Seleksi', tone: 'amber' as const },
    { d: 'Dokumentasi', reg: 11, q: 5, pct: 100, s: 'Tutup', tone: 'rose' as const },
  ];
  const recruitmentBarColor = (tone: 'green' | 'amber' | 'rose') =>
    tone === 'green' ? 'var(--green)' : tone === 'amber' ? 'var(--amber)' : 'var(--rose)';

  const activity = [
    { a: 'Sinta N.', tone: 'green' as const, act: 'mengkonfirmasi', obj: 'Venue Gelanggang UTI', t: '12 mnt' },
    { a: 'Reza P.', tone: 'coral' as const, act: 'mengirim proposal ke', obj: 'Telkomsel Platinum', t: '1 jam' },
    { a: 'Dina K.', tone: 'amber' as const, act: 'menyetujui reimbursement', obj: 'Print Spanduk Rp 750.000', t: '2 jam' },
    { a: 'Farah M.', tone: 'violet' as const, act: 'mempublish', obj: 'Poster Countdown 30 Hari', t: '4 jam' },
    { a: 'Kevin W.', tone: 'blue' as const, act: 'menambahkan task', obj: 'Setting Sound System Layout', t: '6 jam' },
  ];

  const contributors = [
    { n: 'Sinta Noviyanti', r: 'Wakil Ketua · Acara', pts: 248, tone: 'green' as const },
    { n: 'Reza Pratama', r: 'Sekretaris · Sponsorship', pts: 215, tone: 'coral' as const },
    { n: 'Dina Kusuma', r: 'Bendahara', pts: 196, tone: 'amber' as const },
    { n: 'Farah Maulida', r: 'Humas & Konten', pts: 174, tone: 'violet' as const },
  ];

  return (
    <>
      <div className="page-head">
        <div>
          <h1>
            Selamat datang, Aldi <span style={{ display: 'inline-block', transform: 'rotate(8deg)' }}>👋</span>
          </h1>
          <p>
            TECHFEST 2025 · <strong style={{ color: 'var(--ink)' }}>47 hari</strong> menuju hari H · 73 anggota aktif
          </p>
        </div>
        <div className="actions">
          <button type="button" className="btn btn-ghost"><i className="ti ti-download" /> Import Data</button>
          <button type="button" className="btn btn-primary" onClick={() => toast('Event baru — wizard akan dibuka')}>
            <i className="ti ti-plus" /> Buat Event Baru
          </button>
        </div>
      </div>

      <div className="grid g-4" style={{ marginBottom: 18 }}>
        <Kpi label="Total Anggota" value="73" sub="+8 minggu ini" trend="up" icon="users" tone="violet" />
        <Kpi label="Task Selesai" value="142" sub="78% completion" trend="up" icon="checks" tone="green" />
        <Kpi label="Dana Terkumpul" value="68 Jt" sub="dari Rp 100 Jt target" icon="wallet" tone="coral" />
        <Kpi label="Hari Tersisa" value="47" sub="31 Agustus 2025" icon="calendar-event" tone="green" />
      </div>

      <div className="grid g-7-5" style={{ marginBottom: 18 }}>
        <div className="card card-pad-lg">
          <CardTitle
            title="Progress per Divisi"
            hint="Minggu ini"
            action={
              <button type="button" className="btn btn-ghost btn-sm">
                <i className="ti ti-filter" /> Filter
              </button>
            }
          />
          <div className="stack" style={{ gap: 18 }}>
            {divisions.map((d) => (
              <div key={d.name}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                  <span style={{ fontSize: 13.5, fontWeight: 500 }}>
                    {d.emoji} &nbsp;{d.name}
                  </span>
                  <span style={{ fontSize: 12.5, color: 'var(--ink-3)', fontWeight: 600 }} className="mono">
                    {d.value}%
                  </span>
                </div>
                <Bar value={d.value} color={d.color} />
              </div>
            ))}
          </div>
        </div>

        <div className="card card-tone-dark card-pad-lg" style={{ display: 'flex', flexDirection: 'column' }}>
          <CardTitle
            title="Reminders"
            hint={<span style={{ color: 'rgba(255,255,255,0.55)' }}>3 overdue</span>}
          />
          <div className="stack" style={{ gap: 0, flex: 1 }}>
            {reminders.map((r, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  padding: '11px 0',
                  borderBottom: '1px dashed rgba(255,255,255,0.1)',
                }}
              >
                <span className="tag-dot" style={{ background: reminderDotColor[r.tone] }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 500 }}>{r.t}</div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.55)' }}>{r.d}</div>
                </div>
                <button
                  type="button"
                  className="icon-btn"
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    borderColor: 'transparent',
                    color: 'white',
                    width: 28,
                    height: 28,
                  }}
                >
                  <i className="ti ti-arrow-up-right" style={{ fontSize: 14 }} />
                </button>
              </div>
            ))}
          </div>
          <button
            type="button"
            className="btn btn-primary"
            style={{ marginTop: 14, justifyContent: 'center', width: '100%', background: 'white', color: 'var(--ink)' }}
          >
            <i className="ti ti-calendar-plus" /> Buka Semua Reminder
          </button>
        </div>
      </div>

      <div className="grid g-7-5" style={{ marginBottom: 18 }}>
        <div className="card card-pad-lg">
          <CardTitle title="Pipeline Rekrutmen" hint="Tutup 20 Juli" />
          <table>
            <thead>
              <tr>
                <th>Divisi</th>
                <th>Pendaftar</th>
                <th>Kuota</th>
                <th>Funnel</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {recruitment.map((r, i) => (
                <tr key={i}>
                  <td style={{ fontWeight: 600 }}>{r.d}</td>
                  <td>{r.reg}</td>
                  <td className="muted">{r.q}</td>
                  <td style={{ width: 130 }}>
                    <Bar value={r.pct} color={recruitmentBarColor(r.tone)} />
                  </td>
                  <td>
                    <Badge tone={r.tone}>{r.s}</Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="card card-pad-lg" style={{ background: 'var(--green-soft)', borderColor: 'var(--green-soft-2)' }}>
          <CardTitle title="Anggaran Realtime" hint={<Badge tone="green">Live</Badge>} />
          <div className="grid g-3" style={{ gap: 8, marginBottom: 14 }}>
            <div className="tile-stat">
              <div className="label">Total</div>
              <div className="val">Rp 100 Jt</div>
            </div>
            <div className="tile-stat">
              <div className="label">Terpakai</div>
              <div className="val" style={{ color: 'var(--coral)' }}>Rp 23 Jt</div>
            </div>
            <div className="tile-stat">
              <div className="label">Sisa</div>
              <div className="val" style={{ color: 'var(--green-2)' }}>Rp 77 Jt</div>
            </div>
          </div>
          <div style={{ marginBottom: 14 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6, fontSize: 12 }}>
              <span className="muted">Pemakaian</span>
              <span className="mono" style={{ fontWeight: 600 }}>23%</span>
            </div>
            <Bar value={23} lg color="var(--green)" />
          </div>
          <ApprovalPreview />
        </div>
      </div>

      <div className="grid g-7-5">
        <div className="card card-pad-lg">
          <CardTitle title="Aktivitas Terkini" hint="48 jam terakhir" />
          <div className="stack" style={{ gap: 0 }}>
            {activity.map((e, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, padding: '12px 0', borderBottom: '1px dashed var(--line)' }}>
                <Avatar name={e.a} tone={e.tone} size="sm" />
                <div style={{ flex: 1, fontSize: 13.5 }}>
                  <strong>{e.a}</strong> <span className="muted">{e.act}</span> <strong>{e.obj}</strong>
                </div>
                <span className="muted tiny">{e.t} lalu</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card card-pad-lg">
          <CardTitle title="Top Kontributor" hint="Bulan ini" />
          <div className="stack" style={{ gap: 0 }}>
            {contributors.map((m, i) => (
              <div
                key={i}
                style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '11px 0', borderBottom: '1px dashed var(--line)' }}
              >
                <span
                  style={{
                    width: 22,
                    height: 22,
                    borderRadius: '50%',
                    display: 'grid',
                    placeItems: 'center',
                    fontSize: 11,
                    fontWeight: 700,
                    background: i === 0 ? 'var(--amber-soft)' : 'var(--bg)',
                    color: i === 0 ? '#8c620a' : 'var(--ink-2)',
                    fontFamily: 'Plus Jakarta Sans',
                  }}
                >
                  {i + 1}
                </span>
                <Avatar name={m.n} tone={m.tone} size="sm" />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 600 }}>{m.n}</div>
                  <div className="muted tiny">{m.r}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div className="mono" style={{ fontWeight: 700, fontSize: 14, color: 'var(--green-2)' }}>
                    {m.pts}
                  </div>
                  <div className="muted tiny">poin</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
