'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { ArrowRight, Truck, Shield, RotateCcw, Flame, Home, Star } from 'lucide-react'
import CollectionSection from '@/components/marketing/collection-section'
import { useCollections } from '@/hooks/use-collections'
import { trackMetaEvent } from '@/lib/meta-pixel'

const HERO_IMAGE = 'https://ahjviugsxpwzpkyzgrhi.supabase.co/storage/v1/object/public/product-user-files/c734560f-b065-4658-865e-31b19370045c%2Fai-banner-1782679742572-0-01KW7ZWAD3CNSKR2EB0FZ2GB95.webp'
const ATELIER_IMAGE = 'https://ahjviugsxpwzpkyzgrhi.supabase.co/storage/v1/object/public/product-user-files/c734560f-b065-4658-865e-31b19370045c%2Fai-lifestyle-1782679727061-0-01KW7ZVV7XBMGZPBKKK5B2W6XH.webp'
const STORY_IMAGE = 'https://ahjviugsxpwzpkyzgrhi.supabase.co/storage/v1/object/public/product-user-files/c734560f-b065-4658-865e-31b19370045c%2Fai-lifestyle-1782679763474-0-01KW7ZWYQMST0KBQQWRJRVPFX2.webp'

const housePillars = [
  'Private-residence inspired scents',
  'Sculpted packaging and elevated gifting',
  'A singular €60 signature price point',
]

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
      <section className="relative overflow-hidden border-b border-border/70 bg-[#f6f0e8]">
        <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,rgba(201,149,108,0.18),transparent_70%)]" />
        <div className="container-custom relative grid min-h-[92vh] items-stretch gap-8 py-8 lg:grid-cols-[1.05fr_0.95fr] lg:py-0">
          <div className="flex flex-col justify-center space-y-8 py-10 lg:py-24 lg:pr-16 animate-fade-in-up">
            <div className="inline-flex w-fit items-center gap-2 border border-foreground/10 bg-background/75 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] backdrop-blur-sm">
              <Star className="h-3.5 w-3.5 fill-foreground text-foreground" />
              Maison Privé Fragrance House
            </div>

            <div className="space-y-5">
              <h1
                className="font-heading font-semibold text-balance text-foreground"
                style={{ fontSize: 'clamp(3.5rem, 7vw, 6.4rem)', lineHeight: '0.94', letterSpacing: '-0.05em' }}
              >
                Scent your home
                <br />
                like a private estate.
              </h1>

              <p className="max-w-xl text-lg leading-relaxed text-foreground/68 sm:text-[19px]">
                Maison Privé brings together candles, diffusers, and interior perfumes with the restraint,
                polish, and presence of a modern luxury house. Every piece is designed to feel giftable,
                collectible, and quietly unforgettable.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-1">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-foreground px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-background transition-all duration-500 hover:-translate-y-0.5 hover:opacity-90"
              >
                Enter the House
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/collections/maison-prive"
                className="inline-flex items-center gap-2 border border-foreground/15 bg-background/50 px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-foreground transition-all duration-500 hover:-translate-y-0.5 hover:border-foreground"
              >
                Shop the Collection
              </Link>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {housePillars.map((pillar) => (
                <div key={pillar} className="luxury-panel rounded-[1.75rem] border border-white/50 px-5 py-4 text-sm leading-relaxed text-foreground/70 animate-reveal-scale">
                  {pillar}
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex items-center py-6 lg:py-12 animate-reveal-scale">
            <div className="spotlight-card luxury-panel relative min-h-[36rem] w-full overflow-hidden rounded-[2rem] border border-white/60 p-3 shadow-[0_30px_90px_rgba(38,24,17,0.14)]">
              <div className="relative h-full min-h-[32rem] overflow-hidden rounded-[1.5rem]">
                <Image
                  src={HERO_IMAGE}
                  alt="Maison Privé luxury fragrance collection"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[1800ms] hover:scale-[1.03]"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-white/10" />
              </div>

              <div className="absolute left-6 top-6 max-w-[14rem] rounded-[1.5rem] border border-white/50 bg-background/82 px-5 py-4 shadow-xl backdrop-blur-md animate-drift">
                <p className="text-[11px] uppercase tracking-[0.28em] text-foreground/45">House Note</p>
                <p className="mt-2 font-heading text-2xl font-semibold text-foreground">Velvet woods, soft amber, quiet citrus.</p>
              </div>

              <div className="absolute bottom-6 right-6 rounded-[1.5rem] border border-white/40 bg-[#221c17]/82 px-5 py-4 text-white shadow-2xl backdrop-blur-md">
                <p className="text-[11px] uppercase tracking-[0.28em] text-white/60">Signature Price</p>
                <p className="mt-2 font-heading text-4xl font-semibold">€60</p>
                <p className="mt-1 text-sm text-white/70">Across the core collection</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="container-custom">
          <div className="mb-12 flex flex-col gap-4 text-center animate-fade-in-up">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">The Maison Privé World</p>
            <h2 className="text-h2 font-heading font-semibold sm:text-[3.4rem]">A premium store with a point of view</h2>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              The entire storefront now speaks in a sharper, more editorial tone: richer typography,
              softer movement, and a cleaner luxury story from first glance to checkout.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Link href="/collections/maison-prive" className="spotlight-card group relative block aspect-[4/3] overflow-hidden rounded-[2rem] bg-muted">
              <Image
                src={ATELIER_IMAGE}
                alt="Maison Privé atelier"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-[1600ms] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8 text-white">
                <div className="mb-3 flex items-center gap-2 text-white/80">
                  <Flame className="h-4 w-4" />
                  <p className="text-xs uppercase tracking-[0.24em]">The Signature Collection</p>
                </div>
                <h3 className="max-w-md text-[2rem] font-heading font-semibold leading-tight">Candles, diffusers, and room perfumes with hotel-suite energy.</h3>
                <span className="mt-4 inline-flex items-center gap-2 border-b border-white/50 pb-0.5 text-sm font-medium text-white transition-colors group-hover:border-white">
                  Explore the edit <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>

            <div className="luxury-panel rounded-[2rem] border border-border/60 p-8 sm:p-10">
              <div className="mb-10 max-w-md">
                <div className="mb-3 flex items-center gap-2 text-foreground/70">
                  <Home className="h-4 w-4" />
                  <p className="text-xs uppercase tracking-[0.24em]">House Standards</p>
                </div>
                <h3 className="text-[2rem] font-heading font-semibold leading-tight text-foreground">Built to feel established, collected, and distinctly expensive.</h3>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <p className="font-heading text-4xl font-semibold text-foreground">10</p>
                  <p className="mt-1 text-sm uppercase tracking-[0.18em] text-muted-foreground">Luxury pieces</p>
                </div>
                <div>
                  <p className="font-heading text-4xl font-semibold text-foreground">€60</p>
                  <p className="mt-1 text-sm uppercase tracking-[0.18em] text-muted-foreground">Single price point</p>
                </div>
                <div>
                  <p className="font-heading text-4xl font-semibold text-foreground">Editorial</p>
                  <p className="mt-1 text-sm uppercase tracking-[0.18em] text-muted-foreground">Sharper copy</p>
                </div>
                <div>
                  <p className="font-heading text-4xl font-semibold text-foreground">Fluid</p>
                  <p className="mt-1 text-sm uppercase tracking-[0.18em] text-muted-foreground">Softer movement</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {isLoading ? (
        <section className="py-section">
          <div className="container-custom">
            <div className="space-y-4 text-center animate-pulse">
              <div className="mx-auto h-3 w-20 rounded bg-muted" />
              <div className="mx-auto h-8 w-64 rounded bg-muted" />
            </div>
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="aspect-[3/4] animate-pulse rounded-[1.5rem] bg-muted" />
              ))}
            </div>
          </div>
        </section>
      ) : collections && collections.length > 0 ? (
        <>
          {collections.map((collection: { id: string; handle: string; title: string; metadata?: Record<string, unknown> }, index: number) => (
            <CollectionSection key={collection.id} collection={collection} alternate={index % 2 === 1} />
          ))}
        </>
      ) : null}

      <section className="section-texture py-section">
        <div className="container-custom">
          <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
            <div className="spotlight-card relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/60 shadow-[0_28px_80px_rgba(38,24,17,0.12)]">
              <Image
                src={STORY_IMAGE}
                alt="Maison Privé interior story"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-[1800ms] hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
            </div>
            <div className="space-y-6 lg:max-w-xl animate-fade-in-up">
              <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">Brand language</p>
              <h2 className="text-h2 font-heading font-semibold leading-[0.98] sm:text-[3.4rem]">
                More character.
                <br />
                More distinction.
                <br />
                More desire.
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                The new voice is quieter and more assured. Headlines read like a fashion house, body copy feels more curated,
                and the movement across the page adds polish without taking attention away from the products.
              </p>
              <div className="grid grid-cols-2 gap-6 py-2">
                <div>
                  <p className="font-heading text-3xl font-semibold">10</p>
                  <p className="mt-0.5 text-sm uppercase tracking-[0.18em] text-muted-foreground">Luxury SKUs</p>
                </div>
                <div>
                  <p className="font-heading text-3xl font-semibold">1</p>
                  <p className="mt-0.5 text-sm uppercase tracking-[0.18em] text-muted-foreground">House collection</p>
                </div>
                <div>
                  <p className="font-heading text-3xl font-semibold">€60</p>
                  <p className="mt-0.5 text-sm uppercase tracking-[0.18em] text-muted-foreground">Premium line</p>
                </div>
                <div>
                  <p className="font-heading text-3xl font-semibold">Refined</p>
                  <p className="mt-0.5 text-sm uppercase tracking-[0.18em] text-muted-foreground">Motion system</p>
                </div>
              </div>
              <Link href="/about" className="link-underline inline-flex items-center gap-2 pb-0.5 text-sm font-semibold uppercase tracking-[0.18em]">
                Read the house story
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y bg-background py-section-sm">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex items-center justify-center gap-4 md:justify-start">
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-accent/10">
                <Truck className="h-5 w-5 text-accent" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.14em]">Complimentary Shipping</p>
                <p className="text-xs text-muted-foreground">On orders over €120</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4">
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-accent/10">
                <RotateCcw className="h-5 w-5 text-accent" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.14em]">Thoughtful Returns</p>
                <p className="text-xs text-muted-foreground">30-day return window</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4 md:justify-end">
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-accent/10">
                <Shield className="h-5 w-5 text-accent" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.14em]">Secure Checkout</p>
                <p className="text-xs text-muted-foreground">Protected payment flow</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-foreground py-section text-background">
        <div className="container-custom max-w-2xl text-center animate-fade-in-up">
          <Home className="mx-auto mb-5 h-8 w-8 opacity-60" strokeWidth={1.2} />
          <p className="text-xs uppercase tracking-[0.28em] text-background/60">Private invitations</p>
          <h2 className="mt-3 text-h2 font-heading font-semibold sm:text-[3.2rem]">Join the Maison Privé list</h2>
          <p className="mt-3 text-sm leading-relaxed text-background/70 sm:text-base">
            Get first access to launches, gifting edits, and limited fragrance drops reserved for the inner circle.
          </p>
          {submitted ? (
            <p className="mt-8 border border-background/20 px-6 py-4 text-sm font-medium text-background/80">
              You&apos;re on the list.
            </p>
          ) : (
            <form className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row" onSubmit={handleNewsletterSubmit}>
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 border border-background/20 bg-white/5 px-5 py-4 text-sm text-background placeholder:text-background/40 focus:border-background focus:outline-none transition-colors"
              />
              <button
                type="submit"
                className="whitespace-nowrap bg-background px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-foreground transition-all duration-500 hover:-translate-y-0.5 hover:opacity-90"
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
