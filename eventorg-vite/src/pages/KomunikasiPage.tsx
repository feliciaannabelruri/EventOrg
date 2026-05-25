import { useState } from 'react';
import { Avatar, CardTitle } from '@/components/shared';
import { Announce } from '@/components/layout/Announce';
import type { AvatarTone } from '@/types';

interface ChatRoom {
  id: string;
  name: string;
  last: string;
  t: string;
  unread: number;
  tone: AvatarTone;
}

interface ChatMessage {
  who: string;
  tone?: AvatarTone;
  text: string;
  mine?: boolean;
}

const ROOMS: ChatRoom[] = [
  { id: 'acara', name: 'Div. Acara', last: 'Sinta: Venue sudah confirm!', t: '10:32', unread: 0, tone: 'green' },
  { id: 'humas', name: 'Div. Humas', last: 'Poster mana yang dipilih?', t: '09:14', unread: 5, tone: 'violet' },
  { id: 'spon', name: 'Sponsorship', last: 'Proposal terkirim ke Gojek', t: 'Kemarin', unread: 0, tone: 'coral' },
  { id: 'perl', name: 'Perlengkapan', last: 'Sound OK, backdrop belum', t: 'Kemarin', unread: 0, tone: 'blue' },
  { id: 'all', name: 'All Panitia', last: 'Rapat Senin 16:00 Aula B', t: '2 hari', unread: 0, tone: 'amber' },
];

const MESSAGES: Record<string, ChatMessage[]> = {
  acara: [
    { who: 'Sinta Noviyanti', tone: 'coral', text: 'Halo semua! Venue sudah confirm. Gelanggang UTI siap untuk 31 Agustus ✅' },
    { who: 'Reza Pratama', tone: 'amber', text: 'Mantap! Kapasitas berapa orang tuh?' },
    { who: 'Sinta Noviyanti', tone: 'coral', text: 'Indoor 1500, outdoor sampai 3000 orang. Lebih dari cukup!' },
    { who: 'Kamu', mine: true, text: 'Sip! Tolong update di timeline ya. Dan koordinasi sama div perlengkapan untuk layout panggung.' },
    { who: 'Dani Hermawan', tone: 'violet', text: 'Oke siap! Nanti aku minta floor plan dari pengelola venue 👍' },
  ],
  humas: [
    { who: 'Farah Maulida', tone: 'violet', text: 'Aku udah render 3 versi poster countdown. Yang mana yg dipakai?' },
    { who: 'Bima Prakoso', tone: 'coral', text: 'Versi #2 paling balance menurutku' },
    { who: 'Kamu', mine: true, text: 'Setuju versi 2. Tolong submit ke approval queue ya' },
  ],
  spon: [
    { who: 'Reza Pratama', tone: 'amber', text: 'Proposal Gojek udah dikirim. Telkomsel masih nego soal logo placement.' },
  ],
  perl: [
    { who: 'Dani Hermawan', tone: 'blue', text: 'Sound system OK quote dari ProSound. Backdrop masih hunting vendor.' },
  ],
  all: [
    { who: 'Aldi Rahmawan', tone: 'green', mine: true, text: '📢 Rapat koordinasi Senin 14 Juli, 16:00 di Aula B. Wajib hadir semua ketua divisi.' },
  ],
};

