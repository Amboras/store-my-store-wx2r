import { Shield, RotateCcw, Truck, Lock, Award, Gem } from 'lucide-react'

export default function TrustBadges() {
  return (
    <div className="space-y-4">
      {/* Primary badges */}
      <div className="grid grid-cols-3 gap-3 py-5 border-t border-b">
        <div className="text-center space-y-1.5">
          <div className="flex justify-center">
            <Truck className="h-5 w-5 text-muted-foreground" strokeWidth={1.5} />
          </div>
          <p className="text-[11px] font-semibold uppercase tracking-wider">Free Shipping</p>
          <p className="text-[11px] text-muted-foreground">Orders $75+</p>
        </div>
        <div className="text-center space-y-1.5">
          <div className="flex justify-center">
            <RotateCcw className="h-5 w-5 text-muted-foreground" strokeWidth={1.5} />
          </div>
          <p className="text-[11px] font-semibold uppercase tracking-wider">Free Returns</p>
          <p className="text-[11px] text-muted-foreground">Within 30 days</p>
        </div>
        <div className="text-center space-y-1.5">
          <div className="flex justify-center">
            <Lock className="h-5 w-5 text-muted-foreground" strokeWidth={1.5} />
          </div>
          <p className="text-[11px] font-semibold uppercase tracking-wider">Secure Pay</p>
          <p className="text-[11px] text-muted-foreground">256-bit SSL</p>
        </div>
      </div>

      {/* Secondary guarantee strip */}
      <div className="flex flex-col gap-2.5">
        <div className="flex items-center gap-3 text-sm">
          <Shield className="h-4 w-4 text-accent flex-shrink-0" strokeWidth={1.5} />
          <span className="text-muted-foreground">
            <strong className="text-foreground">100% authentic</strong> — every product is quality-checked before shipping
          </span>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <Award className="h-4 w-4 text-accent flex-shrink-0" strokeWidth={1.5} />
          <span className="text-muted-foreground">
            <strong className="text-foreground">Hypoallergenic materials</strong> — nickel-free &amp; skin-safe
          </span>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <Gem className="h-4 w-4 text-accent flex-shrink-0" strokeWidth={1.5} />
          <span className="text-muted-foreground">
            <strong className="text-foreground">Gift-ready packaging</strong> — arrives in a branded box
          </span>
        </div>
      </div>
    </div>
  )
}
