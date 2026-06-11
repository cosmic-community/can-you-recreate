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
  const ctaLabel = getMetafieldValue(plan.metadata?.cta_label) || 'Choose Plan'
  const highlighted = plan.metadata?.highlighted === true

  const includedRaw = getMetafieldValue(plan.metadata?.included_features)
  const features = includedRaw
    .split(/\r?\n/)
    .map((f) => f.replace(/^[-*•]\s*/, '').trim())
    .filter(Boolean)

  return (
    <div
      className={`relative flex h-full flex-col rounded-2xl border p-8 shadow-sm transition-all ${
        highlighted
          ? 'border-brand-600 bg-white shadow-xl ring-2 ring-brand-600'
          : 'border-slate-100 bg-white'
      }`}
    >
      {highlighted && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-600 px-4 py-1 text-xs font-semibold text-white">
          Most Popular
        </span>
      )}
      <h3 className="text-xl font-bold text-slate-900">{planName}</h3>
      {description && <p className="mt-2 text-sm text-slate-500">{description}</p>}
      <div className="mt-6 flex items-baseline gap-1">
        <span className="text-4xl font-extrabold text-slate-900">{price}</span>
        {billingPeriod && <span className="text-sm text-slate-500">/{billingPeriod}</span>}
      </div>

      {features.length > 0 && (
        <ul className="mt-6 flex-1 space-y-3">
          {features.map((feat, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
              <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent-500" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clipRule="evenodd"
                />
              </svg>
              {feat}
            </li>
          ))}
        </ul>
      )}

      <a
        href="#"
        className={`mt-8 block rounded-full px-6 py-3 text-center text-sm font-semibold transition-colors ${
          highlighted
            ? 'bg-brand-600 text-white hover:bg-brand-700'
            : 'border border-slate-300 text-slate-700 hover:border-slate-400'
        }`}
      >
        {ctaLabel}
      </a>
    </div>
  )
}