export function KomunikasiPage() {
  const [active, setActive] = useState('acara');
  const [draft, setDraft] = useState('');

  const room = ROOMS.find((r) => r.id === active) ?? ROOMS[0];
  const msgs = MESSAGES[active] ?? [];

  return (
    <>
      <div className="page-head">
        <div>
          <h1>Komunikasi</h1>
          <p>Chat divisi, pengumuman, dan koordinasi real-time</p>
        </div>
        <div className="actions">
          <button type="button" className="btn btn-ghost"><i className="ti ti-radio" /> Walkie-talkie</button>
          <button type="button" className="btn btn-primary"><i className="ti ti-speakerphone" /> Pengumuman Baru</button>
        </div>
      </div>

      <div className="chat" style={{ marginBottom: 18 }}>
        <div className="chat-list">
          <div className="search-mini">
            <input placeholder="Cari grup..." />
          </div>
          {ROOMS.map((r) => (
            <div
              key={r.id}
              className={`chat-room ${r.id === active ? 'active' : ''}`.trim()}
              onClick={() => setActive(r.id)}
            >
              <Avatar name={r.name} tone={r.tone} />
              <div className="body">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div className="name">{r.name}</div>
                  {r.unread > 0 ? <span className="pill">{r.unread}</span> : <span className="time">{r.t}</span>}
                </div>
                <div className="last">{r.last}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="chat-main">
          <div className="chat-head">
            <Avatar name={room.name} tone={room.tone} />
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 700, fontFamily: 'Plus Jakarta Sans', fontSize: 15 }}>{room.name}</div>
              <div className="muted tiny">
                <span style={{ color: 'var(--green-2)' }}>●</span> 5 online · 12 anggota
              </div>
            </div>
            <button type="button" className="icon-btn"><i className="ti ti-phone" /></button>
            <button type="button" className="icon-btn"><i className="ti ti-video" /></button>
            <button type="button" className="icon-btn"><i className="ti ti-dots" /></button>
          </div>
          <div className="chat-body">
            {msgs.map((m, i) => (
              <div key={i} className={`msg ${m.mine ? 'mine' : ''}`.trim()}>
                <Avatar name={m.who} tone={m.mine ? 'green' : (m.tone ?? 'gray')} size="sm" />
                <div>
                  <div className="who">{m.who}</div>
                  <div className="bubble">{m.text}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="chat-input">
            <button type="button" className="icon-btn" style={{ width: 36, height: 36 }}>
              <i className="ti ti-paperclip" />
            </button>
            <input
              placeholder={`Tulis pesan ke ${room.name}...`}
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') setDraft('');
              }}
            />
            <button type="button" className="btn btn-primary btn-sm" onClick={() => setDraft('')}>
              <i className="ti ti-send" />
            </button>
          </div>
        </div>
      </div>

      <div className="grid g-7-5">
        <div className="card card-pad-lg">
          <CardTitle title="Pengumuman Terkini" hint="2 baru" />
          <div className="stack" style={{ gap: 0 }}>
            <Announce
              tone="rose"
              icon="alert-triangle"
              title="Deadline RAB semua divisi: 15 Juli 2025"
              body="Mohon semua divisi mengumpulkan RAB paling lambat 15 Juli 23:59. Hubungi bendahara jika ada pertanyaan."
              meta="Aldi Rahmawan · Ketua · 2 jam lalu"
            />
            <Announce
              tone="green"
              icon="calendar-event"
              title="Rapat Koordinasi Senin 14 Juli · Aula B 16:00"
              body="Agenda: evaluasi minggu 2, update sponsorship, koordinasi venue. Harap semua ketua divisi hadir."
              meta="Sinta Noviyanti · Wakil Ketua · Kemarin"
            />
            <Announce
              tone="violet"
              icon="palette"
              title="Brand Guidelines TECHFEST 2025 sudah live"
              body="Semua materi visual wajib mengikuti brand guideline yang baru. Link di shared folder Humas."
              meta="Farah M. · Humas · 2 hari lalu"
            />
          </div>
        </div>

        <div className="card card-pad-lg">
          <CardTitle title="Channel Suara" hint="Walkie-talkie" />
          <div
            style={{
              background: 'var(--ink)',
              color: 'white',
              borderRadius: 16,
              padding: 20,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 14,
            }}
          >
            <div
              style={{
                width: 90,
                height: 90,
                borderRadius: '50%',
                background: 'radial-gradient(circle, #2a9966, #1f7a4d)',
                display: 'grid',
                placeItems: 'center',
                position: 'relative',
                cursor: 'pointer',
                boxShadow: '0 0 0 8px rgba(31,122,77,0.25)',
              }}
            >
              <i className="ti ti-microphone" style={{ fontSize: 32, color: 'white' }} />
            </div>
            <div style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 700, fontSize: 15 }}>Tahan untuk Bicara</div>
            <div style={{ fontSize: 11.5, color: 'rgba(255,255,255,0.6)' }}>Channel: Div. Acara · 5 mendengar</div>
            <div style={{ display: 'flex', gap: 6, marginTop: 4 }}>
              {['SN', 'RP', 'DH', 'KW', 'LA'].map((x, i) => (
                <div
                  key={i}
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.15)',
                    display: 'grid',
                    placeItems: 'center',
                    fontSize: 9,
                    fontWeight: 700,
                    color: 'white',
                    border: i === 0 ? '2px solid #7adf9f' : 'none',
                  }}
                >
                  {x}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
