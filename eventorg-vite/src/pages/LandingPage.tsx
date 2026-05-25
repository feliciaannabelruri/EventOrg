import { useState } from 'react';

type Screen = 'landing' | 'login' | 'register';

function BrandMark({ size = 40 }: { size?: number }) {
  return (
    <div
      style={{
        width: size, height: size,
        borderRadius: size * 0.33,
        background: 'var(--green)',
        display: 'grid', placeItems: 'center',
        color: 'white', position: 'relative',
        boxShadow: 'inset 0 -2px 0 rgba(0,0,0,0.12)',
        flexShrink: 0,
      }}
    >
      <div style={{
        position: 'absolute', inset: size * 0.17,
        borderRadius: size * 0.17,
        border: `${size * 0.045}px solid rgba(255,255,255,0.95)`,
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        transform: 'rotate(-12deg)',
      }} />
      <div style={{
        position: 'absolute', width: size * 0.18, height: size * 0.18,
        borderRadius: '50%', background: '#e8784a',
        right: size * 0.14, top: size * 0.14,
        border: '2px solid white',
      }} />
    </div>
  );
}

function LandingScreen({ go }: { go: (s: Screen) => void }) {
  const features = [
    { icon: 'sitemap', title: 'Manajemen Kepanitiaan', desc: 'Struktur organisasi visual, role management, dan tracking anggota divisi dalam satu tampilan.' },
    { icon: 'checkbox', title: 'Task & Timeline', desc: 'Kanban drag-and-drop, Gantt chart otomatis, dan pengingat deadline yang smart.' },
    { icon: 'wallet', title: 'Keuangan Real-Time', desc: 'RAB per divisi, approval reimbursement, dan cash flow tracker yang transparan.' },
    { icon: 'building-store', title: 'Sponsorship Pipeline', desc: 'Kelola negosiasi sponsor dari cold lead sampai deal closed dengan visualisasi funnel.' },
    { icon: 'speakerphone', title: 'Humas & Konten', desc: 'Content calendar, trend research, dan approval workflow konten media sosial.' },
    { icon: 'message-circle', title: 'Komunikasi Terpadu', desc: 'Chat grup per divisi, pengumuman broadcast, dan kanal walkie-talkie virtual.' },
  ];

  const stats = [
    { val: '2.000+', label: 'Event berhasil' },
    { val: '15.000+', label: 'Panitia aktif' },
    { val: '98%', label: 'Kepuasan pengguna' },
    { val: '40+', label: 'Kampus partner' },
  ];

  const testimonials = [
    { name: 'Aldi Rahmawan', role: 'Ketua TECHFEST 2025 · UTI', initials: 'AR', tone: 'green', text: 'EventOrg mengubah cara kami bekerja. Semua divisi terhubung, anggaran transparan, dan tidak ada lagi koordinasi yang berantakan.' },
    { name: 'Sinta Noviyanti', role: 'Wakil Ketua · UNJ', initials: 'SN', tone: 'coral', text: 'Fitur approval reimbursement yang paling saya suka. Tidak ada lagi nota yang hilang atau proses yang memakan waktu berhari-hari.' },
    { name: 'Reza Pratama', role: 'Div. Sponsorship · ITB', initials: 'RP', tone: 'amber', text: 'Pipeline sponsorship-nya luar biasa. Bisa tracking progres negosiasi semua sponsor sekaligus dan tidak ada yang terlewat.' },
  ];

  const TONE_BG: Record<string, string> = {
    green: 'var(--green-soft)', coral: 'var(--coral-soft)',
    amber: 'var(--amber-soft)', violet: 'var(--violet-soft)',
  };
  const TONE_COLOR: Record<string, string> = {
    green: 'var(--green-2)', coral: '#b95423', amber: '#8c620a', violet: '#3f3299',
  };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', overflowX: 'hidden' }}>

      {/* ── NAV ── */}
      <nav className="lp-nav" style={{
        position: 'sticky', top: 0, zIndex: 100,
        background: 'rgba(244,242,236,0.88)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--line)',
        padding: '0 24px',
        height: 60,
        display: 'flex', alignItems: 'center', gap: 12,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, flex: 1 }}>
          <BrandMark size={34} />
          <span style={{
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            fontWeight: 800, fontSize: 17,
            letterSpacing: '-0.02em',
          }}>EventOrg</span>
        </div>
        <div style={{ display: 'flex', gap: 6 }}>
          <button type="button" className="btn btn-ghost btn-sm" onClick={() => go('login')}>
            <i className="ti ti-login" /> <span className="lp-nav-label">Masuk</span>
          </button>
          <button type="button" className="btn btn-primary btn-sm" onClick={() => go('register')}>
            <i className="ti ti-sparkles" /> Daftar Gratis
          </button>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="lp-hero" style={{
        padding: '72px 24px 56px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: -80, left: '50%', transform: 'translateX(-50%)',
          width: 600, height: 400,
          background: 'radial-gradient(ellipse, rgba(31,122,77,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: 'var(--green-soft)', color: 'var(--green-2)',
          border: '1px solid var(--green-soft-2)',
          borderRadius: 999, padding: '6px 14px',
          fontSize: 12, fontWeight: 600,
          marginBottom: 24,
          position: 'relative',
        }}>
          <i className="ti ti-sparkles" style={{ fontSize: 13 }} />
          Platform Kepanitiaan Kampus #1 di Indonesia
        </div>

        <h1 style={{
          fontFamily: 'Plus Jakarta Sans, sans-serif',
          fontWeight: 800, fontSize: 'clamp(30px, 6vw, 62px)',
          letterSpacing: '-0.03em', lineHeight: 1.1,
          maxWidth: 680, margin: '0 auto 18px',
          position: 'relative',
        }}>
          Kepanitiaan lebih{' '}
          <span style={{ color: 'var(--green)', position: 'relative', display: 'inline-block' }}>
            terorganisir
            <svg style={{ position: 'absolute', bottom: -4, left: 0, width: '100%', overflow: 'visible' }}
              viewBox="0 0 200 8" preserveAspectRatio="none" height="8">
              <path d="M 0 6 Q 100 0 200 6" fill="none" stroke="var(--green)" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </span>
          ,<br />event lebih{' '}
          <span style={{ color: 'var(--coral)' }}>berkesan</span>
        </h1>

        <p style={{
          color: 'var(--ink-2)', fontSize: 16, lineHeight: 1.65,
          maxWidth: 500, margin: '0 auto 32px',
        }}>
          Satu platform untuk manajemen divisi, task, keuangan, sponsorship, dan komunikasi seluruh kepanitiaan event kampus Anda.
        </p>

        <div className="lp-cta-row" style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
          <button type="button" className="btn btn-primary"
            style={{ padding: '13px 24px', fontSize: 14 }}
            onClick={() => go('register')}>
            <i className="ti ti-rocket" /> Mulai Gratis Sekarang
          </button>
          <button type="button" className="btn btn-ghost"
            style={{ padding: '13px 24px', fontSize: 14 }}>
            <i className="ti ti-player-play" /> Lihat Demo
          </button>
        </div>

        <div className="lp-trust" style={{
          display: 'flex', gap: 20, justifyContent: 'center',
          marginTop: 28, flexWrap: 'wrap',
        }}>
          {['Gratis 30 hari · Tanpa kartu kredit', 'Setup dalam 5 menit', 'Dukungan 24/7'].map((t) => (
            <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12.5, color: 'var(--ink-3)' }}>
              <i className="ti ti-circle-check" style={{ color: 'var(--green)', fontSize: 15 }} />
              {t}
            </div>
          ))}
        </div>
      </section>

      {/* ── DASHBOARD PREVIEW ── */}
      <section className="lp-preview" style={{ padding: '0 24px 56px' }}>
        <div style={{
          maxWidth: 900, margin: '0 auto',
          background: 'var(--surface)',
          border: '1px solid var(--line-2)',
          borderRadius: 20,
          overflow: 'hidden',
          boxShadow: '0 20px 60px rgba(20,24,18,0.08)',
        }}>
          {/* mock topbar */}
          <div style={{
            borderBottom: '1px solid var(--line)',
            padding: '10px 16px',
            display: 'flex', alignItems: 'center', gap: 8,
          }}>
            {['#e85d5d','#f5a623','#27c93f'].map(c => (
              <div key={c} style={{ width: 11, height: 11, borderRadius: '50%', background: c }} />
            ))}
            <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
              <div style={{
                background: 'var(--bg)', borderRadius: 999, padding: '4px 16px',
                fontSize: 11, color: 'var(--ink-3)',
                border: '1px solid var(--line)',
              }}>
                app.eventorg.id/dashboard
              </div>
            </div>
          </div>
          {/* mock content */}
          <div style={{ padding: 16, background: 'var(--surface-2)' }}>
            <div className="lp-mock-kpis" style={{
              display: 'grid', gridTemplateColumns: 'repeat(4,1fr)',
              gap: 8, marginBottom: 12,
            }}>
              {[
                { l: 'Anggota', v: '73', c: 'var(--violet)' },
                { l: 'Task Selesai', v: '142', c: 'var(--green-2)' },
                { l: 'Dana', v: '68 Jt', c: 'var(--coral)' },
                { l: 'Hari Tersisa', v: '47', c: 'var(--green-2)' },
              ].map(k => (
                <div key={k.l} style={{
                  background: 'var(--surface)', borderRadius: 10,
                  padding: '10px 12px', border: '1px solid var(--line)',
                }}>
                  <div style={{ fontSize: 10, color: 'var(--ink-3)', fontWeight: 500 }}>{k.l}</div>
                  <div style={{
                    fontFamily: 'Plus Jakarta Sans,sans-serif', fontWeight: 700,
                    fontSize: 22, color: k.c, letterSpacing: '-0.02em', marginTop: 4,
                  }}>{k.v}</div>
                </div>
              ))}
            </div>
            <div className="lp-mock-bottom" style={{
              display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 8,
            }}>
              <div style={{ background: 'var(--surface)', borderRadius: 10, padding: 12, border: '1px solid var(--line)' }}>
                <div style={{ fontSize: 11, fontWeight: 700, fontFamily: 'Plus Jakarta Sans,sans-serif', marginBottom: 10 }}>Progress per Divisi</div>
                {[
                  { n: '🎪 Acara', v: 82, c: 'var(--green)' },
                  { n: '📣 Humas', v: 67, c: 'var(--violet)' },
                  { n: '💰 Sponsorship', v: 55, c: 'var(--coral)' },
                  { n: '🎤 Perlengkapan', v: 43, c: 'var(--blue)' },
                ].map(d => (
                  <div key={d.n} style={{ marginBottom: 8 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10.5, marginBottom: 3 }}>
                      <span>{d.n}</span><span style={{ fontWeight: 600 }}>{d.v}%</span>
                    </div>
                    <div style={{ height: 5, background: 'var(--bg)', borderRadius: 999, overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: `${d.v}%`, background: d.c, borderRadius: 'inherit' }} />
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ background: 'var(--ink)', borderRadius: 10, padding: 12, color: 'white' }}>
                <div style={{ fontSize: 11, fontWeight: 700, fontFamily: 'Plus Jakarta Sans,sans-serif', marginBottom: 10 }}>Reminders</div>
                {[
                  { t: 'Submit RAB', d: 'Overdue', c: '#ff7676' },
                  { t: 'Konfirmasi Venue', d: 'Hari ini', c: '#f7c34e' },
                  { t: 'Kirim Proposal', d: 'Besok', c: '#f7c34e' },
                  { t: 'Desain Poster', d: '3 hari', c: '#a89cef' },
                ].map(r => (
                  <div key={r.t} style={{ display: 'flex', gap: 7, alignItems: 'center', marginBottom: 7 }}>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: r.c, flexShrink: 0 }} />
                    <div>
                      <div style={{ fontSize: 10.5, fontWeight: 500 }}>{r.t}</div>
                      <div style={{ fontSize: 9.5, opacity: 0.55 }}>{r.d}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="lp-stats" style={{
        background: 'var(--green)', padding: '48px 24px',
        textAlign: 'center',
      }}>
        <div className="lp-stats-grid" style={{
          display: 'grid', gridTemplateColumns: 'repeat(4,1fr)',
          gap: 24, maxWidth: 860, margin: '0 auto',
        }}>
          {stats.map(s => (
            <div key={s.label}>
              <div className="lp-stat-val" style={{
                fontFamily: 'Plus Jakarta Sans,sans-serif', fontWeight: 800,
                fontSize: 40, color: 'white', letterSpacing: '-0.03em', lineHeight: 1,
              }}>{s.val}</div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.75)', marginTop: 6 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="lp-features" style={{ padding: '64px 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 44 }}>
          <div className="eyebrow" style={{ marginBottom: 10 }}>Fitur Lengkap</div>
          <h2 style={{
            fontFamily: 'Plus Jakarta Sans,sans-serif', fontWeight: 800,
            fontSize: 34, letterSpacing: '-0.025em',
          }}>Semua yang Anda butuhkan</h2>
          <p style={{ color: 'var(--ink-3)', marginTop: 10, fontSize: 15, maxWidth: 420, margin: '10px auto 0' }}>
            Dari perekrutan hingga laporan akhir, semua terintegrasi dalam satu platform.
          </p>
        </div>
        <div className="lp-feature-grid" style={{
          display: 'grid', gridTemplateColumns: 'repeat(3,1fr)',
          gap: 16, maxWidth: 960, margin: '0 auto',
        }}>
          {features.map((f, i) => (
            <div key={f.title} className="lp-feature-card" style={{
              background: 'var(--surface)',
              border: '1px solid var(--line)',
              borderRadius: 18, padding: 24,
              transition: 'all 0.18s',
            }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 12px 40px rgba(20,24,18,0.08)';
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                (e.currentTarget as HTMLDivElement).style.transform = 'none';
              }}
            >
              <div className="lp-feature-icon" style={{
                width: 42, height: 42, borderRadius: 12,
                background: i % 2 === 0 ? 'var(--green-soft)' : i % 3 === 1 ? 'var(--violet-soft)' : 'var(--coral-soft)',
                display: 'grid', placeItems: 'center',
                color: i % 2 === 0 ? 'var(--green-2)' : i % 3 === 1 ? '#3f3299' : '#b95423',
                marginBottom: 14, flexShrink: 0,
              }}>
                <i className={`ti ti-${f.icon}`} style={{ fontSize: 20 }} />
              </div>
              <div className="lp-feature-body">
                <h3 style={{
                  fontFamily: 'Plus Jakarta Sans,sans-serif', fontWeight: 700,
                  fontSize: 15, marginBottom: 6, letterSpacing: '-0.01em',
                }}>{f.title}</h3>
                <p style={{ color: 'var(--ink-3)', fontSize: 13, lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="lp-testi" style={{ padding: '32px 24px 64px', background: 'var(--surface-2)' }}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <div className="eyebrow" style={{ marginBottom: 10 }}>Testimoni</div>
          <h2 style={{
            fontFamily: 'Plus Jakarta Sans,sans-serif', fontWeight: 800,
            fontSize: 32, letterSpacing: '-0.025em',
          }}>Dipercaya 15.000+ panitia</h2>
        </div>
        <div className="lp-testi-grid" style={{
          display: 'grid', gridTemplateColumns: 'repeat(3,1fr)',
          gap: 16, maxWidth: 960, margin: '0 auto',
        }}>
          {testimonials.map(t => (
            <div key={t.name} style={{
              background: 'var(--surface)', border: '1px solid var(--line)',
              borderRadius: 18, padding: 24,
            }}>
              <div style={{ display: 'flex', gap: 4, marginBottom: 14 }}>
                {[1,2,3,4,5].map(s => (
                  <i key={s} className="ti ti-star-filled" style={{ color: 'var(--amber)', fontSize: 15 }} />
                ))}
              </div>
              <p style={{ fontSize: 13, lineHeight: 1.65, color: 'var(--ink-2)', marginBottom: 18 }}>
                "{t.text}"
              </p>
              <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                <div style={{
                  width: 36, height: 36, borderRadius: '50%',
                  background: TONE_BG[t.tone], color: TONE_COLOR[t.tone],
                  display: 'grid', placeItems: 'center',
                  fontWeight: 700, fontSize: 12, fontFamily: 'Plus Jakarta Sans,sans-serif',
                }}>
                  {t.initials}
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 13 }}>{t.name}</div>
                  <div style={{ fontSize: 11.5, color: 'var(--ink-3)' }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="lp-cta-section" style={{ padding: '64px 24px', background: 'var(--bg)' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <div className="lp-cta-card" style={{
            background: 'var(--ink)',
            borderRadius: 24, padding: '48px 40px',
            color: 'white', textAlign: 'center',
            position: 'relative', overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute', top: -60, right: -60,
              width: 220, height: 220,
              background: 'radial-gradient(circle, rgba(31,122,77,0.4), transparent 70%)',
              pointerEvents: 'none',
            }} />
            <div style={{
              position: 'absolute', bottom: -60, left: -60,
              width: 180, height: 180,
              background: 'radial-gradient(circle, rgba(232,120,74,0.3), transparent 70%)',
              pointerEvents: 'none',
            }} />
            <div style={{ position: 'relative' }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
                <BrandMark size={52} />
              </div>
              <h2 style={{
                fontFamily: 'Plus Jakarta Sans,sans-serif', fontWeight: 800,
                fontSize: 28, letterSpacing: '-0.025em',
                marginBottom: 12,
              }}>
                Siap mulai event impian Anda?
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 14, lineHeight: 1.6, marginBottom: 28 }}>
                Bergabung dengan ribuan panitia kampus yang sudah lebih terorganisir bersama EventOrg.
              </p>
              <div className="lp-cta-btns" style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
                <button type="button" className="btn"
                  style={{ background: 'white', color: 'var(--ink)', padding: '12px 24px', fontSize: 13.5, borderRadius: 999 }}
                  onClick={() => go('register')}>
                  <i className="ti ti-rocket" /> Daftar Gratis
                </button>
                <button type="button" className="btn"
                  style={{
                    background: 'rgba(255,255,255,0.1)', color: 'white',
                    border: '1px solid rgba(255,255,255,0.2)',
                    padding: '12px 24px', fontSize: 13.5, borderRadius: 999,
                  }}
                  onClick={() => go('login')}>
                  <i className="ti ti-login" /> Sudah punya akun
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="lp-footer" style={{
        borderTop: '1px solid var(--line)', padding: '24px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        gap: 14, flexWrap: 'wrap',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <BrandMark size={26} />
          <span style={{ fontFamily: 'Plus Jakarta Sans,sans-serif', fontWeight: 700, fontSize: 14 }}>EventOrg</span>
          <span style={{ color: 'var(--ink-3)', fontSize: 12 }}>© 2025</span>
        </div>
        <div className="lp-footer-links" style={{ display: 'flex', gap: 22 }}>
          {['Tentang Kami', 'Blog', 'Bantuan', 'Privasi'].map(l => (
            <a key={l} href="#" style={{ fontSize: 13, color: 'var(--ink-3)' }}>{l}</a>
          ))}
        </div>
      </footer>
    </div>
  );
}

// ── Auth base card ─────────────────────────────────────────────
function AuthCard({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      position: 'fixed', inset: 0,
      background: 'var(--bg)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: 16, zIndex: 1000,
      overflowY: 'auto',
    }}>
      <div style={{
        position: 'fixed', top: -120, right: -120,
        width: 380, height: 380,
        background: 'radial-gradient(circle, rgba(31,122,77,0.1), transparent 65%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'fixed', bottom: -120, left: -120,
        width: 300, height: 300,
        background: 'radial-gradient(circle, rgba(232,120,74,0.08), transparent 65%)',
        pointerEvents: 'none',
      }} />
      {children}
    </div>
  );
}

// ── Login Screen ───────────────────────────────────────────────
function LoginScreen({ go, onLogin }: { go: (s: Screen) => void; onLogin?: () => void }) {
  const [form, setForm] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => { setLoading(false); onLogin?.(); }, 900);
  };

  return (
    <AuthCard>
      <div className="lp-auth-card" style={{
        width: '100%', maxWidth: 420,
        background: 'var(--surface)',
        border: '1px solid var(--line)',
        borderRadius: 24, padding: '36px 32px',
        boxShadow: '0 20px 60px rgba(20,24,18,0.08)',
        position: 'relative', zIndex: 1,
        margin: 'auto',
      }}>
        <button type="button" className="btn btn-ghost btn-sm"
          style={{ marginBottom: 24 }} onClick={() => go('landing')}>
          <i className="ti ti-arrow-left" style={{ fontSize: 15 }} /> Kembali
        </button>

        <div style={{ textAlign: 'center', marginBottom: 28 }}>
          <div style={{ display: 'inline-flex', justifyContent: 'center', marginBottom: 12 }}>
            <BrandMark size={48} />
          </div>
          <div style={{ fontFamily: 'Plus Jakarta Sans,sans-serif', fontWeight: 800, fontSize: 22, letterSpacing: '-0.025em' }}>
            Selamat datang kembali
          </div>
          <div style={{ color: 'var(--ink-3)', fontSize: 13, marginTop: 4 }}>
            Masuk ke akun kepanitiaan Anda
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div className="field">
            <label>Email Kampus</label>
            <div style={{ position: 'relative' }}>
              <i className="ti ti-mail" style={{ position: 'absolute', left: 13, top: '50%', transform: 'translateY(-50%)', fontSize: 16, color: 'var(--ink-3)', pointerEvents: 'none' }} />
              <input type="email" placeholder="nim@students.kampus.ac.id"
                value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                style={{ paddingLeft: 40 }} />
            </div>
          </div>
          <div className="field">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
              <label style={{ margin: 0 }}>Password</label>
              <a href="#" style={{ fontSize: 12, color: 'var(--green-2)', fontWeight: 600 }}>Lupa password?</a>
            </div>
            <div style={{ position: 'relative' }}>
              <i className="ti ti-lock" style={{ position: 'absolute', left: 13, top: '50%', transform: 'translateY(-50%)', fontSize: 16, color: 'var(--ink-3)', pointerEvents: 'none' }} />
              <input type="password" placeholder="••••••••"
                value={form.password} onChange={e => setForm(f => ({ ...f, password: e.target.value }))}
                style={{ paddingLeft: 40 }} />
            </div>
          </div>

          <button type="button" className="btn btn-primary"
            style={{ width: '100%', justifyContent: 'center', padding: 12, marginTop: 4 }}
            onClick={handleLogin}>
            {loading
              ? <><i className="ti ti-loader-2" style={{ animation: 'spin 1s linear infinite' }} /> Memproses...</>
              : <><i className="ti ti-login" /> Masuk ke EventOrg</>
            }
          </button>

          <div style={{ position: 'relative', margin: '2px 0' }}>
            <div style={{ height: 1, background: 'var(--line)', position: 'absolute', inset: '50% 0 auto' }} />
            <div style={{ position: 'relative', textAlign: 'center', display: 'inline-block', left: '50%', transform: 'translateX(-50%)', background: 'var(--surface)', padding: '0 12px', fontSize: 12, color: 'var(--ink-3)' }}>atau masuk dengan</div>
          </div>

          <button type="button" className="btn btn-ghost" style={{ width: '100%', justifyContent: 'center', padding: 11 }}>
            <i className="ti ti-id-badge" /> Upload KTM
          </button>
        </div>

        <div style={{ textAlign: 'center', marginTop: 20, fontSize: 13, color: 'var(--ink-3)' }}>
          Belum punya akun?{' '}
          <button type="button" onClick={() => go('register')}
            style={{ color: 'var(--green-2)', fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer', fontSize: 13 }}>
            Daftar sekarang
          </button>
        </div>
      </div>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </AuthCard>
  );
}

// ── Register Screen ────────────────────────────────────────────
type RegStep = 1 | 2 | 3;

function RegisterScreen({ go }: { go: (s: Screen) => void }) {
  const [step, setStep] = useState<RegStep>(1);
  const [form, setForm] = useState({
    name: '', nim: '', email: '', phone: '',
    kampus: '', jurusan: '',
    event: '', role: '', period: '',
    password: '', confirm: '',
  });
  const [agree, setAgree] = useState(false);

  const steps = [{ n: 1, label: 'Identitas' }, { n: 2, label: 'Event' }, { n: 3, label: 'Akun' }];
  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));

  return (
    <AuthCard>
      <div className="lp-auth-card" style={{
        width: '100%', maxWidth: 460,
        background: 'var(--surface)',
        border: '1px solid var(--line)',
        borderRadius: 24, padding: '32px',
        boxShadow: '0 20px 60px rgba(20,24,18,0.08)',
        position: 'relative', zIndex: 1,
        margin: 'auto',
        maxHeight: '90vh',
        overflowY: 'auto',
      }}>
        <button type="button" className="btn btn-ghost btn-sm"
          style={{ marginBottom: 20 }}
          onClick={() => step === 1 ? go('landing') : setStep((step - 1) as RegStep)}>
          <i className="ti ti-arrow-left" style={{ fontSize: 15 }} />
          {step === 1 ? 'Kembali' : 'Sebelumnya'}
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
          <BrandMark size={38} />
          <div>
            <div style={{ fontFamily: 'Plus Jakarta Sans,sans-serif', fontWeight: 800, fontSize: 18, letterSpacing: '-0.02em' }}>Buat Akun EventOrg</div>
            <div style={{ fontSize: 12, color: 'var(--ink-3)' }}>Gratis untuk seluruh civitas akademika</div>
          </div>
        </div>

        {/* step indicator */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 24 }}>
          {steps.map((s, i) => (
            <div key={s.n} style={{ display: 'flex', alignItems: 'center', flex: i < steps.length - 1 ? 1 : 'none' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <div style={{
                  width: 28, height: 28, borderRadius: '50%',
                  background: step >= s.n ? 'var(--green)' : 'var(--bg)',
                  border: `2px solid ${step >= s.n ? 'var(--green)' : 'var(--line-2)'}`,
                  display: 'grid', placeItems: 'center',
                  color: step >= s.n ? 'white' : 'var(--ink-3)',
                  fontSize: 11, fontWeight: 700, flexShrink: 0,
                }}>
                  {step > s.n ? <i className="ti ti-check" style={{ fontSize: 13 }} /> : s.n}
                </div>
                <span style={{ fontSize: 12, fontWeight: step === s.n ? 600 : 400, color: step === s.n ? 'var(--ink)' : 'var(--ink-3)' }}>
                  {s.label}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div style={{ flex: 1, height: 2, margin: '0 8px', background: step > s.n ? 'var(--green)' : 'var(--line)', transition: 'background 0.3s' }} />
              )}
            </div>
          ))}
        </div>

        {step === 1 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div className="lp-reg-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              <div className="field lp-reg-full" style={{ gridColumn: '1 / -1' }}>
                <label>Nama Lengkap</label>
                <input placeholder="Aldi Rahmawan" value={form.name} onChange={set('name')} />
              </div>
              <div className="field">
                <label>NIM</label>
                <input placeholder="2021130045" value={form.nim} onChange={set('nim')} />
              </div>
              <div className="field">
                <label>No. HP</label>
                <input placeholder="08123456789" value={form.phone} onChange={set('phone')} />
              </div>
              <div className="field lp-reg-full" style={{ gridColumn: '1 / -1' }}>
                <label>Email Kampus</label>
                <div style={{ position: 'relative' }}>
                  <i className="ti ti-mail" style={{ position: 'absolute', left: 13, top: '50%', transform: 'translateY(-50%)', fontSize: 15, color: 'var(--ink-3)', pointerEvents: 'none' }} />
                  <input type="email" placeholder="nim@students.kampus.ac.id" value={form.email} onChange={set('email')} style={{ paddingLeft: 38 }} />
                </div>
              </div>
              <div className="field">
                <label>Kampus</label>
                <select value={form.kampus} onChange={set('kampus')}>
                  <option value="">Pilih kampus</option>
                  <option>Universitas Teknologi Indonesia</option>
                  <option>Universitas Indonesia</option>
                  <option>ITB</option>
                  <option>UGM</option>
                  <option>ITS</option>
                  <option>Lainnya</option>
                </select>
              </div>
              <div className="field">
                <label>Jurusan</label>
                <input placeholder="Teknik Informatika" value={form.jurusan} onChange={set('jurusan')} />
              </div>
            </div>
            <button type="button" className="btn btn-primary"
              style={{ width: '100%', justifyContent: 'center', padding: 12, marginTop: 4 }}
              onClick={() => setStep(2)}>
              Lanjut <i className="ti ti-arrow-right" />
            </button>
          </div>
        )}

        {step === 2 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div className="field">
              <label>Nama Event</label>
              <input placeholder="TECHFEST 2025" value={form.event} onChange={set('event')} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              <div className="field">
                <label>Peran Anda</label>
                <select value={form.role} onChange={set('role')}>
                  <option value="">Pilih peran</option>
                  <option>Ketua Umum</option>
                  <option>Wakil Ketua</option>
                  <option>Sekretaris</option>
                  <option>Bendahara</option>
                  <option>Ketua Divisi</option>
                  <option>Anggota</option>
                </select>
              </div>
              <div className="field">
                <label>Periode</label>
                <input placeholder="2025" value={form.period} onChange={set('period')} />
              </div>
            </div>
            <div style={{ background: 'var(--green-soft)', borderRadius: 12, padding: 14, border: '1px solid var(--green-soft-2)' }}>
              <div style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--green-2)', marginBottom: 4 }}>
                <i className="ti ti-info-circle" style={{ fontSize: 14, marginRight: 5 }} />Anda akan menjadi admin event
              </div>
              <div style={{ fontSize: 12, color: 'var(--ink-3)', lineHeight: 1.5 }}>
                Setelah mendaftar, Anda bisa mengundang anggota divisi dan mengatur seluruh kepanitiaan.
              </div>
            </div>
            <button type="button" className="btn btn-primary"
              style={{ width: '100%', justifyContent: 'center', padding: 12 }}
              onClick={() => setStep(3)}>
              Lanjut <i className="ti ti-arrow-right" />
            </button>
          </div>
        )}

        {step === 3 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div className="field">
              <label>Buat Password</label>
              <div style={{ position: 'relative' }}>
                <i className="ti ti-lock" style={{ position: 'absolute', left: 13, top: '50%', transform: 'translateY(-50%)', fontSize: 15, color: 'var(--ink-3)', pointerEvents: 'none' }} />
                <input type="password" placeholder="Min. 8 karakter" value={form.password} onChange={set('password')} style={{ paddingLeft: 38 }} />
              </div>
            </div>
            <div className="field">
              <label>Konfirmasi Password</label>
              <div style={{ position: 'relative' }}>
                <i className="ti ti-lock-check" style={{ position: 'absolute', left: 13, top: '50%', transform: 'translateY(-50%)', fontSize: 15, color: form.confirm && form.confirm === form.password ? 'var(--green)' : 'var(--ink-3)', pointerEvents: 'none' }} />
                <input type="password" placeholder="Ulangi password" value={form.confirm} onChange={set('confirm')}
                  style={{ paddingLeft: 38, borderColor: form.confirm && form.confirm !== form.password ? 'var(--rose)' : '' }} />
              </div>
              {form.confirm && form.confirm !== form.password && (
                <div style={{ fontSize: 11, color: 'var(--rose)', marginTop: 3 }}>
                  <i className="ti ti-alert-circle" style={{ fontSize: 12, marginRight: 4 }} />Password tidak cocok
                </div>
              )}
            </div>

            {form.password.length > 0 && (
              <div>
                <div style={{ fontSize: 11, color: 'var(--ink-3)', marginBottom: 4 }}>Kekuatan password</div>
                <div style={{ display: 'flex', gap: 4 }}>
                  {[1,2,3,4].map(l => (
                    <div key={l} style={{
                      flex: 1, height: 4, borderRadius: 999,
                      background: form.password.length >= l * 2
                        ? l <= 1 ? 'var(--rose)' : l <= 2 ? 'var(--amber)' : l <= 3 ? 'var(--green)' : 'var(--green-2)'
                        : 'var(--bg-2)',
                    }} />
                  ))}
                </div>
              </div>
            )}

            <label style={{ display: 'flex', gap: 10, alignItems: 'flex-start', cursor: 'pointer', fontSize: 12.5, color: 'var(--ink-2)', lineHeight: 1.5 }}>
              <input type="checkbox" checked={agree} onChange={e => setAgree(e.target.checked)}
                style={{ marginTop: 2, accentColor: 'var(--green)', flexShrink: 0 }} />
              Saya menyetujui{' '}
              <a href="#" style={{ color: 'var(--green-2)', fontWeight: 600 }}>Syarat & Ketentuan</a>{' '}dan{' '}
              <a href="#" style={{ color: 'var(--green-2)', fontWeight: 600 }}>Kebijakan Privasi</a>
            </label>

            <button type="button" className="btn btn-primary"
              style={{ width: '100%', justifyContent: 'center', padding: 12, opacity: agree ? 1 : 0.5 }}
              onClick={() => { if (!agree) return; alert('Registrasi berhasil! Silakan cek email untuk verifikasi.'); go('login'); }}>
              <i className="ti ti-rocket" /> Buat Akun & Mulai
            </button>
          </div>
        )}

        <div style={{ textAlign: 'center', marginTop: 18, fontSize: 13, color: 'var(--ink-3)' }}>
          Sudah punya akun?{' '}
          <button type="button" onClick={() => go('login')}
            style={{ color: 'var(--green-2)', fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer', fontSize: 13 }}>
            Masuk
          </button>
        </div>
      </div>
    </AuthCard>
  );
}

export function LandingPage({ onLogin }: { onLogin?: () => void }) {
  const [screen, setScreen] = useState<Screen>('landing');
  return (
    <>
      {screen === 'landing' && <LandingScreen go={setScreen} />}
      {screen === 'login' && <LoginScreen go={setScreen} onLogin={onLogin} />}
      {screen === 'register' && <RegisterScreen go={setScreen} />}
    </>
  );
}