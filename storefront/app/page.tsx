'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { ArrowRight, Truck, Shield, RotateCcw, Gem, Sparkles, Star } from 'lucide-react'
import CollectionSection from '@/components/marketing/collection-section'
import { useCollections } from '@/hooks/use-collections'
import { trackMetaEvent } from '@/lib/meta-pixel'

const HERO_IMAGE = 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&q=80'
const LIFESTYLE_IMAGE = 'https://images.unsplash.com/photo-1603561596112-0a132b757442?w=1200&q=80'
const PHONE_LIFESTYLE = 'https://images.unsplash.com/photo-1592492152545-9695d3f473f4?w=1200&q=80'

export default function HomePage() {
  const { data: collections, isLoading } = useCollections()
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newsletterEmail.trim()) return
    trackMetaEvent('Lead', {
      content_name: 'newsletter_signup',
      status: 'submitted',
    })
    setSubmitted(true)
  }

  return (
    <>
      {/* ─── Hero ────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#faf7f4]">
        <div className="container-custom grid lg:grid-cols-2 gap-0 min-h-[85vh] items-stretch">
          {/* Text */}
          <div className="flex flex-col justify-center py-16 lg:py-24 pr-0 lg:pr-16 space-y-7 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full badge-rose w-fit text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="h-3.5 w-3.5" />
              New 2025 Collection
            </div>

            <h1 className="font-heading font-semibold text-balance" style={{ fontSize: 'clamp(2.6rem, 5vw, 4.5rem)', lineHeight: '1.08', letterSpacing: '-0.02em' }}>
              Wear What
              <br />
              <span className="rose-gold-text">Moves You.</span>
            </h1>

            <p className="text-[17px] text-muted-foreground max-w-md leading-relaxed">
              Handcrafted jewelry and premium phone cases designed for the woman who wants both beauty and boldness — every single day.
            </p>

            <div className="flex flex-wrap gap-3 pt-1">
              <Link
                href="/products"
                className="btn-brand-primary inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold uppercase tracking-wide rounded-none hover:opacity-90 transition-opacity"
              >
                Shop Collection
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/collections/jewelry"
                className="inline-flex items-center gap-2 border border-foreground/25 px-8 py-4 text-sm font-semibold uppercase tracking-wide hover:border-foreground transition-colors"
              >
                View Jewelry
              </Link>
            </div>

            {/* Social proof strip */}
            <div className="flex items-center gap-4 pt-2 border-t border-border/50">
              <div className="flex -space-x-2">
                {['bg-rose-200', 'bg-amber-200', 'bg-stone-200', 'bg-pink-200'].map((c, i) => (
                  <div key={i} className={`h-8 w-8 rounded-full ${c} border-2 border-background`} />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-0.5 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-muted-foreground">Loved by <strong className="text-foreground">2,400+</strong> customers</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative min-h-[55vw] lg:min-h-0 overflow-hidden animate-fade-in">
            <Image
              src={HERO_IMAGE}
              alt="Gold jewelry hero"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
            {/* Floating badge */}
            <div className="absolute bottom-8 left-8 bg-background/95 backdrop-blur-sm px-5 py-3.5 shadow-xl">
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-0.5">Bestseller</p>
              <p className="text-sm font-semibold">Gold Celestial Ring</p>
              <p className="text-sm font-bold text-accent mt-0.5">$38.00</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Category Tiles ──────────────────────────────────────── */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">Browse by Category</p>
            <h2 className="text-h2 font-heading font-semibold">Shop Your Style</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Jewelry tile */}
            <Link href="/collections/jewelry" className="group relative aspect-[4/3] overflow-hidden bg-muted rounded-sm block">
              <Image
                src={LIFESTYLE_IMAGE}
                alt="Jewelry Collection"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <div className="flex items-center gap-2 mb-2">
                  <Gem className="h-4 w-4 text-white/80" />
                  <p className="text-xs uppercase tracking-widest text-white/80">Collection</p>
                </div>
                <h3 className="text-2xl font-heading font-semibold text-white mb-3">Jewelry</h3>
                <span className="inline-flex items-center gap-2 text-white text-sm font-medium border-b border-white/50 pb-0.5 group-hover:border-white transition-colors">
                  Shop Now <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>

            {/* Phone Cases tile */}
            <Link href="/collections/phone-cases" className="group relative aspect-[4/3] overflow-hidden bg-muted rounded-sm block">
              <Image
                src={PHONE_LIFESTYLE}
                alt="Phone Cases Collection"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="h-4 w-4 text-white/80" />
                  <p className="text-xs uppercase tracking-widest text-white/80">Collection</p>
                </div>
                <h3 className="text-2xl font-heading font-semibold text-white mb-3">Phone Cases</h3>
                <span className="inline-flex items-center gap-2 text-white text-sm font-medium border-b border-white/50 pb-0.5 group-hover:border-white transition-colors">
                  Shop Now <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Collections from store ──────────────────────────────── */}
      {isLoading ? (
        <section className="py-section">
          <div className="container-custom">
            <div className="animate-pulse space-y-4 text-center">
              <div className="h-3 w-20 bg-muted rounded mx-auto" />
              <div className="h-8 w-64 bg-muted rounded mx-auto" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-[3/4] bg-muted rounded animate-pulse" />
              ))}
            </div>
          </div>
        </section>
      ) : collections && collections.length > 0 ? (
        <>
          {collections.map((collection: { id: string; handle: string; title: string; metadata?: Record<string, unknown> }, index: number) => (
            <CollectionSection
              key={collection.id}
              collection={collection}
              alternate={index % 2 === 1}
            />
          ))}
        </>
      ) : null}

      {/* ─── Brand Story / Lifestyle ─────────────────────────────── */}
      <section className="py-section section-texture">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="aspect-[4/5] bg-muted rounded-sm overflow-hidden relative">
              <Image
                src="https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=1200&q=80"
                alt="Handcrafted jewelry lifestyle"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="space-y-6 lg:max-w-md">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Our Story</p>
              <h2 className="text-h2 font-heading font-semibold leading-tight">
                Crafted with
                <br />
                <span className="rose-gold-text">intention.</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Every piece in the Lumière collection is thoughtfully designed to complement the life you actually live — not just the one you Instagram. We source premium materials, skip the markup, and bring you jewelry and cases that feel as good as they look.
              </p>
              <div className="grid grid-cols-2 gap-6 py-2">
                <div>
                  <p className="text-2xl font-heading font-bold">2,400+</p>
                  <p className="text-sm text-muted-foreground mt-0.5">Happy Customers</p>
                </div>
                <div>
                  <p className="text-2xl font-heading font-bold">100%</p>
                  <p className="text-sm text-muted-foreground mt-0.5">Hypoallergenic</p>
                </div>
                <div>
                  <p className="text-2xl font-heading font-bold">30 Days</p>
                  <p className="text-sm text-muted-foreground mt-0.5">Free Returns</p>
                </div>
                <div>
                  <p className="text-2xl font-heading font-bold">Free</p>
                  <p className="text-sm text-muted-foreground mt-0.5">Shipping $75+</p>
                </div>
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide link-underline pb-0.5"
              >
                Our Story
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Trust Bar ───────────────────────────────────────────── */}
      <section className="py-section-sm border-y bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <div className="h-11 w-11 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Truck className="h-5 w-5 text-accent" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-sm font-semibold">Free Shipping</p>
                <p className="text-xs text-muted-foreground">On all orders over $75</p>
              </div>
            </div>
            <div className="flex items-center gap-4 justify-center">
              <div className="h-11 w-11 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                <RotateCcw className="h-5 w-5 text-accent" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-sm font-semibold">Easy Returns</p>
                <p className="text-xs text-muted-foreground">30-day return policy</p>
              </div>
            </div>
            <div className="flex items-center gap-4 justify-center md:justify-end">
              <div className="h-11 w-11 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Shield className="h-5 w-5 text-accent" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-sm font-semibold">Secure Checkout</p>
                <p className="text-xs text-muted-foreground">256-bit SSL encryption</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Newsletter ──────────────────────────────────────────── */}
      <section className="py-section bg-foreground text-background">
        <div className="container-custom max-w-xl text-center">
          <Gem className="h-8 w-8 mx-auto mb-5 opacity-60" strokeWidth={1.2} />
          <h2 className="text-h2 font-heading font-semibold">Join the Lumière Circle</h2>
          <p className="mt-3 text-background/70 text-sm leading-relaxed">
            New arrivals, exclusive drops, and early access — delivered to your inbox. No spam, ever.
          </p>
          {submitted ? (
            <p className="mt-8 text-sm font-medium text-background/80 border border-background/20 py-4 px-6">
              You&apos;re in. Welcome to the circle.
            </p>
          ) : (
            <form className="mt-8 flex gap-2" onSubmit={handleNewsletterSubmit}>
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 border-b border-background/30 bg-transparent px-1 py-3 text-sm placeholder:text-background/40 text-background focus:border-background focus:outline-none transition-colors"
              />
              <button
                type="submit"
                className="bg-background text-foreground px-6 py-3 text-sm font-semibold uppercase tracking-wide hover:opacity-90 transition-opacity whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  )
}
