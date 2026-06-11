import type { Settings } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface HeroProps {
  settings: Settings | null
}

export default function Hero({ settings }: HeroProps) {
  const tagline = getMetafieldValue(settings?.metadata?.tagline) || 'Structured AI support for modern therapy practices.'
  const description =
    getMetafieldValue(settings?.metadata?.hero_description) ||
    'Your clients are already seeking AI-powered support between sessions. Therapy Ally™ provides your practice with the structure and oversight to ensure support remains aligned with the therapeutic work happening in session.'
  const ctaText = getMetafieldValue(settings?.metadata?.primary_cta_text) || 'Get Started'
  const ctaLink = getMetafieldValue(settings?.metadata?.primary_cta_link) || '#'

  return (
    <>
      {/* Hero Section — dark navy/teal gradient like therapyally.ai */}
      <section className="ta-gradient-hero text-white">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm font-medium text-white/90 backdrop-blur-sm">
              For Mental Health Professionals
            </span>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {tagline}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80">{description}</p>
            <div className="mt-4 text-sm font-medium text-white/60">
              Simple to adopt, with a meaningful payoff
            </div>
            <div className="mt-2 text-base text-white/70 italic">
              &ldquo;Clients often forget or compress important moments from their week. Therapy Ally captures those moments, so you can work with them in session.&rdquo;
            </div>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={ctaLink}
                className="rounded-md bg-white px-8 py-3 text-base font-semibold text-brand-700 shadow-lg transition-colors hover:bg-brand-50"
              >
                {ctaText}
              </a>
              <a
                href="#how-it-works"
                className="rounded-md border border-white/30 bg-white/10 px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-white/20"
              >
                See How It Works
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <div className="border-b border-brand-100 bg-brand-50 py-4">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-medium text-brand-700">
            🔒 Built with a privacy-first architecture designed for HIPAA compliance.
          </p>
        </div>
      </div>

      {/* More complete insight callout */}
      <div className="bg-white py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-brand-50 px-8 py-10 text-center">
            <h2 className="text-2xl font-bold text-navy-900" style={{ color: '#0f1c33' }}>More complete insight into your clients&apos; week, without adding complexity to your workflow.</h2>
          </div>
        </div>
      </div>
    </>
  )
}
