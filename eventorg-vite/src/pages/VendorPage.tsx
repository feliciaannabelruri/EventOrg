import { Badge, CardTitle } from '@/components/shared';
import { useToast } from '@/context/ToastContext';
import type { BadgeTone } from '@/types';

interface Vendor {
  cat: string;
  name: string;
  price: string;
  unit: string;
  desc: string;
  tags: Array<[string, BadgeTone]>;
}

const VENDORS: Vendor[] = [
  {
    cat: '🔊 Sound System',
    name: 'ProSound Studio',
    price: 'Rp 7.500.000',
    unit: '/hari',
    desc: 'Line Array JBL · 2 subwoofer · Operator',
    tags: [['Recommended', 'green'], ['4.8★', 'gray']],
  },
  {
    cat: '🎪 Panggung',
    name: 'Stage Master Jakarta',
    price: 'Rp 11.000.000',
    unit: '/event',
    desc: '10×8m · Flooring · Truss · Risers',
    tags: [['Top Rated', 'violet'], ['4.9★', 'gray']],
  },
  {
    cat: '💡 Lighting',
    name: 'LightFX Indonesia',
    price: 'Rp 5.200.000',
    unit: '/event',
    desc: 'Moving head · Wash · Spot · DMX',
    tags: [['Budget Friendly', 'green'], ['4.6★', 'gray']],
  },
  {
    cat: '📸 Dokumentasi',
    name: 'ShootFirst Agency',
    price: 'Rp 4.500.000',
    unit: '/hari',
    desc: '2 Fotografer + 1 Videografer · Drone',
    tags: [['Popular', 'pink'], ['4.7★', 'gray']],
  },
  {
    cat: '🍽️ Konsumsi',
    name: 'Nusantara Catering',
    price: 'Rp 35.000',
    unit: '/porsi',
    desc: 'Nasi kotak · Snack · Halal certified',
    tags: [['Halal', 'amber'], ['4.5★', 'gray']],
  },
  {
    cat: '🎨 Dekorasi',
    name: 'DekoFest Creative',
    price: 'Rp 8.800.000',
    unit: '/event',
    desc: 'Backdrop · Photobooth · Signage',
    tags: [['Fast Setup', 'green'], ['4.7★', 'gray']],
  },
];

interface EstimateTile {
  label: string;
  value: string;
  sub: string;
  highlight?: boolean;
}

const ESTIMATE: EstimateTile[] = [
  { label: 'Sound System', value: 'Rp 8 Jt', sub: '2 hari' },
  { label: 'Panggung', value: 'Rp 12 Jt', sub: '10×8m' },
  { label: 'LED Screen', value: 'Rp 6 Jt', sub: '2 panel' },
  { label: 'Lighting', value: 'Rp 5 Jt', sub: 'full rig' },
  { label: 'Total', value: 'Rp 31 Jt', sub: 'all vendor', highlight: true },
];

export function VendorPage() {
  const toast = useToast();

  return (
    <>
      <div className="page-head">
        <div>
          <h1>Vendor & Logistik</h1>
          <p>Katalog vendor, estimasi harga, perbandingan penawaran</p>
        </div>
        <button type="button" className="btn btn-primary"><i className="ti ti-plus" /> Tambah Vendor</button>
      </div>

      <div className="card card-pad-lg" style={{ background: 'var(--bg)', borderColor: 'transparent', marginBottom: 18 }}>
        <CardTitle title="Estimator Otomatis" hint="Input jenis acara → estimasi vendor" />
        <div className="grid g-2" style={{ gap: 14, marginBottom: 16 }}>
          <div className="field">
            <label>Jenis Acara</label>
            <select>
              <option>Festival Publik</option>
              <option>Seminar</option>
              <option>Konser</option>
              <option>Pameran</option>
            </select>
          </div>
          <div className="field">
            <label>Jumlah Peserta</label>
            <select>
              <option>1.000 – 2.000 orang</option>
              <option>&lt; 500 orang</option>
              <option>&gt; 2.000 orang</option>
            </select>
          </div>
        </div>
        <div className="grid g-5" style={{ gap: 10 }}>
          {ESTIMATE.map((e) => (
            <div
              key={e.label}
              className="tile-stat"
              style={{
                background: e.highlight ? 'var(--green)' : 'var(--surface)',
                color: e.highlight ? 'white' : 'var(--ink)',
                border: e.highlight ? 'none' : '1px solid var(--line)',
              }}
            >
              <div className="label" style={{ color: e.highlight ? 'rgba(255,255,255,0.8)' : 'var(--ink-3)' }}>
                {e.label}
              </div>
              <div className="val">{e.value}</div>
              <div className="sub" style={{ color: e.highlight ? 'rgba(255,255,255,0.6)' : 'var(--ink-4)' }}>
                {e.sub}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="vendor-grid">
        {VENDORS.map((v, i) => (
          <div key={i} className="vendor-card">
            <div className="vendor-cat">{v.cat}</div>
            <h4>{v.name}</h4>
            <div className="price">{v.price} <small>{v.unit}</small></div>
            <p className="muted" style={{ fontSize: 12.5, lineHeight: 1.5, margin: '8px 0 12px' }}>{v.desc}</p>
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 14 }}>
              {v.tags.map(([lbl, tone], j) => (
                <Badge key={j} tone={tone}>{lbl}</Badge>
              ))}
            </div>
            <button
              type="button"
              className="btn btn-ghost btn-sm"
              style={{ width: '100%', justifyContent: 'center' }}
              onClick={() => toast(`${v.name} ditambahkan ke pilihan`)}
            >
              <i className="ti ti-plus" /> Pilih Vendor
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
