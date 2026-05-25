import { Avatar } from '@/components/shared';
import type { PageId } from '@/types';

interface NavItem {
  id: PageId;
  icon: string;
  name: string;
  badge?: string;
}

interface NavSection {
  label: string;
  items: NavItem[];
}

const SECTIONS: NavSection[] = [
  {
    label: 'Utama',
    items: [{ id: 'dashboard', icon: 'layout-dashboard', name: 'Dashboard' }],
  },
  {
    label: 'Organisasi',
    items: [
      { id: 'org', icon: 'sitemap', name: 'Organisasi' },
      { id: 'rekrutmen', icon: 'user-plus', name: 'Rekrutmen', badge: '12' },
    ],
  },
  {
    label: 'Operasional',
    items: [
      { id: 'komunikasi', icon: 'message-circle', name: 'Komunikasi', badge: '5' },
      { id: 'task', icon: 'checkbox', name: 'Task' },
      { id: 'keuangan', icon: 'wallet', name: 'Keuangan', badge: '3' },
    ],
  },
  {
    label: 'Resources',
    items: [
      { id: 'sponsorship', icon: 'building-store', name: 'Sponsor' },
      { id: 'vendor', icon: 'truck', name: 'Vendor' },
      { id: 'dokumentasi', icon: 'photo', name: 'Dokumen' },
    ],
  },
  {
    label: 'Divisi',
    items: [{ id: 'humas', icon: 'speakerphone', name: 'Humas' }],
  },
  {
    label: 'Penutup',
    items: [{ id: 'laporan', icon: 'report-analytics', name: 'Laporan' }],
  },
];

interface SidebarProps {
  current: PageId;
  go: (id: PageId) => void;
}

export function Sidebar({ current, go }: SidebarProps) {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-mark" />
        <div>
          <div className="brand-name">EventOrg</div>
          <div className="brand-sub">Campus Event Platform</div>
        </div>
      </div>

      <div className="sidebar-nav-wrapper">
        {SECTIONS.map((sec) => (
          <div key={sec.label}>
            <div className="nav-label">{sec.label}</div>
            <div className="nav-list" style={{ padding: '0 6px' }}>
              {sec.items.map((it) => (
                <button
                  key={it.id}
                  type="button"
                  className={`nav-item ${current === it.id ? 'active' : ''}`.trim()}
                  onClick={() => go(it.id)}
                >
                  <i className={`ti ti-${it.icon}`} />
                  <span>{it.name}</span>
                  {it.badge && <span className="nav-badge">{it.badge}</span>}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="sidebar-foot">
        <div className="row">
          <Avatar name="Aldi R" tone="green" />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div className="name">Aldi Rahmawan</div>
            <div className="role">Ketua · TECHFEST 2025</div>
          </div>
          <button
            type="button"
            className="icon-btn"
            style={{ width: 30, height: 30, borderColor: 'transparent', background: 'transparent' }}
          >
            <i className="ti ti-settings" style={{ fontSize: 15 }} />
          </button>
        </div>
      </div>
    </aside>
  );
}