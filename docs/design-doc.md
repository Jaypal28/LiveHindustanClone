# LiveHindustan Clone Design Doc

## Project Ek Line mein
Hyperlocal Hindi news ka modern Next.js replica jisme hero bulletin + responsive grid se fresh content highlight hota hai.

## Wireframe (text sketch)
```
--------------------------------------------------------
| Header: Logo + Nav                                    |
--------------------------------------------------------
| Hero Card (Top Story, full width image + copy)        |
--------------------------------------------------------
| Trending Module                                       |
|  --------------------------------------------------   |
| | Main Column (2/3)  | Sidebar (1/3)               |  |
| | - Card 1           | - Quick Read 1              |  |
| | - Card 2           | - Quick Read 2              |  |
| | - Card 3           | - Quick Read 3              |  |
| | - Card 4           |                             |  |
|  --------------------------------------------------   |
--------------------------------------------------------
| Footer: Links + ©                                     |
--------------------------------------------------------
```

## Layout Decisions
- Hero ko full width rakha so users turant top story pe focus karein; `shadow-hero` aur serif heading se print-like flavour aata hai.
- Below hero, `md:grid-cols-3` lagake 2/3 main + 1/3 sidebar design choose kiya. Mobile pe single column stack hota hai, tablet/desktop pe editorial hierarchy dikh jata hai.
- Sidebar ko "Quick Reads" naam diya taki snackable updates highlight ho sakein bina hero ko compete kiye.
- Color palette mein brand red (#c50f1f) ko CTA aur category label ke liye use kiya, aur muted grays se readability high rakhi.

## Sectioning + Hierarchy
- **Header/Nav:** Serif logotype + primary nav with aria-label to maintain semantics aur keyboard access.
- **Top Stories:** Hero NewsCard variant with bigger typography, long-form summary, aur metadata to mimic print mastheads.
- **Trending Bulletins:** Card variant grid jo medium-depth stories rakhta hai; cards accessible hain aur focus ring custom hai.
- **Sidebar Quick Reads:** Short summaries + line clamp se overflow control, yahan par categories mix hain (Business, Policy, Culture).
- **Footer:** Dark strip jisme policy links + © info, layout ko full circle finish deta hai.

## Responsive + Interaction Notes
- Breakpoints: mobile default, `md` par grid split, `lg` par max container 6xl for wide monitors.
- Buttons aur links ke liye focus-visible outline + ring states add kiye so keyboard nav smooth rahe.
- NewsCard par hover lift effect sirf pointer devices par noticeable hai; focus states independent rakhe.

## Content Buckets
- Top Stories (Hero)
- Trending Bulletins (Main grid)
- Quick Reads (Sidebar)
- Article detail: large media, meta strip, structured data.

