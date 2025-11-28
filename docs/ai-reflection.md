## AI Reflection (HiEnglish, ~190 words)
Is sprint mein maine AI ko mainly boilerplate accelerate karne ke liye use kiya. `create-next-app` flags, Tailwind config reminders, aur date formatting jaise chhote snippets ke liye AI prompts handy rahe. NewsCard variants ka initial JSX skeleton bhi AI suggestion se fast kick-off hua, but final layout/tone ko newsroom vibe dene ke liye kaafi manual tweaking ki.

Kuch jagah AI outputs galat the. Tailwind v4 ke naya syntax ka suggestion mila tha jisse `tailwindcss init` fail ho raha tha, so maine npm logs dekhkar version pin kiya. Isi tarah JSON-LD ke liye AI ne sample mein `@type: NewsArticle` likha par fields incomplete the, isliye schema docs cross-check karke minimal-yet-valid object likha. Loading state ke liye AI spinner markup diya jo aria attributes miss karta tha, so maine manual `role="status"` + `aria-live` add kiye.

Testing manual tha: `npm run lint/build` run kiya, null-image aur empty JSON scenarios ko docs mein capture kiya. Focus ring aur keyboard traversal personally verify kiye kyunki AI-suggested CSS kabhi kabhi outline ko override kar deti hai. Overall AI ne repetitive scaffolding mein time save kiya, lekin newsroom-specific tone (Hienglish copy, hero hierarchy, retry UX) aur deployment docs manual reasoning se hi precise ban paye.

