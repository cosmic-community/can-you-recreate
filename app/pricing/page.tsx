import PricingCard from '@/components/PricingCard'
import { getPricingPlans } from '@/lib/cosmic'

export const metadata = {
  title: 'Pricing | TherapyAlly Clinician',
}

export default async function PricingPage() {
  const plans = await getPricingPlans()

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
          Pricing
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          Transparent plans built for practices of every size.
        </p>
      </div>

      {plans.length === 0 ? (
        <p className="mt-16 text-center text-slate-500">No pricing plans available yet.</p>
      ) : (
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>
      )}
    </div>
  )
}