# Speccadex – Web

A Speccadex webes felülete: PC-konfigurátor és közösségi platform, ahol a felhasználók virtuálisan összeállíthatják a gépkonfigurációjukat, elmenthetik, és megoszthatják a fórumon.

## Tech stack
- React
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

Az oldal ezután a http://localhost:5173 címen érhető el. Az API címét a `.env` fájlban a `VITE_API_URL` adja meg (alapértelmezetten `http://localhost:3000`). A `.env` nem kerül fel GitHubra.

## Projekt struktúra

```
src/
├── api/client.js        # fetch az API-hoz (alap URL + token)
├── components/          # Layout és közös komponensek
├── pages/               # Home, Login, Register, Parts, Builder, Forum, NotFound
├── App.jsx              # útvonalak
└── index.css            # Tailwind és a márkaszínek
```

## Státusz
Tervezés alatt. Az oldalak egyelőre csak vázak (placeholderek).
