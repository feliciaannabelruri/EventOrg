type AnnounceTone = 'rose' | 'green' | 'violet' | 'amber';

interface AnnounceProps {
  tone: AnnounceTone;
  icon: string;
  title: string;
  body: string;
  meta: string;
}

const ICON_COLOR: Record<AnnounceTone, string> = {
  rose: '#8a2727',
  green: 'var(--green-2)',
  violet: '#3f3299',
  amber: '#8c620a',
};

export function Announce({ tone, icon, title, body, meta }: AnnounceProps) {
  return (
    <div style={{ display: 'flex', gap: 14, padding: '14px 0', borderBottom: '1px dashed var(--line)' }}>
      <div
        style={{
          width: 40,
          height: 40,
          borderRadius: 12,
          background: `var(--${tone}-soft)`,
          display: 'grid',
          placeItems: 'center',
          color: ICON_COLOR[tone],
          flexShrink: 0,
        }}
      >
        <i className={`ti ti-${icon}`} style={{ fontSize: 18 }} />
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 4 }}>{title}</div>
        <div className="muted" style={{ fontSize: 12.5, lineHeight: 1.5 }}>{body}</div>
        <div className="muted tiny" style={{ marginTop: 6 }}>{meta}</div>
      </div>
    </div>
  );
}
