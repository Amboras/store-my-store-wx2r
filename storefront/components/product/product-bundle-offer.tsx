'use client'

import { useState } from 'react'
import { useCart } from '@/hooks/use-cart'
import { Package, Loader2, Check } from 'lucide-react'
import { toast } from 'sonner'

// Bundle product variant ID for "Jewelry + Case Bundle"
const BUNDLE_VARIANT_ID = 'PLACEHOLDER' // will be replaced dynamically via props

interface ProductBundleOfferProps {
  bundleVariantId: string
  bundlePrice: string
  regularPrice: string
  savings: string
}

export default function ProductBundleOffer({
  bundleVariantId,
  bundlePrice,
  regularPrice,
  savings,
}: ProductBundleOfferProps) {
  const { addItem, isAddingItem } = useCart()
  const [justAdded, setJustAdded] = useState(false)

  const handleAddBundle = () => {
    if (!bundleVariantId || bundleVariantId === BUNDLE_VARIANT_ID) return
    addItem(
      { variantId: bundleVariantId, quantity: 1 },
      {
        onSuccess: () => {
          setJustAdded(true)
          toast.success('Bundle added to bag!')
          setTimeout(() => setJustAdded(false), 2500)
        },
        onError: (error: Error) => {
          toast.error(error.message || 'Failed to add bundle')
        },
      }
    )
  }

  return (
    <div className="border border-accent/40 bg-accent/5 p-4 space-y-3">
      <div className="flex items-start gap-3">
        <div className="h-8 w-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
          <Package className="h-4 w-4 text-accent" strokeWidth={1.5} />
        </div>
        <div>
          <p className="text-sm font-semibold">Bundle &amp; Save — Jewelry + Phone Case</p>
          <p className="text-xs text-muted-foreground mt-0.5">
            Get a Marble Luxe iPhone Case + Gold Celestial Ring together in a gift box.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div>
          <span className="text-base font-bold">{bundlePrice}</span>
          <span className="text-sm text-muted-foreground line-through ml-2">{regularPrice}</span>
          <span className="ml-2 text-xs font-semibold text-accent">Save {savings}</span>
        </div>
      </div>

      <button
        onClick={handleAddBundle}
        disabled={isAddingItem || justAdded}
        className={`w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold uppercase tracking-wide transition-all border ${
          justAdded
            ? 'border-green-600 bg-green-600 text-white'
            : 'border-accent text-accent hover:bg-accent hover:text-white'
        }`}
      >
        {isAddingItem ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : justAdded ? (
          <>
            <Check className="h-4 w-4" />
            Bundle Added
          </>
        ) : (
          <>
            <Package className="h-4 w-4" />
            Add Bundle to Bag
          </>
        )}
      </button>
    </div>
  )
}
