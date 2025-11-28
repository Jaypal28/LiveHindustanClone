import Head from 'next/head'
import NewsCard from '@/components/NewsCard'
import { readArticles } from '@/lib/articles'

export default function BusinessPage({ articles = [] }) {
  return (
    <>
      <Head>
        <title>Business — LiveHindustan Clone</title>
        <meta name="description" content="Latest business, markets and startup news." />
      </Head>
      <section className="space-y-6">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-brand-red">Markets</p>
          <h1 className="text-3xl font-bold text-gray-900">Business &amp; Economy</h1>
          <p className="mt-3 text-gray-600">
            Startups, fundraising, aur Sensex/Nifty ki top stories yahan curated form mein milengi.
          </p>
        </div>

        {articles.length ? (
          <div className="grid gap-6 md:grid-cols-2">
            {articles.map((article) => (
              <NewsCard key={article.slug} article={article} variant="card" />
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-gray-300 p-10 text-center text-gray-500">
            Business category ke liye koi mock article nahi mila. `data/articles.json` mein category ko "Business" ya
            "Markets" set karein.
          </div>
        )}
      </section>
    </>
  )
}

export async function getStaticProps() {
  const articles = readArticles().filter((article) => ['Business', 'Markets', 'Policy'].includes(article.category))

  return {
    props: { articles },
  }
}


