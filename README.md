## LiveHindustan Clone

HiEnglish newsroom clone built with Next.js (Pages Router) + TailwindCSS. Project features hero story, responsive grid, slug-based article pages, JSON mock data, and SEO/structured-data goodness.

### Local Setup
```bash
git clone <repo-url>
cd livehindustan-clone
npm install
```

### Available Scripts
- `npm run dev` – start dev server at `http://localhost:3000`
- `npm run lint` – run ESLint
- `npm run build` – production build (SSG for home + articles)
- `npm run start` – serve the build locally

### Data Source
- Mock stories live in `data/articles.json`. Each object needs:
  - `id`, `slug`, `title`, `image | null`, `summary`, `content`, `publishedAt`, `category`, `author`.
- Update file → rerun `npm run build` (or `npm run dev`) to see fresh copy.
- `/api/articles` exposes the same JSON so the homepage retry button can fetch the latest content.

### Testing Edge Cases
1. **Null image** – ensure placeholder renders (`docs/tests.md` has exact steps).
2. **Empty JSON** – swap file content with `[]`, rebuild, confirm "No News Available" message + retry CTA.

### Deployment Notes
- Project works great on Vercel (recommended). Minimal env vars required.
- For static hosting / export, run `npm run build` then `npx next export`.
- After deployment, editing `data/articles.json` requires a new build (SSG). Use ISR or headless CMS if you need live updates.

### Docs & Extras
- Design wireframe + rationale: `docs/design-doc.md`
- Code tour: `docs/code-explanation.md`
- Data fetching reasoning: `docs/data-fetching.md`
- Accessibility checklist: `docs/accessibility.md`
- Manual tests, challenges, AI reflection, and submission checklist live in `docs/`.
