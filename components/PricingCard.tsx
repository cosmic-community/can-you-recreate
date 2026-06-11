import type { PricingPlan } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface PricingCardProps {
  plan: PricingPlan
}

export default function PricingCard({ plan }: PricingCardProps) {
  if (!plan) return null

  const planName = getMetafieldValue(plan.metadata?.plan_name) || plan.title
  const price = getMetafieldValue(plan.metadata?.price)
  const billingPeriod = getMetafieldValue(plan.metadata?.billing_period)
  const description = getMetafieldValue(plan.metadata?.description)
  const ctaLabel = getMetafieldValue(plan.metadata?.cta_label) || 'Get Started'
  const highlighted = plan.metadata?.highlighted === true

  // Features stored as JSON array
  let features: string[] = []
  try {
    const raw = plan.metadata?.included_features
    if (Array.isArray(raw)) {
      features = raw
    } else if (typeof raw === 'string') {
      const parsed = JSON.parse(raw)
      features = Array.isArray(parsed) ? parsed : []
    }
  } catch {
    features = []
  }

  return (
    <div
      className={`relative flex h-full flex-col rounded-xl p-8 shadow-sm transition-all ${
        highlighted
          ? 'border-2 border-brand-500 bg-white shadow-xl'
          : 'border border-slate-100 bg-white'
      }`}
    >
      {highlighted && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-600 px-4 py-1 text-xs font-semibold text-white">
          Most Popular
        </span>
      )}
      <h3 className="text-lg font-bold" style={{ color: '#0f1c33' }}>{planName}</h3>
      {description && <p className="mt-1 text-sm text-slate-400">{description}</p>}
      <div className="mt-6 flex items-baseline gap-1">
        <span className="text-4xl font-extrabold" style={{ color: '#0f1c33' }}>{price}</span>
        {billingPeriod && billingPeriod !== 'custom' && (
          <span className="text-sm text-slate-400">/{billingPeriod}</span>
        )}
      </div>

      {features.length > 0 && (
        <ul className="mt-6 flex-1 space-y-3">
          {features.map((feat: string, i: number) => (
            <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
              <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              {feat}
            </li>
          ))}
        </ul>
      )}

      <a
        href="https://clinician.therapyally.ai/clinician-signup"
        className={`mt-8 block rounded-md px-6 py-3 text-center text-sm font-semibold transition-colors ${
          highlighted
            ? 'bg-brand-600 text-white hover:bg-brand-700'
            : 'border border-brand-200 text-brand-700 hover:bg-brand-50'
        }`}
      >
        {ctaLabel}
      </a>
    </div>
  )
}
