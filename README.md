# Nexvoya

Nexvoya is a global staff augmentation and software development platform — connecting
businesses with vetted IT talent and delivering end-to-end product, web, and mobile
development services.

This repository contains the marketing/website front end, built with **React** and **Vite**.

## Tech Stack

- **React** — UI library
- **Vite** — build tool & dev server (HMR)
- **React Router** — client-side routing
- **Tailwind CSS** — utility-first styling
- **Framer Motion** — animations and transitions
- **react-icons** — icon set (social links, etc.)

## Getting Started

### Prerequisites

- Node.js 18+
- npm (or yarn/pnpm)

### Installation

```bash
npm install
```

### Development

Start the local dev server with hot module replacement:

```bash
npm run dev
```

The app will be available at `http://localhost:5173` by default.

### Build

Create a production build:

```bash
npm run build
```

### Preview

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
src/
├── assets/
│   ├── industries/       # Icons/images for the Industries section
│   ├── services/         # Icons/images for the Services section
│   └── NexvoyaFlow.jsx   # Flow/animation component on the homepage
├── pages/
│   ├── About.jsx
│   ├── Careers.jsx
│   ├── industries/       # Healthcare, EdTech, FinTech, Real Estate, Retail, Restaurants
│   └── service/           # Cloud Computing, ERP, Mobile App, etc.
├── Navbar.jsx
├── App.jsx                # Main app shell, homepage sections, contact modal
├── main.jsx                # Router setup — all page routes registered here
└── index.css               # Tailwind base + global styles / font imports
```

## Routing

All routes are registered in `main.jsx` using `react-router-dom`. Key routes:

| Path                  | Page              |
|-----------------------|-------------------|
| `/`                   | Home              |
| `/about`              | About             |
| `/careers`            | Careers           |
| `/staff-augmentation` | Staff Augmentation |
| `/cloud-computing`    | Cloud Computing service |
| `/mobile-app`         | Mobile App service |
| `/erp-solutions`      | ERP Solutions service |
| `/healthcare`         | Healthcare industry |
| `/edtech`             | EdTech industry |
| `/fintech`            | FinTech industry |
| `/real-estate`        | Real Estate industry |
| `/retail`             | Retail industry |
| `/restaurants`        | Restaurants industry |

Each service/industry page includes its own **Back** button (`useNavigate` /
`window.history.back()`) to return to the previous page.

## Styling Notes

- Font imports (Google Fonts) should be added once in `index.css` rather than duplicated
  inside individual component `<style>` blocks — this avoids false-positive "unknown at
  rule" warnings from editor CSS linting and prevents redundant network requests.
- Pages under `pages/service/` and `pages/industries/` each use a distinct color palette,
  type pairing, and signature visual element to keep them from feeling like copies of one
  template.

## Contact / Lead Capture

The homepage includes a contact modal (`showContact` state in `App.jsx`) triggered from
multiple CTAs across the site: hero buttons, the "Book a Call" footer link, and section CTAs.

## License

Proprietary — © 2026 Nexvoya. All rights reserved.