import { useState } from 'react';
import { Bar, CardTitle } from '@/components/shared';
import { useToast } from '@/context/ToastContext';

interface ContentApproval {
  id: number;
  name: string;
  sub: string;
}

interface TrendTag {
  tag: string;
  pct: number;
  views: string;
  color: string;
}

type EventTone = 'violet' | 'green' | 'amber' | 'pink' | 'coral';

interface CalendarEvent {
  label: string;
  tone: EventTone;
}

const TRENDS: TrendTag[] = [
  { tag: '#TechFest2025', pct: 88, views: '88K', color: 'var(--violet)' },
  { tag: '#FestivalKampus', pct: 72, views: '72K', color: 'var(--green)' },
  { tag: '#MahasiswaKreatif', pct: 55, views: '55K', color: 'var(--pink)' },
];

const EVENT_COLOR: Record<EventTone, string> = {
  violet: '#3f3299',
  green: 'var(--green-2)',
  amber: '#8c620a',
  pink: '#8c2f56',
  coral: '#b95423',
};

const CALENDAR: Record<number, CalendarEvent[]> = {
  2: [{ label: 'Feed IG', tone: 'violet' }],
  4: [{ label: 'TikTok', tone: 'green' }],
  8: [{ label: 'Story IG', tone: 'violet' }, { label: 'Reels', tone: 'pink' }],
  10: [{ label: 'Poster', tone: 'violet' }],
  12: [{ label: 'TikTok BTS', tone: 'green' }],
  14: [{ label: 'Countdown', tone: 'amber' }],
  16: [{ label: 'Feed IG', tone: 'violet' }],
  18: [{ label: 'Collab Post', tone: 'pink' }],
  21: [{ label: 'TikTok', tone: 'green' }],
  23: [{ label: 'Speaker Reveal', tone: 'amber' }],
  25: [{ label: 'Story IG', tone: 'violet' }],
  28: [{ label: 'Reels', tone: 'pink' }],
  30: [{ label: 'Last Push', tone: 'coral' }],
};

export function HumasPage() {
  const toast = useToast();
  const [approvals, setApprovals] = useState<ContentApproval[]>([
    { id: 1, name: 'Poster Countdown 30 Hari', sub: 'Instagram Feed · Farah M. · 2 jam' },
    { id: 2, name: 'Video Behind The Scenes', sub: 'TikTok + Reels · 60 detik · Bima P.' },
    { id: 3, name: 'Infografis Lineup Speaker', sub: 'Instagram Carousel · Kevin W.' },
  ]);

  const decide = (id: number, ok: boolean) => {
    setApprovals((prev) => prev.filter((x) => x.id !== id));
    toast(ok ? 'Konten disetujui' : 'Konten direvisi');
  };

  const renderCalendar = () => {
    const days: JSX.Element[] = [];
    for (let i = 0; i < 2; i++) days.push(<div key={`e${i}`} className="cal-day empty" />);
    for (let n = 1; n <= 31; n++) {
      const evs = CALENDAR[n];
      days.push(
        <div key={n} className={`cal-day ${evs ? 'has' : 'empty'}`.trim()}>
          <div className="num">{n}</div>
          {evs?.map((ev, i) => (
            <div
              key={i}
              className="ev"
              style={{ background: `var(--${ev.tone}-soft)`, color: EVENT_COLOR[ev.tone] }}
            >
              {ev.label}
            </div>
          ))}
        </div>,
      );
    }
    return days;
  };

  return (
    <>
      <div className="page-head">
        <div>
          <h1>Divisi Humas & Konten</h1>
          <p>Trend research, content calendar, dan approval konten</p>
        </div>
        <button type="button" className="btn btn-primary"><i className="ti ti-plus" /> Buat Brief Konten</button>
      </div>

      <div className="grid g-6-6" style={{ marginBottom: 18 }}>
        <div className="card card-pad-lg">
          <CardTitle title="Trend Research" hint="Update 13 Jul" />
          <div style={{ marginBottom: 18 }}>
            <div className="eyebrow" style={{ marginBottom: 10, display: 'flex', alignItems: 'center', gap: 6 }}>
              <i className="ti ti-brand-tiktok" /> TikTok Trending
            </div>
            <div className="stack" style={{ gap: 8 }}>
              {TRENDS.map((t) => (
                <div key={t.tag} className="trend-row">
                  <span className="tag" style={{ color: t.color }}>{t.tag}</span>
                  <div style={{ flex: 1 }}>
                    <Bar value={t.pct} color={t.color} />
                  </div>
                  <span className="mono tiny muted">{t.views}</span>
                </div>
              ))}
            </div>
          </div>
          <hr className="divider" />
          <div className="eyebrow" style={{ marginBottom: 10, display: 'flex', alignItems: 'center', gap: 6 }}>
            <i className="ti ti-brand-instagram" /> Instagram Insight
          </div>
          <div className="grid g-3" style={{ gap: 10 }}>
            <div className="tile-stat">
              <div className="label">Followers</div>
              <div className="val" style={{ color: 'var(--violet)' }}>4.2K</div>
            </div>
            <div className="tile-stat">
              <div className="label">Engagement</div>
              <div className="val" style={{ color: 'var(--green-2)' }}>8.7%</div>
            </div>
            <div className="tile-stat">
              <div className="label">Reach/post</div>
              <div className="val" style={{ color: 'var(--coral)' }}>32K</div>
            </div>
          </div>
        </div>

        <div className="card card-pad-lg">
          <CardTitle title="Approval Konten" hint={`${approvals.length} menunggu`} />
          {approvals.length === 0 ? (
            <div style={{ padding: '24px 14px', textAlign: 'center', color: 'var(--ink-3)', fontSize: 13 }}>
              <i className="ti ti-circle-check" style={{ fontSize: 32, color: 'var(--green)' }} />
              <div style={{ marginTop: 8 }}>Semua konten sudah direview</div>
            </div>
          ) : (
            approvals.map((a) => (
              <div key={a.id} className="approve-row">
                <div className="approve-info">
                  <div className="approve-name">{a.name}</div>
                  <div className="approve-sub">{a.sub}</div>
                </div>
                <button type="button" className="btn-yes" onClick={() => decide(a.id, true)} title="Approve">
                  <i className="ti ti-check" />
                </button>
                <button type="button" className="btn-no" onClick={() => decide(a.id, false)} title="Revisi">
                  <i className="ti ti-rotate" />
                </button>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="card card-pad-lg">
        <CardTitle
          title="Content Calendar — Juli 2025"
          hint="Klik tanggal untuk detail"
          action={
            <div style={{ display: 'flex', gap: 6 }}>
              <button type="button" className="icon-btn" style={{ width: 30, height: 30 }}>
                <i className="ti ti-chevron-left" style={{ fontSize: 14 }} />
              </button>
              <button type="button" className="icon-btn" style={{ width: 30, height: 30 }}>
                <i className="ti ti-chevron-right" style={{ fontSize: 14 }} />
              </button>
            </div>
          }
        />
        <div className="cal-grid" style={{ marginBottom: 6 }}>
          {['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'].map((d) => (
            <div key={d} className="cal-head">{d}</div>
          ))}
        </div>
        <div className="cal-grid">{renderCalendar()}</div>
      </div>
    </>
  );
}
