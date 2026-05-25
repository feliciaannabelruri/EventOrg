import { Avatar } from '@/components/shared';

interface TopbarProps {
  onBell: () => void;
  bellOpen: boolean;
}

export function Topbar({ onBell, bellOpen }: TopbarProps) {
  return (
    <div className="topbar">
      <div className="search" style={{ flex: '0 1 380px' }}>
        <i className="ti ti-search" />
        <input placeholder="Cari fitur, anggota, task..." />
        <kbd>⌘K</kbd>
      </div>
      <div className="topbar-spacer" />
      <button type="button" className="icon-btn">
        <i className="ti ti-mail" />
      </button>
      <button
        type="button"
        className="icon-btn"
        onClick={onBell}
        style={bellOpen ? { background: 'var(--green-soft)', color: 'var(--green-2)' } : undefined}
      >
        <i className="ti ti-bell" />
        <span className="pulse" />
      </button>
      <div className="user-pill">
        <Avatar name="Aldi R" tone="green" />
        <div>
          <div className="name">Aldi Rahmawan</div>
          <div className="sub">aldi.rahmawan@students.uti.ac.id</div>
        </div>
      </div>
    </div>
  );
}
