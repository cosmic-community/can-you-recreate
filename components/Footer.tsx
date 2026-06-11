import Link from 'next/link'
import type { Settings } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface FooterProps {
  settings: Settings | null
}

export default function Footer({ settings }: FooterProps) {
  const companyName = getMetafieldValue(settings?.metadata?.company_name) || 'Therapy Ally'
  const footerText =
    getMetafieldValue(settings?.metadata?.footer_text) ||
    `© ${new Date().getFullYear()} Therapy Ally™. Built for mental health professionals.`

  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-brand-600">
                <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <span className="text-sm font-bold" style={{ color: '#0f1c33' }}>{companyName}™</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              Structured AI support for modern therapy practices.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">Platform</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-500">
              <li><Link href="/" className="hover:text-brand-600">Clinician Console</Link></li>
              <li><Link href="/features" className="hover:text-brand-600">Features</Link></li>
              <li><Link href="/pricing" className="hover:text-brand-600">Pricing</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">Legal</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-500">
              <li><a href="https://clinician.therapyally.ai/privacy" className="hover:text-brand-600">Privacy Policy</a></li>
              <li><a href="https://clinician.therapyally.ai/terms" className="hover:text-brand-600">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-100 pt-6">
          <p className="text-xs text-slate-400">{footerText}</p>
        </div>
      </div>
    </footer>
  )
}
