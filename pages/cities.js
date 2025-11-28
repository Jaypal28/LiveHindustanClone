import Head from 'next/head'
import NewsCard from '@/components/NewsCard'
import { readArticles } from '@/lib/articles'

export default function CitiesPage({ articles = [] }) {
  return (
    <>
      <Head>
        <title>Cities — LiveHindustan Clone</title>
        <meta name="description" content="City-wise bulletins and metro coverage." />
      </Head>
      <section className="space-y-6">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-brand-red">Cities</p>
          <h1 className="text-3xl font-bold text-gray-900">Metro &amp; Travel Updates</h1>
          <p className="mt-3 text-gray-600">
            Delhi NCR se lekar Uttarakhand ke hill stations tak — yahan sari shehri aur travel related khabrein list hoti
            hain.
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
            Filhaal koi city news available nahi hai. `data/articles.json` update karke build dubara chalaye.
          </div>
        )}
      </section>
    </>
  )
}

export async function getStaticProps() {
  const articles = readArticles().filter((article) => ['City', 'Travel'].includes(article.category))

  return {
    props: { articles },
  }
}

