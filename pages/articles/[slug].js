import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { readArticles, getArticleBySlug } from '@/lib/articles'

export default function ArticlePage({ article }) {
  if (!article) {
    return (
      <section className="rounded-2xl bg-white p-8 text-center shadow-sm">
        <h1 className="text-2xl font-semibold text-gray-900">Article not found</h1>
        <p className="mt-3 text-gray-600">Ho sakta hai link expire ho gaya ho. Kripya homepage se koi doosri kahaani chunen.</p>
        <Link
          href="/"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-brand-red px-6 py-2 font-semibold text-white transition hover:bg-brand-dark focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2"
        >
          Back to Home
        </Link>
      </section>
    )
  }

  const imageSrc = article.image || '/images/placeholder.svg'
  const imageAlt = article.image ? `${article.title} image` : 'Placeholder image for missing article art'

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.summary,
    image: article.image ? [article.image] : ['/images/placeholder.svg'],
    datePublished: article.publishedAt,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://livehindustan-clone.vercel.app/articles/${article.slug}`,
    },
  }

  return (
    <>
      <Head>
        <title>{article.title} — LiveHindustan Clone</title>
        <meta name="description" content={article.summary} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.summary} />
        <meta property="og:image" content={article.image || '/images/placeholder.svg'} />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </Head>
      <article className="space-y-6 rounded-2xl bg-white p-6 shadow-sm sm:p-8">
        <header className="space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-brand-red">{article.category}</p>
          <h1 className="font-display text-3xl font-bold text-gray-900 sm:text-4xl">{article.title}</h1>
          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <span>By {article.author}</span>
            <span>{new Date(article.publishedAt).toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' })}</span>
          </div>
        </header>

        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-gray-100">
          <Image src={imageSrc} alt={imageAlt} fill className="object-cover" sizes="(min-width: 1024px) 800px, 100vw" />
        </div>

        <div className="space-y-4 text-lg leading-relaxed text-gray-800">
          {article.content.split('\n').map((paragraph, index) => (
            <p key={`${article.slug}-${index}`}>{paragraph}</p>
          ))}
        </div>

        <div className="pt-4">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-semibold text-brand-red transition hover:text-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2"
          >
            ← Back to Home
          </Link>
        </div>
      </article>
    </>
  )
}

export async function getStaticPaths() {
  const articles = readArticles()
  const paths = articles.map((article) => ({
    params: { slug: article.slug },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  try {
    const article = getArticleBySlug(params.slug)
    if (!article) {
      return {
        props: { article: null },
      }
    }

    return {
      props: { article },
    }
  } catch (error) {
    console.error('Article page error', error)
    return {
      props: { article: null },
    }
  }
}

