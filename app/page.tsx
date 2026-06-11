import Link from 'next/link'
import Hero from '@/components/Hero'
import FeatureCard from '@/components/FeatureCard'
import TestimonialCard from '@/components/TestimonialCard'
import PricingCard from '@/components/PricingCard'
import { getSettings, getFeatures, getTestimonials, getPricingPlans } from '@/lib/cosmic'

export default async function HomePage() {
  const [settings, features, testimonials, plans] = await Promise.all([
    getSettings(),
    getFeatures(),
    getTestimonials(),
    getPricingPlans(),
  ])

  return (
    <>
      <Hero settings={settings} />

      {features.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Everything your practice needs
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Powerful tools designed to streamline your clinical workflow.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.slice(0, 6).map((feature) => (
              <FeatureCard key={feature.id} feature={feature} />
            ))}
          </div>
          {features.length > 6 && (
            <div className="mt-10 text-center">
              <Link
                href="/features"
                className="inline-block rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:border-slate-400"
              >
                View all features
              </Link>
            </div>
          )}
        </section>
      )}

      {testimonials.length > 0 && (
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Loved by clinicians
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                See what mental health professionals are saying.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.slice(0, 3).map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </section>
      )}

      {plans.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Simple, transparent pricing
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Choose the plan that fits your practice.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {plans.map((plan) => (
              <PricingCard key={plan.id} plan={plan} />
            ))}
          </div>
        </section>
      )}
    </>
  )
}