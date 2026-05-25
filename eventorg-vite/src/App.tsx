import { useEffect, useState } from 'react';
import { LandingPage } from '@/pages/LandingPage';
import { NotifPanel } from '@/components/layout/NotifPanel';
import { Sidebar } from '@/components/layout/Sidebar';
import { Topbar } from '@/components/layout/Topbar';
import { DashboardPage } from '@/pages/DashboardPage';
import { DokumentasiPage } from '@/pages/DokumentasiPage';
import { HumasPage } from '@/pages/HumasPage';
import { KeuanganPage } from '@/pages/KeuanganPage';
import { KomunikasiPage } from '@/pages/KomunikasiPage';
import { LaporanPage } from '@/pages/LaporanPage';
import { OrgPage } from '@/pages/OrgPage';
import { RekrutmenPage } from '@/pages/RekrutmenPage';
import { SponsorshipPage } from '@/pages/SponsorshipPage';
import { TaskPage } from '@/pages/TaskPage';
import { VendorPage } from '@/pages/VendorPage';
import type { PageId } from '@/types';

const PAGES: Record<PageId, { title: string; Component: React.FC }> = {
  dashboard:   { title: 'Dashboard',                Component: DashboardPage },
  org:         { title: 'Organisasi & Kepanitiaan', Component: OrgPage },
  rekrutmen:   { title: 'Rekrutmen & Interview',    Component: RekrutmenPage },
  komunikasi:  { title: 'Komunikasi',               Component: KomunikasiPage },
  task:        { title: 'Task & Timeline',          Component: TaskPage },
  keuangan:    { title: 'Keuangan & Reimbursement', Component: KeuanganPage },
  sponsorship: { title: 'Sponsorship',              Component: SponsorshipPage },
  vendor:      { title: 'Vendor & Logistik',        Component: VendorPage },
  dokumentasi: { title: 'Dokumentasi',              Component: DokumentasiPage },
  humas:       { title: 'Humas & Konten',           Component: HumasPage },
  laporan:     { title: 'Laporan & Evaluasi',       Component: LaporanPage },
};

export function App() {
  const [authed, setAuthed] = useState(false);
  const [page, setPage] = useState<PageId>('dashboard');
  const [bellOpen, setBellOpen] = useState(false);

  useEffect(() => {
    if (!bellOpen) return;
    const close = (e: MouseEvent) => {
      const target = e.target as Element;
      if (!target.closest('.notif-panel') && !target.closest('.icon-btn')) {
        setBellOpen(false);
      }
    };
    document.addEventListener('click', close);
    return () => document.removeEventListener('click', close);
  }, [bellOpen]);

  if (!authed) return <LandingPage onLogin={() => setAuthed(true)} />;

  const Current = PAGES[page].Component;

  return (
    <div className="app">
      <Sidebar current={page} go={setPage} />
      <main className="main">
        <Topbar onBell={() => setBellOpen((v) => !v)} bellOpen={bellOpen} />
        <div className="page" key={page}>
          <Current />
        </div>
      </main>
      {bellOpen && <NotifPanel onClose={() => setBellOpen(false)} />}
    </div>
  );
}

