'use client'

import Link from 'next/link'
import { useState } from 'react'
import type { Settings } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface HeaderProps {
  settings: Settings | null
}

export default function Header({ settings }: HeaderProps) {
  const [open, setOpen] = useState(false)
  const companyName = getMetafieldValue(settings?.metadata?.company_name) || 'Therapy Ally'
  const ctaText = getMetafieldValue(settings?.metadata?.primary_cta_text) || 'Get Started'
  const ctaLink = getMetafieldValue(settings?.metadata?.primary_cta_link) || '#'

  const navLinks = [
    { href: '/', label: 'Clinician Console' },
    { href: '/features', label: 'Features' },
    { href: 'https://clinician.therapyally.ai/about-app', label: 'Companion App' },
  ]

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-100 bg-white/95 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600">
              <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <span className="text-base font-bold" style={{ color: '#0f1c33' }}>{companyName}™</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-brand-600"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={ctaLink}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-brand-600"
            >
              Sign In
            </a>
            <a
              href={ctaLink}
              className="rounded-md bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
            >
              {ctaText}
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="inline-flex items-center justify-center rounded-md p-2 text-slate-600 md:hidden"
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div className="border-t border-slate-100 py-4 md:hidden">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-slate-700 hover:text-brand-600"
                >
                  {link.label}
                </Link>
              ))}
              <a href={ctaLink} className="text-sm font-medium text-slate-600">Sign In</a>
              <a
                href={ctaLink}
                className="mt-2 rounded-md bg-brand-600 px-4 py-2 text-center text-sm font-semibold text-white"
              >
                {ctaText}
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
