# Technology Stack

**Analysis Date:** 2026-02-11

## Languages

**Primary:**
- JavaScript (ES2021+) - Frontend React application (files under `src/`)

**Secondary:**
- CSS - Styling files (`src/index.css`, `src/App.css`, assets in `public/`)

## Runtime

**Environment:**
- Browser (client-side React)
- Node.js (used for dev/build via `react-scripts`; exact version not specified in repo)

**Package Manager:**
- npm (detected `package-lock.json`) - project scripts in `package.json`
- yarn (detected `yarn.lock`) - yarn lockfile present
- Lockfile status: both `package-lock.json` and `yarn.lock` present (`package-lock.json`, `yarn.lock`)

## Frameworks

**Core:**
- React ^18.3.1 - UI framework; source under `src/` and entry `src/index.js`
- Create React App / react-scripts 5.0.1 - development server, build and test scripts (`package.json` scripts)

**UI & Styling:**
- Bootstrap ^5.3.8 (`package.json`) - used for layout/styles; see `src/index.css` and `src/App.css`
- styled-components ^6.1.13 - used for component-scoped styling (`package.json`)

**Routing:**
- react-router-dom ^6.26.2 - client-side routing (`src/App.js`, route pages under `src/pages/`)

**Testing:**
- @testing-library/react, @testing-library/jest-dom - present as dependencies (`package.json`)

## Key Dependencies

**Critical:**
- `react` ^18.3.1 - core library (`package.json`)
- `react-dom` ^18.3.1 - DOM renderer (`package.json`)
- `react-scripts` 5.0.1 - build/dev tooling (`package.json`)

**UI & Utility:**
- `bootstrap` ^5.3.8 - UI styles (`package.json`)
- `styled-components` ^6.1.13 - CSS-in-JS (`package.json`)
- `react-icons` ^5.5.0 - icon set (`package.json`)

## Configuration

**Environment:**
- No `.env` or environment variables detected in repository files under `src/` (search for `process.env` or `REACT_APP_` returned no matches)

**Build:**
- Build and dev commands live in `package.json` scripts: `start`, `build`, `test`, `eject`
- CRA config implicit via `react-scripts`; `public/` holds `index.html` and app icons

## Platform Requirements

**Development:**
- Node.js (version unspecified) and npm or yarn installed
- Run: `npm start` or `yarn start` from repo root (`package.json`)

**Production:**
- Static build output produced by `npm run build` (`react-scripts build`) -> `build/` directory (not committed)
- Deployable to any static hosting (Netlify, Vercel, GitHub Pages). No hosting config detected

## Notable repo files

- `package.json` (`package.json`)
- `yarn.lock` (`yarn.lock`)
- `package-lock.json` (`package-lock.json`)
- Source: `src/` directory - `src/index.js`, `src/App.js`, `src/pages/*`, `src/components/*`
- Public assets: `public/` - `index.html`, `favicon.ico`, icons

---

*Stack analysis: 2026-02-11*
