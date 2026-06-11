import type { Testimonial } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface TestimonialCardProps {
  testimonial: Testimonial
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  if (!testimonial) return null

  const quote = getMetafieldValue(testimonial.metadata?.quote)
  const name = getMetafieldValue(testimonial.metadata?.clinician_name) || testimonial.title
  const role = getMetafieldValue(testimonial.metadata?.role)
  const practice = getMetafieldValue(testimonial.metadata?.practice_name)
  const headshot = testimonial.metadata?.headshot

  // Initials from name
  const initials = name
    .split(' ')
    .map((n: string) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  return (
    <figure className="flex h-full flex-col rounded-xl border border-slate-100 bg-white p-8 shadow-sm">
      <blockquote className="flex-1 text-base leading-relaxed text-slate-600">
        {quote ? `"${quote}"` : ''}
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-6">
        {headshot?.imgix_url ? (
          <img
            src={`${headshot.imgix_url}?w=80&h=80&fit=crop&auto=format,compress`}
            alt={name}
            width={40}
            height={40}
            className="h-10 w-10 rounded-full object-cover"
          />
        ) : (
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">
            {initials}
          </div>
        )}
        <div>
          <div className="text-sm font-semibold" style={{ color: '#0f1c33' }}>{name}</div>
          <div className="text-xs text-slate-400">
            {[role, practice].filter(Boolean).join(', ')}
          </div>
        </div>
      </figcaption>
    </figure>
  )
}
