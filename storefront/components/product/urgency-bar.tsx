'use client'

import { useState, useEffect } from 'react'
import { Clock, Flame } from 'lucide-react'

interface UrgencyBarProps {
  stockCount?: number
}

export default function UrgencyBar({ stockCount }: UrgencyBarProps) {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    // Set timer to end of day (midnight)
    const now = new Date()
    const midnight = new Date()
    midnight.setHours(23, 59, 59, 0)
    const diff = midnight.getTime() - now.getTime()

    const calc = (ms: number) => ({
      hours: Math.floor(ms / 3600000),
      minutes: Math.floor((ms % 3600000) / 60000),
      seconds: Math.floor((ms % 60000) / 1000),
    })

    setTimeLeft(calc(diff))

    const interval = setInterval(() => {
      const remaining = midnight.getTime() - Date.now()
      if (remaining <= 0) {
        clearInterval(interval)
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 })
      } else {
        setTimeLeft(calc(remaining))
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const pad = (n: number) => String(n).padStart(2, '0')

  return (
    <div className="space-y-2.5">
      {/* Sale timer */}
      <div className="flex items-center gap-2.5 bg-amber-50 border border-amber-200 px-3.5 py-2.5 rounded-sm">
        <Clock className="h-4 w-4 text-amber-600 flex-shrink-0" strokeWidth={1.5} />
        <div className="flex items-center gap-1.5 text-sm">
          <span className="text-amber-800 font-medium">Sale ends in</span>
          <span className="font-mono font-bold text-amber-900 tabular-nums">
            {pad(timeLeft.hours)}:{pad(timeLeft.minutes)}:{pad(timeLeft.seconds)}
          </span>
        </div>
      </div>

      {/* Stock warning */}
      {stockCount !== undefined && stockCount > 0 && stockCount <= 15 && (
        <div className="flex items-center gap-2.5 bg-red-50 border border-red-200 px-3.5 py-2.5 rounded-sm">
          <Flame className="h-4 w-4 text-red-500 flex-shrink-0" strokeWidth={1.5} />
          <p className="text-sm text-red-700 font-medium">
            Only <strong>{stockCount} left</strong> — selling fast
          </p>
        </div>
      )}
    </div>
  )
}
