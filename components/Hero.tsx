import type { Settings } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface HeroProps {
  settings: Settings | null
}

export default function Hero({ settings }: HeroProps) {
  const tagline = getMetafieldValue(settings?.metadata?.tagline) || 'AI-Powered Care for Clinicians'
  const description =
    getMetafieldValue(settings?.metadata?.hero_description) ||
    'Spend less time on paperwork and more time with your clients.'
  const ctaText = getMetafieldValue(settings?.metadata?.primary_cta_text) || 'Get Started'
  const ctaLink = getMetafieldValue(settings?.metadata?.primary_cta_link) || '#'

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-white">
      <div className="absolute inset-0 -z-10 opacity-40">
        <div className="absolute left-1/4 top-0 h-72 w-72 rounded-full bg-brand-200 blur-3xl" />
        <div className="absolute right-1/4 top-20 h-72 w-72 rounded-full bg-accent-200 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-4 py-24 text-center sm:px-6 lg:px-8 lg:py-32">
        <span className="inline-block rounded-full bg-brand-100 px-4 py-1 text-sm font-medium text-brand-700">
          For Mental Health Professionals
        </span>
        <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
          {tagline}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">{description}</p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={ctaLink}
            className="rounded-full bg-brand-600 px-8 py-3 text-base font-semibold text-white shadow-lg shadow-brand-600/20 transition-colors hover:bg-brand-700"
          >
            {ctaText}
          </a>
          <a
            href="/features"
            className="rounded-full border border-slate-300 bg-white px-8 py-3 text-base font-semibold text-slate-700 transition-colors hover:border-slate-400"
          >
            See Features
          </a>
        </div>
      </div>
    </section>
  )
}