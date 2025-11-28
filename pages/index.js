import { useState } from 'react'
import Head from 'next/head'
import NewsCard from '@/components/NewsCard'
import { readArticles } from '@/lib/articles'

export default function Home({ articles = [], hasError }) {
  const [clientArticles, setClientArticles] = useState(articles)
  const [loading, setLoading] = useState(false)
  const [clientError, setClientError] = useState(hasError ? 'FETCH_ERROR' : null)

  const handleRetry = async () => {
    setLoading(true)
    setClientError(null)
    try {
      const response = await fetch('/api/articles')
      if (!response.ok) {
        throw new Error('Failed to fetch articles')
      }
      const payload = await response.json()
      setClientArticles(payload.articles || [])
      if (!payload.articles?.length) {
        setClientError('NO_DATA')
      }
    } catch (error) {
      setClientError('FETCH_ERROR')
    } finally {
      setLoading(false)
    }
  }

  const handleFullPageRefresh = () => {
    if (typeof window !== 'undefined') {
      window.location.reload()
    }
  }

  const data = clientArticles?.length ? clientArticles : []
  const heroArticle = data[0]
  const remainingArticles = data.slice(1)
  const mainColumnArticles = remainingArticles.slice(0, 4)
  const sidebarArticles = remainingArticles.slice(4)

  const showEmptyState = !loading && (!data.length || clientError === 'NO_DATA')

  return (
    <>
      <Head>
        <title>LiveHindustan Clone — Latest Hindi News</title>
        <meta
          name="description"
          content="Follow breaking Hindi news across cities, business, sports, travel, and culture on LiveHindustan Clone."
        />
        <meta property="og:title" content="LiveHindustan Clone — Latest Hindi News" />
        <meta
          property="og:description"
          content="Curated Hindi news headlines with hero coverage and topic-wise highlights."
        />
        <meta property="og:image" content={heroArticle?.image || '/images/placeholder.svg'} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <section className="space-y-8">
        {heroArticle && (
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-gray-500">Top Story</p>
            <NewsCard article={heroArticle} variant="hero" />
          </div>
        )}

        <div className="space-y-4 rounded-2xl bg-white p-4 shadow-sm sm:p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-xl font-semibold text-gray-900">Trending Bulletins</h2>
            <div className="flex items-center gap-3">
              {clientArticles.length > 0 ? (
                <button
                  type="button"
                  onClick={handleFullPageRefresh}
                  className="rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-brand-red hover:text-brand-red focus-visible:border-brand-red"
                >
                  Refresh
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleRetry}
                  className="rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-brand-red hover:text-brand-red focus-visible:border-brand-red"
                >
                  Retry
                </button>
              )}
              {loading && (
                <div role="status" aria-live="polite" className="flex items-center gap-2 text-sm text-gray-500">
                  <span className="h-3 w-3 animate-ping rounded-full bg-brand-red" />
                  Loading latest feed...
                </div>
              )}
            </div>
          </div>

          {clientError === 'FETCH_ERROR' && (
            <div className="rounded-lg bg-red-50 p-4 text-sm text-red-700">
              Kuch gadbad ho gayi. Kripya Retry button dabake dobara koshish karein.
            </div>
          )}

          {showEmptyState && (
            <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-gray-300 p-10 text-center">
              <p className="text-lg font-semibold text-gray-800">No News Available</p>
              <p className="mt-2 max-w-md text-sm text-gray-500">
                Filhal feed khaali hai. Jaldi se refresh dabaye ya JSON data ko update karke dobara build chalaye.
              </p>
              <button
                type="button"
                onClick={handleRetry}
                className="mt-4 rounded-full bg-brand-red px-6 py-2 text-sm font-semibold text-white transition hover:bg-brand-dark focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2"
              >
                Retry Fetch
              </button>
            </div>
          )}

          {!showEmptyState && (
            <div className="grid gap-8 md:grid-cols-3">
              <div className="space-y-6 md:col-span-2">
                {mainColumnArticles.map((article) => (
                  <NewsCard key={article.slug} article={article} variant="card" />
                ))}
              </div>
              <div className="space-y-6 md:col-span-1">
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">Quick Reads</h3>
                {sidebarArticles.map((article) => (
                  <NewsCard key={article.slug} article={article} variant="card" />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export async function getStaticProps() {
  try {
    const articles = readArticles()
    /*
     SSG keeps the home feed ultra-fast and globally cacheable at the CDN edge.
     The tradeoff is stale data until the next build, which is acceptable for demo news.
     We'd switch to getServerSideProps for true realtime bulletins or to ISR for periodic refreshes.
     */
    return {
      props: { articles },
    }
  } catch (error) {
    console.error('Home getStaticProps error', error)
    return {
      props: { articles: [], hasError: true },
    }
  }
}

