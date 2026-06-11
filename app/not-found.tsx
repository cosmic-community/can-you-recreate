import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center px-4 py-32 text-center">
      <span className="text-6xl">🧠</span>
      <h1 className="mt-6 text-4xl font-extrabold text-slate-900">Page not found</h1>
      <p className="mt-4 text-lg text-slate-600">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-700"
      >
        Go home
      </Link>
    </div>
  )
}