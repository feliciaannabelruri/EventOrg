import { createContext, useCallback, useContext, useState, type ReactNode } from 'react';

type ToastTone = 'green' | 'info';
type Toast = { id: string; msg: string; tone: ToastTone };

type ToastFn = (msg: string, tone?: ToastTone) => void;

const ToastCtx = createContext<ToastFn | null>(null);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [list, setList] = useState<Toast[]>([]);

  const push = useCallback<ToastFn>((msg, tone = 'green') => {
    const id = Math.random().toString(36).slice(2);
    setList((prev) => [...prev, { id, msg, tone }]);
    window.setTimeout(() => {
      setList((prev) => prev.filter((t) => t.id !== id));
    }, 2600);
  }, []);

  return (
    <ToastCtx.Provider value={push}>
      {children}
      <div
        style={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
          zIndex: 999,
        }}
      >
        {list.map((t) => (
          <div
            key={t.id}
            style={{
              background: 'var(--ink)',
              color: 'white',
              padding: '10px 16px',
              borderRadius: 12,
              boxShadow: 'var(--sh-3)',
              fontSize: 13,
              fontWeight: 500,
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              animation: 'slideDown 0.18s ease',
            }}
          >
            <i
              className={`ti ti-${t.tone === 'green' ? 'check' : 'info-circle'}`}
              style={{
                color: t.tone === 'green' ? '#7adf9f' : '#f7c34e',
                fontSize: 16,
              }}
            />
            {t.msg}
          </div>
        ))}
      </div>
    </ToastCtx.Provider>
  );
}

export function useToast(): ToastFn {
  const ctx = useContext(ToastCtx);
  if (!ctx) throw new Error('useToast must be used inside <ToastProvider>');
  return ctx;
}
