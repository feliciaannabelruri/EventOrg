interface NotifItem {
  tone: 'green' | 'violet' | 'amber' | 'blue' | 'rose';
  text: string;
  t: string;
}

const ITEMS: NotifItem[] = [
  { tone: 'green', text: 'Reimbursement Rp 750.000 telah disetujui', t: '5 menit lalu' },
  { tone: 'violet', text: 'Task baru ditugaskan: Desain Banner IG', t: '1 jam lalu' },
  { tone: 'amber', text: 'Interview Div. Humas dijadwalkan besok 10:00', t: '3 jam lalu' },
  { tone: 'blue', text: 'Bima bergabung ke Divisi Acara', t: 'Kemarin' },
  { tone: 'rose', text: 'Deadline Submit RAB dalam 2 hari!', t: 'Kemarin' },
];

const DOT_COLOR: Record<NotifItem['tone'], string> = {
  green: 'var(--green)',
  violet: 'var(--violet)',
  amber: 'var(--amber)',
  blue: 'var(--blue)',
  rose: 'var(--rose)',
};

interface NotifPanelProps {
  onClose: () => void;
}

export function NotifPanel({ onClose }: NotifPanelProps) {
  return (
    <div className="notif-panel">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
        <div className="eyebrow">Notifikasi</div>
        <button type="button" className="muted tiny" onClick={onClose} style={{ cursor: 'pointer' }}>
          Tutup
        </button>
      </div>
      {ITEMS.map((n, i) => (
        <div key={i} className="notif-item">
          <span className="notif-dot" style={{ background: DOT_COLOR[n.tone] }} />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 13, color: 'var(--ink)', lineHeight: 1.4 }}>{n.text}</div>
            <div className="tiny muted" style={{ marginTop: 2 }}>{n.t}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
