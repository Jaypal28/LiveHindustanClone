## Manual Test Scenarios

### A) Null Image Fallback
1. Open `data/articles.json` and verify article with slug `uttarakhand-snowfall-tourism` has `"image": null`.
2. Run `npm run dev` and visit `http://localhost:3000`.
3. Scroll to the "Trending Bulletins" grid and locate the "Auli aur Mussoorie..." card.
4. Expected: card still shows a gray placeholder illustration with text "Live Hindustan", layout height matches other cards, and summary/title alignment stays intact.

### B) Empty Articles JSON
1. Temporarily replace `data/articles.json` contents with `[]` and rerun `npm run dev` (or rebuild).
2. Visit `/` — since `getStaticProps` now returns empty array, homepage should show the "No News Available" dashed card with retry instructions.
3. Click the "Retry Fetch" button; loading ping + message should appear, and once API returns empty list again, the same message persists without crashes.
4. Expected: No hero/grid renders, button focus ring visible, and the UI does not throw errors in console.

