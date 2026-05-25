import { Badge, CardTitle, Kpi } from '@/components/shared';

type TileTone = 'coral' | 'green' | 'amber' | 'violet' | 'blue' | 'pink' | 'cream';

interface GalleryFile {
  name: string;
  icon: 'photo' | 'video';
}

const GALLERY_TONES: TileTone[] = ['coral', 'green', 'amber', 'violet', 'blue', 'pink', 'cream', 'green'];

const FILES: GalleryFile[] = [
  { name: 'IMG_001.jpg', icon: 'photo' },
  { name: 'IMG_002.jpg', icon: 'photo' },
  { name: 'VID_001.mp4', icon: 'video' },
  { name: 'IMG_003.jpg', icon: 'photo' },
  { name: 'IMG_004.jpg', icon: 'photo' },
  { name: 'IMG_005.jpg', icon: 'photo' },
  { name: 'VID_002.mp4', icon: 'video' },
];

interface AlbumRow {
  n: string;
  d: string;
  t: 'green' | 'coral' | 'violet' | 'blue';
  date: string;
  f: number;
  s: string;
}

const ALBUMS: AlbumRow[] = [
  { n: 'Rapat Kick-off', d: 'All', t: 'green', date: '28 Jun', f: 47, s: '820 MB' },
  { n: 'Survey Venue', d: 'Acara', t: 'green', date: '5 Jul', f: 23, s: '410 MB' },
  { n: 'Rapat Sponsor', d: 'Sponsor', t: 'coral', date: '8 Jul', f: 15, s: '180 MB' },
  { n: 'Photoshoot Brand', d: 'Humas', t: 'violet', date: '10 Jul', f: 64, s: '1.2 GB' },
  { n: 'Tes Sound Venue', d: 'Perlengkapan', t: 'blue', date: '12 Jul', f: 18, s: '320 MB' },
];

export function DokumentasiPage() {
  return (
    <>
      <div className="page-head">
        <div>
          <h1>Dokumentasi & Media</h1>
          <p>Galeri foto dan video per sesi acara</p>
        </div>
        <div className="actions">
          <button type="button" className="btn btn-ghost"><i className="ti ti-download" /> Download All</button>
          <button type="button" className="btn btn-primary"><i className="ti ti-upload" /> Upload Foto/Video</button>
        </div>
      </div>

      <div className="grid g-4" style={{ marginBottom: 18 }}>
        <Kpi label="Total File" value="287" sub="foto & video" icon="photo" tone="violet" />
        <Kpi label="Album" value="8" sub="per sesi/divisi" icon="folder" tone="green" />
        <Kpi label="Storage" value="4.2 GB" sub="dari 20 GB" icon="database" tone="coral" />
        <Kpi label="Tagged" value="94%" sub="sudah dikategorisasi" trend="up" icon="tag" tone="amber" />
      </div>

      <div className="card card-pad-lg" style={{ marginBottom: 18 }}>
        <CardTitle
          title="Album Terbaru"
          hint="Rapat Kick-off · 28 Jun 2025"
          action={
            <button type="button" className="btn btn-ghost btn-sm">
              <i className="ti ti-arrow-right" /> Lihat semua
            </button>
          }
        />
        <div className="gallery">
          {FILES.map((f, i) => (
            <div key={i} className={`tile ${GALLERY_TONES[i]}`}>
              <i className={`ti ti-${f.icon}`} style={{ fontSize: 28, color: 'rgba(20,24,18,0.35)' }} />
              <div className="tile-meta">
                <i className={`ti ti-${f.icon === 'video' ? 'video' : 'photo'}`} />
                {f.name}
              </div>
            </div>
          ))}
          <div className="tile upload">
            <div style={{ textAlign: 'center' }}>
              <i className="ti ti-plus" />
              <div>Upload lebih</div>
            </div>
          </div>
        </div>
      </div>

      <div className="card card-pad-lg">
        <CardTitle title="Semua Album" />
        <table>
          <thead>
            <tr>
              <th>Album</th>
              <th>Divisi</th>
              <th>Tanggal</th>
              <th>File</th>
              <th>Ukuran</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {ALBUMS.map((row, i) => (
              <tr key={i}>
                <td style={{ fontWeight: 600 }}>{row.n}</td>
                <td><Badge tone={row.t}>{row.d}</Badge></td>
                <td className="muted">{row.date}</td>
                <td className="mono">{row.f} file</td>
                <td className="mono muted">{row.s}</td>
                <td style={{ width: 80, textAlign: 'right' }}>
                  <button type="button" className="icon-btn" style={{ width: 30, height: 30, marginLeft: 'auto' }}>
                    <i className="ti ti-download" style={{ fontSize: 14 }} />
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
