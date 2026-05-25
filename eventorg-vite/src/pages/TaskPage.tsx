import { useRef, useState, type DragEvent } from 'react';
import { Badge, CardTitle } from '@/components/shared';
import type { BadgeTone } from '@/types';

interface TaskCard {
  id: number;
  t: string;
  div: string;
  due?: string;
  tone: BadgeTone;
  members: string[];
  overdue?: boolean;
}

type ColumnKey = 'backlog' | 'progress' | 'review' | 'done';
type Board = Record<ColumnKey, TaskCard[]>;

const INITIAL: Board = {
  backlog: [
    { id: 1, t: 'Brief desain seragam panitia', div: 'Humas', due: '25 Jul', tone: 'violet', members: ['FM', 'BP'] },
    { id: 2, t: 'Survey kepuasan peserta (form)', div: 'Acara', due: '1 Agt', tone: 'green', members: ['SN'] },
    { id: 3, t: 'Koordinasi catering konsumsi', div: 'Konsumsi', due: '—', tone: 'amber', members: ['DK', 'RP'] },
  ],
  progress: [
    { id: 4, t: 'Desain poster utama TECHFEST', div: 'Humas', due: '18 Jul', tone: 'violet', members: ['FM'] },
    { id: 5, t: 'Submit RAB semua divisi', div: 'Keuangan', due: 'Overdue', tone: 'rose', members: ['DK'], overdue: true },
    { id: 6, t: 'Negosiasi sponsor Telkomsel', div: 'Sponsorship', due: '20 Jul', tone: 'coral', members: ['RP', 'AR'] },
    { id: 7, t: 'Setting sound system layout', div: 'Perlengkapan', due: '—', tone: 'blue', members: ['DH'] },
  ],
  review: [
    { id: 8, t: 'Konten Instagram Week 1', div: 'Humas', due: '—', tone: 'violet', members: ['FM', 'KW'] },
    { id: 9, t: 'Surat peminjaman venue ke rektorat', div: 'Sekretariat', due: '—', tone: 'amber', members: ['RP'] },
    { id: 10, t: 'Database vendor sound system', div: 'Perlengkapan', due: '—', tone: 'blue', members: ['DH'] },
  ],
  done: [
    { id: 11, t: 'Pembentukan struktur kepanitiaan', div: 'Inti', tone: 'green', members: ['AR'] },
    { id: 12, t: 'Buka rekrutmen online', div: 'Humas', tone: 'violet', members: ['FM'] },
    { id: 13, t: 'Konfirmasi venue Gelanggang UTI', div: 'Acara', tone: 'green', members: ['SN'] },
    { id: 14, t: 'Kick-off meeting panitia', div: 'Inti', tone: 'green', members: ['AR', 'SN'] },
  ],
};

interface ColumnSpec {
  key: ColumnKey;
  label: string;
  dot: string;
}
const COLS: ColumnSpec[] = [
  { key: 'backlog', label: 'Backlog', dot: 'var(--ink-3)' },
  { key: 'progress', label: 'In Progress', dot: 'var(--blue)' },
  { key: 'review', label: 'Review', dot: 'var(--amber)' },
  { key: 'done', label: 'Done', dot: 'var(--green)' },
];

interface GanttRow {
  label: string;
  left: number;
  width: number;
  color: string;
}
const GANTT: GanttRow[] = [
  { label: 'Rekrutmen', left: 0, width: 33, color: 'var(--violet)' },
  { label: 'Interview', left: 25, width: 16, color: 'var(--green)' },
  { label: 'Desain Materi', left: 33, width: 25, color: 'var(--pink)' },
  { label: 'Sponsorship', left: 8, width: 50, color: 'var(--coral)' },
  { label: 'Vendor & Venue', left: 33, width: 41, color: 'var(--blue)' },
  { label: 'Promosi', left: 50, width: 33, color: 'var(--amber)' },
  { label: 'Hari H', left: 91, width: 9, color: 'var(--rose)' },
];

const WEEKS = [
  'Jun W1', 'Jun W2', 'Jun W3', 'Jun W4',
  'Jul W1', 'Jul W2', 'Jul W3', 'Jul W4',
  'Agt W1', 'Agt W2', 'Agt W3', 'Agt W4',
];

type View = 'kanban' | 'gantt';

