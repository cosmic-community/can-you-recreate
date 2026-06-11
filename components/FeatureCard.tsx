import type { Feature } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface FeatureCardProps {
  feature: Feature
}

export default function FeatureCard({ feature }: FeatureCardProps) {
  if (!feature) return null

  const name = getMetafieldValue(feature.metadata?.name) || feature.title
  const icon = getMetafieldValue(feature.metadata?.icon) || '✨'
  const shortDescription = getMetafieldValue(feature.metadata?.short_description)

  return (
    <div className="ta-card-hover flex flex-col rounded-xl border border-slate-100 bg-white p-6 shadow-sm">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50">
        <span className="text-xl">{icon}</span>
      </div>
      <h3 className="text-base font-semibold" style={{ color: '#0f1c33' }}>{name}</h3>
      {shortDescription && (
        <p className="mt-2 text-sm leading-relaxed text-slate-500">{shortDescription}</p>
      )}
    </div>
  )
}
