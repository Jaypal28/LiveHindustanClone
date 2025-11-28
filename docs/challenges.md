- Tailwind v4 accidentally installed first; CLI missing `lib/cli.js`. Fixed by pinning `tailwindcss@3.4.14` and rerunning init.
- Windows execution policy blocked npm/npx scripts. Used `cmd /c` wrapper and piped answers (`echo n | npx ...`) to bypass prompts.
- `NewsCard` long-title wrapping threatened layout; added `.line-clamp-2` and natural wrapping on detail page to keep typography intact.
- Next Image needed placeholder asset for null URLs; created local SVG and centralized fallback logic inside component.
- SSG slug routing required consistent key; introduced `slug` field in JSON + helper `getArticleBySlug` so static paths remain stable.
- Empty JSON edge case initially crashed hero rendering; added guards + friendly "No News Available" message with retry CTA.
- SEO/structured data demanded dynamic `<Head>` content; wired per-page metadata + JSON-LD script built from article fields.
- Client retry button needed UX feedback; added loading ping indicator and error banner so users know when fetch fails.

