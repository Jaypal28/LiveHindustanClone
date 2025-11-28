import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm">© {new Date().getFullYear()} Jaypal Chaudhary. All rights reserved.</p>
          <div className="flex gap-4 text-sm">
            <Link href="/privacy" className="hover:text-white focus-visible:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white focus-visible:text-white">
              Terms
            </Link>
            <Link href="/contact" className="hover:text-white focus-visible:text-white">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

