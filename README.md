# Speccadex – Web

A Speccadex webes felülete: PC-konfigurátor és közösségi platform, ahol a felhasználók virtuálisan összeállíthatják a gépkonfigurációjukat, elmenthetik, és megoszthatják a fórumon.

## Tech stack
- React
- TypeScript
- Tailwind CSS

## Felelős
Tóth Kristóf Antal

## Kapcsolódó repók
- speccadex-api (backend)
- speccadex-desktop (WPF)
- speccadex-mobile (Android)

## Futtatás

Szükséges: Node.js 20.19+ (vagy 22.12+).

```bash
npm install
cp .env.example .env
npm run dev
```

Windows parancssorban a második sor: `copy .env.example .env`

Típusellenőrzés külön: `npm run typecheck` (a `npm run build` is lefuttatja).

Az oldal ezután a http://localhost:5173 címen érhető el. Az API címét a `.env` fájlban a `VITE_API_URL` adja meg (alapértelmezetten `http://localhost:3000`). A `.env` nem kerül fel GitHubra.

## Téma

Az oldalnak világos és sötét témája van, a navigációs sáv jobb szélén lévő gombbal három állás között lehet váltani: világos, sötét, rendszer (az operációs rendszer beállítását követi). A választást a böngésző elmenti.

A színek szerepek szerint vannak elnevezve (`bg-brand-bg`, `bg-brand-panel`, `text-fg`, `text-muted`, `border-line`, `bg-field`), az értékeket az `src/index.css` adja meg a két témához. Új komponensben ezeket használd, ne fix színt (például `text-slate-300`), különben az egyik témában olvashatatlan lesz.

## Projekt struktúra

```
src/
├── api/client.ts        # fetch az API-hoz (alap URL + token)
├── components/
│   ├── Layout.tsx       # fejléc, navigáció, lábléc
│   ├── AuthCard.tsx     # bejelentkezési és regisztrációs kártya
│   ├── TextField.tsx    # címkés beviteli mező hibaüzenettel, jelszó megjelenítéssel
│   ├── ThemeToggle.tsx  # téma váltó (világos, sötét, rendszer)
│   └── PagePlaceholder.tsx
├── pages/               # Home, Login, Register, Parts, Builder, Forum, NotFound
├── App.tsx              # útvonalak
└── index.css            # Tailwind, márkaszínek és a két téma értékei
```

## Státusz
Fejlesztés alatt.

- Kész: projektváz, TypeScript, téma, bejelentkezési és regisztrációs oldal felülete kliensoldali validációval.
- Még hiányzik: az API-hoz kötés (a backend végpontok még nincsenek kész), kijelentkezés és védett oldalak, a Parts, Builder és Forum oldalak tartalma (jelenleg placeholderek).