import { useState } from 'react';

interface LoginScreenProps {
  onLogin: () => void;
}

type Tab = 'email' | 'ktm';

export function LoginScreen({ onLogin }: LoginScreenProps) {
  const [tab, setTab] = useState<Tab>('email');

  return (
    <div className="login-screen">
      <div className="login-card">
        <div style={{ textAlign: 'center', marginBottom: 22, position: 'relative', zIndex: 1 }}>
          <div className="brand-mark" style={{ width: 56, height: 56, borderRadius: 18, margin: '0 auto 12px' }} />
          <div className="font-display" style={{ fontSize: 26, letterSpacing: '-0.025em', fontWeight: 800 }}>
            EventOrg
          </div>
          <div className="muted tiny" style={{ marginTop: 2 }}>
            Platform Kepanitiaan Kampus All-in-One
          </div>
        </div>

        <div className="login-tabs">
          <button type="button" className={tab === 'email' ? 'on' : ''} onClick={() => setTab('email')}>
            Email Institusi
          </button>
          <button type="button" className={tab === 'ktm' ? 'on' : ''} onClick={() => setTab('ktm')}>
            Upload KTM
          </button>
        </div>

        {tab === 'email' ? (
          <div className="stack" style={{ gap: 14 }}>
            <div className="field">
              <label>Email Kampus</label>
              <input type="email" placeholder="nim@students.uti.ac.id" defaultValue="aldi.rahmawan@students.uti.ac.id" />
            </div>
            <div className="field">
              <label>Password</label>
              <input type="password" placeholder="••••••••" defaultValue="techfest2025" />
            </div>
            <button
              type="button"
              className="btn btn-primary"
              style={{ width: '100%', justifyContent: 'center', padding: 12 }}
              onClick={onLogin}
            >
              <i className="ti ti-login" /> Masuk ke EventOrg
            </button>
          </div>
        ) : (
          <div className="stack" style={{ gap: 14 }}>
            <div className="dropzone">
              <i className="ti ti-id-badge" />
              <div style={{ fontSize: 13, fontWeight: 600 }}>Klik atau drag untuk upload KTM</div>
              <div className="tiny muted" style={{ marginTop: 4 }}>Format JPG, PNG maks 5MB</div>
            </div>
            <button
              type="button"
              className="btn btn-primary"
              style={{ width: '100%', justifyContent: 'center', padding: 12 }}
              onClick={onLogin}
            >
              <i className="ti ti-upload" /> Upload & Verifikasi
            </button>
          </div>
        )}

        <div className="tiny muted" style={{ textAlign: 'center', marginTop: 16, position: 'relative', zIndex: 1 }}>
          Akses terbatas untuk mahasiswa aktif terverifikasi
        </div>
      </div>
    </div>
  );
}
