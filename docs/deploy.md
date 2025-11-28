## Vercel Deployment Guide

1. **Repo Ready:** Push project to GitHub/GitLab. Ensure `data/articles.json` is committed and `package-lock.json` present.
2. **Create Project:** Login to [Vercel](https://vercel.com), click *New Project* → import the repo.
3. **Configure Build:**
   - Framework: Next.js
   - Root directory: `/` (auto-detected)
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`
   - No environment variables required for mock data scenario.
4. **Deploy:** Click *Deploy*. Vercel will run install → build → upload static assets + serverless functions.
5. **Post-Deploy Checks:** Visit the generated URL, confirm `/` and `/articles/<slug>` render, and `/api/articles` returns JSON.

### Updating Mock JSON After Deployment
1. Edit `data/articles.json` locally (add/remove/update articles, ensuring slug uniqueness).
2. Commit changes: `git add data/articles.json && git commit -m "update articles"`.
3. Push to the repo branch connected to Vercel; each push triggers a new build (since SSG).
4. Once build completes, new content is live. For urgent updates without rebuild delay, consider enabling ISR (revalidate) or move data to CMS/API + `getServerSideProps`.

### Static Export Option
If you prefer static hosting (S3, Netlify, etc.):
1. Run `npm run build && npx next export`.
2. Deploy the generated `out/` directory to any static host.
3. Note: API routes and dynamic fallback won't work in static export; rely solely on prerendered pages.