export function TaskPage() {
  const [view, setView] = useState<View>('kanban');
  const [board, setBoard] = useState<Board>(INITIAL);
  const dragRef = useRef<{ col: ColumnKey; id: number } | null>(null);

  const onDragStart = (col: ColumnKey, id: number) => () => {
    dragRef.current = { col, id };
  };

  const onDrop = (toCol: ColumnKey) => (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const drag = dragRef.current;
    if (!drag) return;
    if (drag.col === toCol) return;
    setBoard((prev) => {
      const card = prev[drag.col].find((c) => c.id === drag.id);
      if (!card) return prev;
      return {
        ...prev,
        [drag.col]: prev[drag.col].filter((c) => c.id !== drag.id),
        [toCol]: [card, ...prev[toCol]],
      };
    });
    dragRef.current = null;
  };

  return (
    <>
      <div className="page-head">
        <div>
          <h1>Task & Timeline</h1>
          <p>Kanban board, Gantt chart, dan manajemen deadline · drag kartu untuk pindah kolom</p>
        </div>
        <div className="actions">
          <div style={{ display: 'flex', background: 'var(--bg)', padding: 4, borderRadius: 999, gap: 2 }}>
            <button
              type="button"
              className="btn btn-sm"
              style={{
                background: view === 'kanban' ? 'var(--green)' : 'transparent',
                color: view === 'kanban' ? 'white' : 'var(--ink-2)',
              }}
              onClick={() => setView('kanban')}
            >
              <i className="ti ti-layout-kanban" /> Kanban
            </button>
            <button
              type="button"
              className="btn btn-sm"
              style={{
                background: view === 'gantt' ? 'var(--green)' : 'transparent',
                color: view === 'gantt' ? 'white' : 'var(--ink-2)',
              }}
              onClick={() => setView('gantt')}
            >
              <i className="ti ti-chart-gantt" /> Gantt
            </button>
          </div>
          <button type="button" className="btn btn-primary"><i className="ti ti-plus" /> Tambah Task</button>
        </div>
      </div>

      {view === 'kanban' ? (
        <div className="kanban">
          {COLS.map((c) => (
            <div
              key={c.key}
              className="kcol"
              onDragOver={(e) => e.preventDefault()}
              onDrop={onDrop(c.key)}
            >
              <div className="kcol-head">
                <span className="dot" style={{ background: c.dot }} />
                {c.label}
                <span className="count">{board[c.key].length}</span>
              </div>
              {board[c.key].map((card) => (
                <div
                  key={card.id}
                  className="kcard"
                  draggable
                  onDragStart={onDragStart(c.key, card.id)}
                  style={card.overdue ? { borderColor: 'var(--rose-soft)', background: '#fff7f5' } : undefined}
                >
                  <h4>{card.t}</h4>
                  <div className="kcard-meta">
                    <Badge tone={card.tone}>{card.div}</Badge>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <div className="stacked">
                        {card.members.map((m, i) => (
                          <div key={i} className="avatar sm">{m}</div>
                        ))}
                      </div>
                      {card.due && card.due !== '—' && (
                        <span
                          style={{
                            fontSize: 10.5,
                            fontWeight: 600,
                            color: card.overdue ? '#a33' : 'var(--ink-3)',
                          }}
                        >
                          <i className="ti ti-calendar" style={{ fontSize: 11, marginRight: 3 }} />
                          {card.due}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      ) : (
        <div className="card card-pad-lg">
          <CardTitle title="Timeline TECHFEST 2025" hint="Jun — Agt 2025" />
          <div style={{ display: 'grid', gridTemplateColumns: '130px 1fr', gap: 12, marginBottom: 14 }}>
            <div className="eyebrow">Kegiatan</div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(12,1fr)',
                fontSize: 10,
                color: 'var(--ink-3)',
                textAlign: 'center',
                fontWeight: 600,
                letterSpacing: '0.04em',
              }}
            >
              {WEEKS.map((w) => (
                <span key={w}>{w}</span>
              ))}
            </div>
          </div>
          {GANTT.map((r, i) => (
            <div key={i} className="gantt-row">
              <div className="gantt-label">{r.label}</div>
              <div className="gantt-track">
                <div
                  className="gantt-bar"
                  style={{ left: `${r.left}%`, width: `${r.width}%`, background: r.color }}
                >
                  {r.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
