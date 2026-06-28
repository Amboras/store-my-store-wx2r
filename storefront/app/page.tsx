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
      <section className="relative overflow-hidden bg-[#f5f1eb]">
        <div className="container-custom grid min-h-[88vh] items-stretch gap-0 lg:grid-cols-2">
          <div className="flex flex-col justify-center space-y-7 py-16 lg:py-24 lg:pr-16 animate-fade-in-up">
            <div className="inline-flex w-fit items-center gap-2 border border-foreground/10 bg-background/70 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] backdrop-blur-sm">
              <Star className="h-3.5 w-3.5 fill-foreground text-foreground" />
              Maison Privé Collection
            </div>

            <h1
              className="font-heading font-semibold text-balance text-foreground"
              style={{ fontSize: 'clamp(2.9rem, 5vw, 5rem)', lineHeight: '1.02', letterSpacing: '-0.03em' }}
            >
              Quiet luxury,
              <br />
              bottled for home.
            </h1>

            <p className="max-w-xl text-[17px] leading-relaxed text-foreground/70">
              A premium fragrance house built around candles, diffusers, and interior perfumes that make every room feel like a private suite.
              Each signature piece is positioned as a €60 indulgence.
            </p>

            <div className="flex flex-wrap gap-3 pt-1">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-foreground px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-background transition-opacity hover:opacity-90"
              >
                Shop the House
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/collections/maison-prive"
                className="inline-flex items-center gap-2 border border-foreground/20 px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-foreground transition-colors hover:border-foreground"
              >
                View Collection
              </Link>
            </div>

            <div className="flex items-center gap-4 border-t border-foreground/10 pt-3">
              <div className="flex -space-x-2">
                {['bg-stone-200', 'bg-stone-300', 'bg-neutral-300', 'bg-zinc-300'].map((color, index) => (
                  <div key={index} className={`h-8 w-8 rounded-full border-2 border-[#f5f1eb] ${color}`} />
                ))}
              </div>
              <div>
                <div className="mb-0.5 flex items-center gap-0.5">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} className="h-3 w-3 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-foreground/60">
                  Designed to feel like a category-defining luxury label from day one.
                </p>
              </div>
            </div>
          </div>

          <div className="relative min-h-[58vw] overflow-hidden lg:min-h-0 animate-fade-in">
            <Image
              src={HERO_IMAGE}
              alt="Maison Privé luxury fragrance collection"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
            <div className="absolute bottom-8 left-8 bg-background/92 px-5 py-4 shadow-2xl backdrop-blur-sm">
              <p className="mb-1 text-[11px] uppercase tracking-[0.24em] text-foreground/50">Signature Price Point</p>
              <p className="text-sm font-semibold text-foreground">All core fragrances</p>
              <p className="mt-1 text-2xl font-heading font-semibold text-foreground">€60</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="container-custom">
          <div className="mb-10 text-center">
            <p className="mb-2 text-xs uppercase tracking-[0.24em] text-muted-foreground">The Collection</p>
            <h2 className="text-h2 font-heading font-semibold">Built like a luxury house</h2>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <Link href="/collections/maison-prive" className="group relative block aspect-[4/3] overflow-hidden bg-muted">
              <Image
                src={ATELIER_IMAGE}
                alt="Maison Privé atelier"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <div className="mb-2 flex items-center gap-2">
                  <Flame className="h-4 w-4 text-white/80" />
                  <p className="text-xs uppercase tracking-widest text-white/80">Signature scents</p>
                </div>
                <h3 className="mb-3 text-2xl font-heading font-semibold text-white">Candles, diffusers, and sprays</h3>
                <span className="inline-flex items-center gap-2 border-b border-white/50 pb-0.5 text-sm font-medium text-white transition-colors group-hover:border-white">
                  Explore the range <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>

            <Link href="/products" className="group relative block aspect-[4/3] overflow-hidden bg-[#1a1714]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#4b4238,transparent_55%)]" />
              <div className="relative flex h-full flex-col justify-between p-8 text-white">
                <div>
                  <div className="mb-2 flex items-center gap-2">
                    <Home className="h-4 w-4 text-white/80" />
                    <p className="text-xs uppercase tracking-widest text-white/80">Premium positioning</p>
                  </div>
                  <h3 className="max-w-sm text-2xl font-heading font-semibold">A store shaped for high-ticket gifting and elevated interiors.</h3>
                </div>
                <div className="grid max-w-sm grid-cols-2 gap-4 text-sm text-white/80">
                  <div>
                    <p className="font-heading text-3xl font-semibold text-white">10</p>
                    <p>luxury products</p>
                  </div>
                  <div>
                    <p className="font-heading text-3xl font-semibold text-white">€60</p>
                    <p>core price point</p>
                  </div>
                </div>
              </div>
            </Link>
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
                <div key={item} className="aspect-[3/4] animate-pulse bg-muted" />
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
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="relative aspect-[4/5] overflow-hidden bg-muted">
              <Image
                src={STORY_IMAGE}
                alt="Maison Privé interior story"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="space-y-6 lg:max-w-md">
              <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Brand world</p>
              <h2 className="text-h2 font-heading font-semibold leading-tight">
                Made to feel
                <br />
                unforgettable.
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                Maison Privé is built around the mood of private residences, grand hotels, and collector taste. The product names, pricing, imagery,
                and layout now speak in one premium voice.
              </p>
              <div className="grid grid-cols-2 gap-6 py-2">
                <div>
                  <p className="font-heading text-2xl font-bold">10</p>
                  <p className="mt-0.5 text-sm text-muted-foreground">Luxury SKUs</p>
                </div>
                <div>
                  <p className="font-heading text-2xl font-bold">1</p>
                  <p className="mt-0.5 text-sm text-muted-foreground">Signature collection</p>
                </div>
                <div>
                  <p className="font-heading text-2xl font-bold">€60</p>
                  <p className="mt-0.5 text-sm text-muted-foreground">Across the line</p>
                </div>
                <div>
                  <p className="font-heading text-2xl font-bold">Premium</p>
                  <p className="mt-0.5 text-sm text-muted-foreground">Luxury positioning</p>
                </div>
              </div>
              <Link href="/about" className="link-underline inline-flex items-center gap-2 pb-0.5 text-sm font-semibold uppercase tracking-wide">
                Read the brand story
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
                <p className="text-sm font-semibold">Complimentary Shipping</p>
                <p className="text-xs text-muted-foreground">On orders over €120</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4">
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-accent/10">
                <RotateCcw className="h-5 w-5 text-accent" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-sm font-semibold">Refined Returns</p>
                <p className="text-xs text-muted-foreground">30-day return window</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4 md:justify-end">
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-accent/10">
                <Shield className="h-5 w-5 text-accent" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-sm font-semibold">Secure Checkout</p>
                <p className="text-xs text-muted-foreground">Protected payment flow</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-foreground py-section text-background">
        <div className="container-custom max-w-xl text-center">
          <Home className="mx-auto mb-5 h-8 w-8 opacity-60" strokeWidth={1.2} />
          <h2 className="text-h2 font-heading font-semibold">Join the Maison Privé list</h2>
          <p className="mt-3 text-sm leading-relaxed text-background/70">
            Get first access to launches, gifting edits, and limited fragrance drops.
          </p>
          {submitted ? (
            <p className="mt-8 border border-background/20 px-6 py-4 text-sm font-medium text-background/80">
              You&apos;re on the list.
            </p>
          ) : (
            <form className="mt-8 flex gap-2" onSubmit={handleNewsletterSubmit}>
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 border-b border-background/30 bg-transparent px-1 py-3 text-sm text-background placeholder:text-background/40 focus:border-background focus:outline-none transition-colors"
              />
              <button
                type="submit"
                className="whitespace-nowrap bg-background px-6 py-3 text-sm font-semibold uppercase tracking-wide text-foreground transition-opacity hover:opacity-90"
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
