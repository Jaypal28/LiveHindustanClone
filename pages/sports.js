import Head from 'next/head'
import NewsCard from '@/components/NewsCard'
import { readArticles } from '@/lib/articles'

export default function SportsPage({ articles = [] }) {
  return (
    <>
      <Head>
        <title>Sports — LiveHindustan Clone</title>
        <meta name="description" content="Cricket, football aur baaki sports updates." />
      </Head>
      <section className="space-y-6">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-brand-red">Sports</p>
          <h1 className="text-3xl font-bold text-gray-900">Match Reports &amp; Locker Room Buzz</h1>
          <p className="mt-3 text-gray-600">
            Cricket, kabaddi, aur baaki sports headlines ka curated feed niche diya gaya hai.
          </p>
        </div>

        {articles.length ? (
          <div className="space-y-6">
            {articles.map((article) => (
              <NewsCard key={article.slug} article={article} variant="card" />
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-gray-300 p-10 text-center text-gray-500">
            Sports category se koi mock article nahi mila. `data/articles.json` mein category ko "Sports" karein.
          </div>
        )}
      </section>
    </>
  )
}

export async function getStaticProps() {
  const articles = readArticles().filter((article) => article.category === 'Sports')

  return {
    props: { articles },
  }
}


