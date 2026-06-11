import FeatureCard from '@/components/FeatureCard'
import { getFeatures } from '@/lib/cosmic'

export const metadata = {
  title: 'Features | TherapyAlly Clinician',
}

export default async function FeaturesPage() {
  const features = await getFeatures()

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
          Features
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          Discover all the tools that power a modern clinical practice.
        </p>
      </div>

      {features.length === 0 ? (
        <p className="mt-16 text-center text-slate-500">No features available yet.</p>
      ) : (
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      )}
    </div>
  )
}