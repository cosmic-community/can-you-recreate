# TherapyAlly Clinician

![App Preview](https://imgix.cosmicjs.com/0b606d60-65b9-11f1-8e52-17b2565830aa-autopilot-photo-1551288049-bebda4e38f71-1781198085756.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A beautiful, modern, fully responsive marketing website for an AI-powered clinician practice platform. Recreated in [Cosmic](https://www.cosmicjs.com) with content fully managed through the CMS — including features, testimonials, pricing plans, and global settings.

## Features

- 🏠 **Dynamic Homepage** with hero, features grid, testimonials, and pricing
- 🧩 **Features Page** showcasing all platform capabilities with detail pages
- 💬 **Testimonials Page** with quotes from real clinicians
- 💲 **Pricing Page** with highlighted plan support
- ⚙️ **Global Settings** for branding, CTAs, and footer
- 📱 Fully responsive, accessible, mobile-first design
- ⚡ Server Components for fast, SEO-friendly rendering
- 🎨 Modern UI built with Tailwind CSS and the Inter font

## Clone this Project

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=6a2aecb5c3293c121782ac9a&clone_repository=6a2aedb4c3293c121782ace5)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for: Can you recreate this website in cosmic by scraping the html and then bringing it into your cms https://clinician.therapyally.ai/"

### Code Generation Prompt

> Build a Next.js application for a website called "Can you recreate". The content is managed in Cosmic CMS with the following object types: settings, features, testimonials, pricing-plans. Create a beautiful, modern, responsive design with a homepage and pages for each content type.

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- [Next.js 16](https://nextjs.org) (App Router)
- [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Cosmic](https://www.cosmicjs.com/docs)

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) or Node.js 18+
- A [Cosmic](https://www.cosmicjs.com) account with the bucket containing your content

### Installation

```bash
bun install
bun run dev
```

Set the following environment variables (provided automatically when deployed via Cosmic):

```
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

## Cosmic SDK Examples

```typescript
import { cosmic } from '@/lib/cosmic'

// Fetch all features
const { objects: features } = await cosmic.objects
  .find({ type: 'features' })
  .props(['id', 'slug', 'title', 'metadata'])
  .depth(1)

// Fetch a single pricing plan
const { object: plan } = await cosmic.objects
  .findOne({ type: 'pricing-plans', slug })
  .depth(1)
```

## Cosmic CMS Integration

This app reads from four object types: `settings`, `features`, `testimonials`, and `pricing-plans`. All data fetching happens server-side using the [Cosmic SDK](https://www.cosmicjs.com/docs). Learn more in the [Cosmic docs](https://www.cosmicjs.com/docs).

## Deployment Options

- **Vercel** — Connect your repo and add the environment variables
- **Netlify** — Same setup with environment variables in the dashboard

<!-- README_END -->