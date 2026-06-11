import TestimonialCard from '@/components/TestimonialCard'
import { getTestimonials } from '@/lib/cosmic'

export const metadata = {
  title: 'Testimonials | TherapyAlly Clinician',
}

export default async function TestimonialsPage() {
  const testimonials = await getTestimonials()

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
          What Clinicians Say
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          Real stories from mental health professionals using our platform.
        </p>
      </div>

      {testimonials.length === 0 ? (
        <p className="mt-16 text-center text-slate-500">No testimonials available yet.</p>
      ) : (
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      )}
    </div>
  )
}