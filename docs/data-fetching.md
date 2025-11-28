1. Homepage ko `getStaticProps` se build-time render kiya kyunki demo content mostly static hai aur CDN cache se fastest TTFB milta hai.
2. Static HTML host karne se infra costs low rehte hain aur Next export ya Vercel edge dono options khule rehte hain.
3. Tradeoff ye hai ki JSON update hote hi naya build trig karna padega, otherwise headlines stale dikh sakti hain.
4. Agar newsroom ko har ghante updates push karne hain to `getServerSideProps` ya ISR use karke near-real-time publish karna behtar hoga.
5. ISR tab ideal hai jab frequent par predictable refresh chaiye (jaise har 5 minute). Ye CDN cache retain karta hai aur background revalidation deta hai.
6. Client-side retry button optional realtime fetch deta hai, par core SEO-friendly markup still SSG se aata hai.

