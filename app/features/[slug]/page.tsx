// app/features/[slug]/page.tsx
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getFeature, getFeatures } from '@/lib/cosmic'
import { getMetafieldValue } from '@/lib/cosmic'

export async function generateStaticParams() {
  const features = await getFeatures()
  return features.map((feature) => ({ slug: feature.slug }))
}

export default async function FeatureDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const feature = await getFeature(slug)

  if (!feature) {
    notFound()
  }

  const name = getMetafieldValue(feature.metadata?.name) || feature.title
  const icon = getMetafieldValue(feature.metadata?.icon) || '✨'
  const shortDescription = getMetafieldValue(feature.metadata?.short_description)
  const details = getMetafieldValue(feature.metadata?.details)
  const image = feature.metadata?.image

  return (
    <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <Link href="/features" className="text-sm font-medium text-brand-600 hover:underline">
        ← Back to Features
      </Link>

      <header className="mt-8">
        <div className="mb-4 text-5xl">{icon}</div>
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">{name}</h1>
        {shortDescription && (
          <p className="mt-4 text-lg text-slate-600">{shortDescription}</p>
        )}
      </header>

      {image?.imgix_url && (
        <div className="mt-10 overflow-hidden rounded-2xl">
          <img
            src={`${image.imgix_url}?w=1600&h=900&fit=crop&auto=format,compress`}
            alt={name}
            width={800}
            height={450}
            className="w-full object-cover"
          />
        </div>
      )}

      {details && (
        <div
          className="prose prose-slate mt-10 max-w-none"
          dangerouslySetInnerHTML={{ __html: details }}
        />
      )}
    </article>
  )
}