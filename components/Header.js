import Link from 'next/link'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Cities', href: '/cities' },
  { label: 'Business', href: '/business' },
  { label: 'Sports', href: '/sports' },
]

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="font-display text-2xl font-bold text-brand-red">
          LiveHindustan Clone
        </Link>
        <nav className="hidden gap-6 text-sm font-medium text-gray-700 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-brand-red focus-visible:text-brand-red"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}

