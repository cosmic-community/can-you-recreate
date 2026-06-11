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

      {/* How It Works */}
      <section id="how-it-works" className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: '#0f1c33' }}>
              How It Works
            </h2>
            <p className="mt-4 text-lg text-slate-500">
              Bring structured between-session support into your practice
            </p>
            <p className="mt-2 text-sm text-slate-400">
              Setup is simple. The result is a clearer picture of your clients&apos; week before you ever walk into a session.
            </p>
          </div>
          <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { step: '1', title: 'Set up your practice', desc: 'Create your practice, configure your settings, and invite your therapists.' },
              { step: '2', title: 'Invite your clients', desc: 'Send a secure invite. Clients download the Therapy Ally app on iOS or Android and use your unique practice code to connect.' },
              { step: '3', title: 'Assign between-session activities', desc: 'Therapists can assign an Ally aligned with their therapeutic approach and set homework, mood check-ins, and other activities.' },
              { step: '4', title: 'Review before sessions', desc: 'Therapists can see summaries and key moments from each client\'s week, so they can start each session with context.' },
            ].map(({ step, title, desc }) => (
              <div key={step} className="flex flex-col items-start">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-base font-bold text-white">
                  {step}
                </div>
                <h3 className="mt-4 text-base font-semibold" style={{ color: '#0f1c33' }}>{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy & Security */}
      <section className="py-20" style={{ background: 'linear-gradient(180deg, #f8fafc 0%, #edfafa 100%)' }}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: '#0f1c33' }}>
              Private, secure, and built for clinical use
            </h2>
            <p className="mt-3 text-sm font-medium text-brand-600">Built specifically for therapy practices</p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'No Transcripts. Ever.', desc: 'Therapists see clear, structured summaries of key moments from the week, without storing full conversations.' },
              { title: 'Client-controlled sharing', desc: 'Clients can use Therapy Ally privately and choose what to share, while homework and check-ins are shared automatically.' },
              { title: 'No identifiable client data', desc: 'Clinical data is stored without names or identifying details. The AI cannot correlate conversations to anyone.' },
              { title: 'Isolated client data', desc: "Each client's data is securely separated, so clinicians only access information for their own clients." },
              { title: 'Data Separation by Design', desc: 'Clinical data is structurally separated from any identifying systems, preventing it from being linked back to an individual.' },
              { title: 'Continuity of Care', desc: "If a therapist leaves, clinical data remains with the practice, enabling seamless reassignment with the client's consent." },
            ].map(({ title, desc }) => (
              <div key={title} className="rounded-xl border border-brand-100 bg-white p-6 shadow-sm">
                <div className="mb-2 flex items-center gap-2">
                  <svg className="h-5 w-5 flex-shrink-0 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <h3 className="text-sm font-semibold" style={{ color: '#0f1c33' }}>{title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-slate-500">{desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-slate-500">
            <span className="flex items-center gap-1"><span className="text-brand-500">✓</span> Encrypted at rest and in transit</span>
            <span className="flex items-center gap-1"><span className="text-brand-500">✓</span> Hosted on SOC 2 Type II certified infrastructure</span>
            <span className="flex items-center gap-1"><span className="text-brand-500">✓</span> HIPAA BAA available</span>
          </div>
        </div>
      </section>

      {/* Features */}
      {features.length > 0 && (
        <section className="bg-white py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: '#0f1c33' }}>
                Designed around your clinical workflow.
              </h2>
              <p className="mt-4 text-lg text-slate-500">
                Tools that give you a structured view of your clients&apos; week, so every session begins with greater context and continuity.
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
                  className="inline-block rounded-md border border-brand-200 bg-white px-6 py-3 text-sm font-semibold text-brand-700 hover:bg-brand-50"
                >
                  View all features
                </Link>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Testimonial */}
      {testimonials.length > 0 && (
        <section className="py-20" style={{ background: 'linear-gradient(180deg, #f8fafc 0%, #edfafa 100%)' }}>
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: '#0f1c33' }}>
                Trusted by clinicians
              </h2>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.slice(0, 3).map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* The Client Experience */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: '#0f1c33' }}>
              The Client Experience
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: 'Real-time conversations', desc: 'Clients have real-time conversations with their assigned Ally.' },
              { title: 'Support anytime', desc: 'They can talk openly, anytime, day or night, and receive evidence-based conversational support aligned with your guidance.' },
              { title: 'Safe and structured', desc: 'The Ally is designed to be safe and supportive, trained to stay within the boundaries of conversational support.' },
              { title: 'Privacy and control', desc: 'Clients can view summaries and track progress. They have full control over their data and can delete conversations at any time.' },
            ].map(({ title, desc }) => (
              <div key={title} className="rounded-xl border border-slate-100 bg-slate-50 p-6">
                <h3 className="text-sm font-semibold" style={{ color: '#0f1c33' }}>{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      {plans.length > 0 && (
        <section className="py-20" style={{ background: 'linear-gradient(180deg, #edfafa 0%, #f8fafc 100%)' }}>
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: '#0f1c33' }}>
                Simple, transparent pricing
              </h2>
              <p className="mt-4 text-lg text-slate-500">
                Choose the plan that fits your practice.
              </p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {plans.map((plan) => (
                <PricingCard key={plan.id} plan={plan} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="ta-gradient-hero py-20 text-white">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Your practice. Your guidance. Your clients, better supported.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">
            Your clients are seeking support between sessions whether you&apos;re involved or not. Therapy Ally puts your practice in the loop.
          </p>
          <a
            href="https://clinician.therapyally.ai/clinician-signup"
            className="mt-8 inline-block rounded-md bg-white px-8 py-3 text-base font-semibold text-brand-700 shadow-lg transition-colors hover:bg-brand-50"
          >
            Get Started
          </a>
          <p className="mt-3 text-sm text-white/50">Setup takes less than 5 minutes.</p>
        </div>
      </section>
    </>
  )
}
