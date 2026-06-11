import { createBucketClient } from '@cosmicjs/sdk'
import type { Settings, Feature, Testimonial, PricingPlan } from '@/types'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
})

// Simple error helper for Cosmic SDK
function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error
}

// Safely render metafield values that may be strings or {key,value} objects
export function getMetafieldValue(field: unknown): string {
  if (field === null || field === undefined) return ''
  if (typeof field === 'string') return field
  if (typeof field === 'number' || typeof field === 'boolean') return String(field)
  if (typeof field === 'object' && field !== null && 'value' in field) {
    return String((field as { value: unknown }).value)
  }
  if (typeof field === 'object' && field !== null && 'key' in field) {
    return String((field as { key: unknown }).key)
  }
  return ''
}

export async function getSettings(): Promise<Settings | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'settings' })
      .props(['id', 'slug', 'title', 'metadata'])
      .depth(1)
    return response.object as Settings
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    throw new Error('Failed to fetch settings')
  }
}

export async function getFeatures(): Promise<Feature[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'features' })
      .props(['id', 'slug', 'title', 'metadata'])
      .depth(1)
    return response.objects as Feature[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch features')
  }
}

export async function getFeature(slug: string): Promise<Feature | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'features', slug })
      .props(['id', 'slug', 'title', 'metadata'])
      .depth(1)
    return response.object as Feature
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    throw new Error('Failed to fetch feature')
  }
}

export async function getTestimonials(): Promise<Testimonial[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'testimonials' })
      .props(['id', 'slug', 'title', 'metadata'])
      .depth(1)
    return response.objects as Testimonial[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch testimonials')
  }
}

export async function getPricingPlans(): Promise<PricingPlan[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'pricing-plans' })
      .props(['id', 'slug', 'title', 'metadata'])
      .depth(1)
    return response.objects as PricingPlan[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch pricing plans')
  }
}