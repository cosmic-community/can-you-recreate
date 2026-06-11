import Link from 'next/link'
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
  const image = feature.metadata?.image

  return (
    <Link
      href={`/features/${feature.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
    >
      {image?.imgix_url ? (
        <div className="aspect-video overflow-hidden bg-slate-100">
          <img
            src={`${image.imgix_url}?w=800&h=450&fit=crop&auto=format,compress`}
            alt={name}
            width={400}
            height={225}
            className="h-full w-full object-cover transition-transform group-hover:scale-105"
          />
        </div>
      ) : (
        <div className="flex aspect-video items-center justify-center bg-gradient-to-br from-brand-50 to-accent-50 text-5xl">
          {icon}
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-2 flex items-center gap-2">
          <span className="text-2xl">{icon}</span>
          <h3 className="text-lg font-semibold text-slate-900">{name}</h3>
        </div>
        {shortDescription && (
          <p className="text-sm leading-relaxed text-slate-600">{shortDescription}</p>
        )}
        <span className="mt-4 text-sm font-medium text-brand-600 group-hover:underline">
          Learn more →
        </span>
      </div>
    </Link>
  )
}