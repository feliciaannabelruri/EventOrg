import { Avatar, CardTitle } from '@/components/shared';
import type { AvatarTone } from '@/types';

interface CoreMember {
  n: string;
  r: string;
  tone: AvatarTone;
}

interface Division {
  d: string;
  count: number;
  tone: AvatarTone;
}

export function OrgPage() {
  const divs: Division[] = [
    { d: 'Acara', count: 12, tone: 'green' },
    { d: 'Humas', count: 10, tone: 'violet' },
    { d: 'Sponsorship', count: 8, tone: 'coral' },
    { d: 'Perlengkapan', count: 9, tone: 'blue' },
    { d: 'Dokumentasi', count: 7, tone: 'pink' },
    { d: 'Konsumsi', count: 6, tone: 'amber' },
    { d: 'Keamanan', count: 8, tone: 'rose' },
    { d: 'Dekorasi', count: 7, tone: 'green' },
  ];

  const core: CoreMember[] = [
    { n: 'Aldi Rahmawan', r: 'Ketua Umum', tone: 'green' },
    { n: 'Sinta Noviyanti', r: 'Wakil Ketua', tone: 'coral' },
    { n: 'Reza Pratama', r: 'Sekretaris', tone: 'amber' },
    { n: 'Dina Kusuma', r: 'Bendahara', tone: 'violet' },
  ];

  const secondTier: Array<[string, string, AvatarTone]> = [
    ['Sinta N.', 'Wakil Ketua', 'coral'],
    ['Reza P.', 'Sekretaris', 'amber'],
    ['Dina K.', 'Bendahara', 'violet'],
  ];

  return (
    <>
      <div className="page-head">
        <div>
          <h1>Organisasi & Kepanitiaan</h1>
          <p>TECHFEST 2025 · Universitas Teknologi Indonesia</p>
        </div>
        <div className="actions">
          <button type="button" className="btn btn-ghost"><i className="ti ti-edit" /> Edit Profil</button>
          <button type="button" className="btn btn-primary"><i className="ti ti-plus" /> Buat Divisi</button>
        </div>
      </div>

      <div className="grid g-6-6" style={{ marginBottom: 18 }}>
        <div className="card card-pad-lg">
          <CardTitle title="Profil Event" />
          <div style={{ display: 'flex', gap: 16, alignItems: 'center', marginBottom: 18 }}>
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: 18,
                background: 'linear-gradient(135deg, var(--green), var(--green-3))',
                display: 'grid',
                placeItems: 'center',
                color: 'white',
                fontFamily: 'Plus Jakarta Sans',
                fontWeight: 800,
                fontSize: 18,
                letterSpacing: '-0.02em',
              }}
            >
              TF
            </div>
            <div>
              <div style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 700, fontSize: 20, letterSpacing: '-0.02em' }}>
                TECHFEST 2025
              </div>
              <div className="muted" style={{ fontSize: 13 }}>Festival Teknologi & Inovasi Kampus</div>
            </div>
          </div>
          <div className="grid g-2" style={{ gap: 12 }}>
            {[
              ['Tanggal', '31 Agustus 2025'],
              ['Lokasi', 'Gelanggang UTI'],
              ['Target Peserta', '2.000 orang'],
              ['Kategori', 'Festival Publik'],
            ].map(([k, v]) => (
              <div key={k} className="tile-stat">
                <div className="label">{k}</div>
                <div style={{ fontSize: 13.5, fontWeight: 600, marginTop: 2 }}>{v}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="card card-pad-lg">
          <CardTitle title="Kepanitiaan Inti" hint="4 orang" />
          {core.map((m, i) => (
            <div
              key={i}
              style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 0', borderBottom: '1px dashed var(--line)' }}
            >
              <Avatar name={m.n} tone={m.tone} />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13.5, fontWeight: 600 }}>{m.n}</div>
                <div className="muted tiny">{m.r}</div>
              </div>
              <button type="button" className="icon-btn" style={{ width: 32, height: 32 }}>
                <i className="ti ti-mail" style={{ fontSize: 15 }} />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="card card-pad-lg">
        <CardTitle title="Struktur Organisasi" hint="8 divisi · 67 anggota" />
        <div className="org-chart">
          <div className="org-node head">
            <Avatar name="Aldi Rahmawan" tone="green" />
            <div className="name" style={{ color: 'white' }}>Aldi Rahmawan</div>
            <div className="role">Ketua Umum</div>
          </div>
          <div className="org-connector" />
          <div className="org-row" style={{ gap: 14 }}>
            {secondTier.map((m, i) => (
              <div key={i} className="org-node">
                <Avatar name={m[0]} tone={m[2]} size="sm" />
                <div className="name">{m[0]}</div>
                <div className="role">{m[1]}</div>
              </div>
            ))}
          </div>
          <div className="org-connector" />
          <div className="org-row" style={{ maxWidth: 880 }}>
            {divs.map((d) => (
              <div key={d.d} className="org-node" style={{ minWidth: 110 }}>
                <span
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: 8,
                    background: 'var(--green-soft)',
                    display: 'grid',
                    placeItems: 'center',
                    color: 'var(--green-2)',
                    fontSize: 14,
                  }}
                >
                  <i className="ti ti-users" />
                </span>
                <div className="name" style={{ fontSize: 12.5 }}>Div. {d.d}</div>
                <div className="count">{d.count} anggota</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
