import Link from 'next/link'
import type { Settings } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface FooterProps {
  settings: Settings | null
}

export default function Footer({ settings }: FooterProps) {
  const companyName = getMetafieldValue(settings?.metadata?.company_name) || 'TherapyAlly'
  const footerText =
    getMetafieldValue(settings?.metadata?.footer_text) ||
    `© ${new Date().getFullYear()} ${companyName}. All rights reserved.`
  const contactEmail = getMetafieldValue(settings?.metadata?.contact_email)

  return (
    <footer className="border-t border-slate-100 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🧠</span>
              <span className="text-lg font-bold text-slate-900">{companyName}</span>
            </div>
            {settings?.metadata?.tagline && (
              <p className="mt-3 text-sm text-slate-500">
                {getMetafieldValue(settings.metadata.tagline)}
              </p>
            )}
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900">Explore</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-500">
              <li><Link href="/features" className="hover:text-brand-600">Features</Link></li>
              <li><Link href="/testimonials" className="hover:text-brand-600">Testimonials</Link></li>
              <li><Link href="/pricing" className="hover:text-brand-600">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900">Contact</h3>
            {contactEmail && (
              <a
                href={`mailto:${contactEmail}`}
                className="mt-4 inline-block text-sm text-brand-600 hover:underline"
              >
                {contactEmail}
              </a>
            )}
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6">
          <p className="text-sm text-slate-400">{footerText}</p>
        </div>
      </div>
    </footer>
  )
}