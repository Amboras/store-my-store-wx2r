import { notFound } from 'next/navigation'
import { medusaServerClient } from '@/lib/medusa-client'
import ProductGrid from '@/components/product/product-grid'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

async function getCollection(handle: string) {
  try {
    const response = await medusaServerClient.store.collection.list({
      handle: [handle],
    })
    return response.collections?.[0] || null
  } catch (error) {
    console.error('Error fetching collection:', error)
    return null
  }
}

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ handle: string }>
}) {
  const { handle } = await params
  const collection = await getCollection(handle)

  if (!collection) {
    notFound()
  }

  const description = collection.metadata?.description
  const hasDescription = typeof description === 'string' && description

  return (
    <>
      <section className="relative overflow-hidden border-b border-border/70 bg-[#f7f1ea]">
        <div className="absolute inset-x-0 top-0 h-32 bg-[radial-gradient(circle_at_top,rgba(201,149,108,0.18),transparent_72%)]" />
        <div className="container-custom relative py-16 text-center sm:py-20">
          <p className="mb-4 text-xs uppercase tracking-[0.32em] text-muted-foreground">Collection</p>
          <h1 className="mx-auto max-w-4xl font-heading text-[clamp(3.1rem,7vw,5.6rem)] font-semibold leading-[0.92] text-foreground animate-fade-in-up">
            {collection.title}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg animate-fade-in-up">
            {hasDescription
              ? (description as string)
              : 'A composed edit of statement candles, diffusers, and room perfumes designed to make every space feel dressed, warm, and unmistakably premium.'}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 animate-fade-in-up">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-foreground px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-background transition-all duration-500 hover:-translate-y-0.5 hover:opacity-90"
            >
              Shop all pieces
              <ArrowRight className="h-4 w-4" />
            </Link>
            <div className="luxury-panel rounded-full border border-white/50 px-5 py-3 text-sm uppercase tracking-[0.18em] text-foreground/70">
              Signature house pricing at €60
            </div>
          </div>
        </div>
      </section>
      <section className="container-custom py-10 sm:py-14">
        <ProductGrid collectionId={collection.id} limit={100} />
      </section>
    </>
  )
}
