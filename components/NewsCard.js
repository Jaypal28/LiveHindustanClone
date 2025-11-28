import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { format } from 'date-fns'

export default function NewsCard({ article, variant = 'card' }) {
  const linkTarget = `/articles/${article.slug || article.id}`
  const truncatedSummary =
    article.summary.length > 120 ? `${article.summary.slice(0, 117)}...` : article.summary

  const imageSrc = article.image || '/images/placeholder.svg'
  const imageAlt = article.image ? article.title : `${article.title} placeholder image`

  const wrapperClasses = clsx('group flex flex-col overflow-hidden rounded-2xl bg-white', {
    'shadow-hero md:flex-row': variant === 'hero',
    'shadow-md transition hover:-translate-y-1 hover:shadow-lg': variant === 'card',
  })

  return (
    <article className={wrapperClasses}>
      <Link
        href={linkTarget}
        className={clsx('news-card-focus flex flex-1 flex-col outline-none', {
          'md:flex-row': variant === 'hero',
        })}
        aria-label={`Read full article: ${article.title}`}
      >
        <div
          className={clsx('relative w-full overflow-hidden bg-gray-100', {
            'md:w-1/2 h-64': variant === 'hero',
            'h-48': variant === 'card',
          })}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes={variant === 'hero' ? '(min-width: 768px) 50vw, 100vw' : '(min-width:768px) 33vw, 100vw'}
            className="object-cover"
            priority={variant === 'hero'}
          />
        </div>

        <div
          className={clsx('flex flex-1 flex-col gap-3 p-6', {
            'md:w-1/2': variant === 'hero',
          })}
        >
          <p className="text-xs uppercase tracking-wide text-brand-red">{article.category}</p>
          <h3
            className={clsx('font-display text-gray-900', {
              'line-clamp-2 text-lg leading-snug': variant === 'card',
              'text-3xl font-semibold leading-tight': variant === 'hero',
            })}
          >
            {article.title}
          </h3>
          <p className="text-sm text-gray-600 line-clamp-2">{truncatedSummary}</p>
          <div className="mt-auto flex items-center justify-between text-xs text-gray-500">
            <span>{format(new Date(article.publishedAt), 'dd MMM yyyy • h:mm a')}</span>
            <span>By {article.author}</span>
          </div>
        </div>
      </Link>
    </article>
  )
}

