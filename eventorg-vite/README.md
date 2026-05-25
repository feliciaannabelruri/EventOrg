# EventOrg — Vite + React + TypeScript

A clean, light-themed campus event-organizing dashboard. Built with **Vite**, **React 18**, and **TypeScript**.

---

## 🚀 Getting started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (http://localhost:5173)
npm run dev

# 3. Production build
npm run build

# 4. Preview the production build
npm run preview

# 5. Type-check only (no emit)
npm run typecheck
```

> Requires **Node.js ≥ 18**.

---

## 📁 Project structure

```
eventorg-vite/
├── index.html                  ← Vite HTML entry (loads /src/main.tsx)
├── package.json
├── tsconfig.json               ← App TS config (path alias @/* → src/*)
├── tsconfig.node.json          ← TS config for vite.config.ts
├── vite.config.ts              ← Vite + React plugin + @ alias
├── .gitignore
└── src/
    ├── main.tsx                ← React entry — mounts <App/> + <ToastProvider/>
    ├── App.tsx                 ← Shell, sidebar router, login gate
    ├── types.ts                ← Shared TS types (Tone, PageId, …)
    │
    ├── styles/
    │   └── globals.css         ← Design tokens + component styles
    │
    ├── context/
    │   └── ToastContext.tsx    ← Toast provider + useToast() hook
    │
    ├── components/
    │   ├── shared/             ← Reusable visual primitives
    │   │   ├── Avatar.tsx
    │   │   ├── Badge.tsx
    │   │   ├── Bar.tsx          (progress bar)
    │   │   ├── CardTitle.tsx
    │   │   ├── Donut.tsx        (SVG donut chart)
    │   │   ├── Kpi.tsx          (KPI tile)
    │   │   ├── Spark.tsx        (sparkline)
    │   │   ├── Stars.tsx        (star rating, interactive)
    │   │   └── index.ts         (barrel export)
    │   │
    │   └── layout/             ← App chrome
    │       ├── Announce.tsx
    │       ├── LoginScreen.tsx
    │       ├── NotifPanel.tsx
    │       ├── Sidebar.tsx
    │       └── Topbar.tsx
    │
    └── pages/                  ← One file per feature page
        ├── DashboardPage.tsx
        ├── OrgPage.tsx
        ├── RekrutmenPage.tsx
        ├── KomunikasiPage.tsx   (chat switcher)
        ├── TaskPage.tsx         (Kanban drag-drop + Gantt)
        ├── KeuanganPage.tsx     (RAB + approvals + cash flow)
        ├── SponsorshipPage.tsx
        ├── VendorPage.tsx
        ├── DokumentasiPage.tsx
        ├── HumasPage.tsx        (content calendar + trends)
        └── LaporanPage.tsx
```

---

## 🎨 Design system

- **Type:** Plus Jakarta Sans (display) · Inter (body) · JetBrains Mono (numerics)
- **Surface:** warm cream `#F4F2EC` background, white cards
- **Brand:** deep green `#1F7A4D` accent
- **Accents (low chroma):** coral · amber · dusty violet · steel blue · pink · rose
- **Radii:** 10 / 14 / 20 / 26 px scale
- **Spacing:** consistent 14 / 18 / 24 px grid gaps

All tokens live as CSS custom properties at the top of `src/styles/globals.css`.

---

## 🧠 Patterns used

| Concern | Where |
|---|---|
| Page routing | Simple `useState<PageId>` switch in `App.tsx` — swap for `react-router` if you need URLs |
| Cross-tree messages | `ToastContext` (`useToast()`) |
| Drag & drop | Native HTML5 DnD in `TaskPage.tsx` |
| Path alias | `@/*` → `src/*` via `tsconfig.json` + `vite.config.ts` |
| Type safety | `strict: true` in `tsconfig.json` |

---

## 🔧 Extending

- **Add a page:** create `src/pages/MyPage.tsx`, add an id to `PageId` in `src/types.ts`, register it in `PAGES` and the `Sidebar` `SECTIONS` array.
- **Add a shared primitive:** drop it in `src/components/shared/`, export it from `src/components/shared/index.ts`.
- **Replace toast/router/icons:** the layers are small and isolated — swap freely.

---

## 📦 Dependencies

Just `react` and `react-dom`. Icons are loaded as a webfont from a CDN in `index.html` (Tabler Icons). Fonts come from Google Fonts.

If you want everything bundled instead of CDN, install `@tabler/icons-webfont` and import its CSS from `main.tsx`.
