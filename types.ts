// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, unknown>;
  type: string;
  created_at: string;
  modified_at: string;
}

// Image / file metafield shape
export interface CosmicImage {
  url: string;
  imgix_url: string;
}

// Settings
export interface Settings extends CosmicObject {
  type: 'settings';
  metadata: {
    company_name?: string;
    tagline?: string;
    hero_description?: string;
    logo?: CosmicImage;
    primary_cta_text?: string;
    primary_cta_link?: string;
    contact_email?: string;
    footer_text?: string;
  };
}

// Features
export interface Feature extends CosmicObject {
  type: 'features';
  metadata: {
    name?: string;
    icon?: string;
    short_description?: string;
    details?: string;
    image?: CosmicImage;
  };
}

// Testimonials
export interface Testimonial extends CosmicObject {
  type: 'testimonials';
  metadata: {
    quote?: string;
    clinician_name?: string;
    role?: string;
    practice_name?: string;
    headshot?: CosmicImage;
  };
}

// Pricing Plans
export interface PricingPlan extends CosmicObject {
  type: 'pricing-plans';
  metadata: {
    plan_name?: string;
    price?: string;
    billing_period?: string;
    description?: string;
    included_features?: string;
    cta_label?: string;
    highlighted?: boolean;
  };
}

// API response type
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip: number;
}

// Type guards
export function isFeature(obj: CosmicObject): obj is Feature {
  return obj.type === 'features';
}

export function isTestimonial(obj: CosmicObject): obj is Testimonial {
  return obj.type === 'testimonials';
}

export function isPricingPlan(obj: CosmicObject): obj is PricingPlan {
  return obj.type === 'pricing-plans';
}