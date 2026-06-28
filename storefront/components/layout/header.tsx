'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import { Search, ShoppingBag, User, Menu, X, LogIn } from 'lucide-react'
import { useCart } from '@/hooks/use-cart'
import { useAuth } from '@/hooks/use-auth'
import CartDrawer from '@/components/cart/cart-drawer'
import { useCollections } from '@/hooks/use-collections'

export default function Header() {
  const { itemCount } = useCart()
  const { isLoggedIn } = useAuth()
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { data: collections } = useCollections()

  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const mobileMenuCloseRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      mobileMenuCloseRef.current?.focus()
    }
  }, [isMobileMenuOpen])

  useEffect(() => {
    if (!isMobileMenuOpen) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false)
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isMobileMenuOpen])

  const handleMobileMenuKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key !== 'Tab' || !mobileMenuRef.current) return
    const focusable = mobileMenuRef.current.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    if (focusable.length === 0) return
    const first = focusable[0]
    const last = focusable[focusable.length - 1]
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault()
      last.focus()
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault()
      first.focus()
    }
  }, [])

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-500 ${
          isScrolled
            ? 'border-b border-border/80 bg-background/88 shadow-[0_18px_50px_rgba(38,24,17,0.08)] backdrop-blur-xl'
            : 'border-b border-border/70 bg-background/72 backdrop-blur-md'
        }`}
      >
        <div className="container-custom">
          <div className="flex h-20 items-center justify-between gap-4">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="-ml-2 p-2 transition-opacity hover:opacity-70 lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>

            <Link href="/" className="flex items-center gap-3">
              <div className="hidden h-10 w-px bg-border/80 sm:block" />
              <div>
                <p className="text-[10px] uppercase tracking-[0.34em] text-muted-foreground">Maison Privé</p>
                <span className="font-heading text-[1.9rem] font-semibold tracking-[-0.04em] text-foreground sm:text-[2.25rem]">
                  Maison Privé
                </span>
              </div>
            </Link>

            <nav className="hidden items-center gap-8 lg:flex">
              <Link href="/products" className="py-1 text-sm uppercase tracking-[0.18em] text-foreground/80 transition-colors hover:text-foreground" prefetch={true}>
                Shop All
              </Link>
              {collections?.slice(0, 4).map((collection: any) => (
                <Link
                  key={collection.id}
                  href={`/collections/${collection.handle}`}
                  className="py-1 text-sm uppercase tracking-[0.18em] text-foreground/80 transition-colors hover:text-foreground"
                  prefetch={true}
                >
                  {collection.title}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-1 sm:gap-2">
              <Link
                href="/search"
                className="rounded-full p-2.5 transition-all hover:bg-foreground/5"
                aria-label="Search"
              >
                <Search className="h-5 w-5" />
              </Link>
              <Link
                href={isLoggedIn ? '/account' : '/auth/login'}
                className="hidden rounded-full p-2.5 transition-all hover:bg-foreground/5 sm:block"
                aria-label={isLoggedIn ? 'Account' : 'Sign in'}
              >
                {isLoggedIn ? <User className="h-5 w-5" /> : <LogIn className="h-5 w-5" />}
              </Link>
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative rounded-full p-2.5 transition-all hover:bg-foreground/5"
                aria-label="Shopping bag"
              >
                <ShoppingBag className="h-5 w-5" />
                {itemCount > 0 && (
                  <span className="absolute right-0.5 top-0.5 flex h-4.5 min-w-4.5 items-center justify-center rounded-full bg-foreground px-1 text-[10px] font-bold text-background">
                    {itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div
            ref={mobileMenuRef}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            onKeyDown={handleMobileMenuKeyDown}
            className="absolute inset-y-0 left-0 w-80 max-w-[85vw] bg-background animate-slide-in-right"
          >
            <div className="border-b p-5">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.34em] text-muted-foreground">Maison Privé</p>
                  <span className="font-heading text-2xl font-semibold">Navigation</span>
                </div>
                <button
                  ref={mobileMenuCloseRef}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 hover:opacity-70"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Explore the fragrance house, collections, and your account.
              </p>
            </div>
            <nav className="space-y-1 p-4">
              <Link
                href="/products"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block border-b border-border/50 py-3 text-lg tracking-wide"
                prefetch={true}
              >
                Shop All
              </Link>
              {collections?.map((collection: any) => (
                <Link
                  key={collection.id}
                  href={`/collections/${collection.handle}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block border-b border-border/50 py-3 text-lg tracking-wide"
                  prefetch={true}
                >
                  {collection.title}
                </Link>
              ))}
              <div className="space-y-1 pt-4">
                <Link
                  href={isLoggedIn ? '/account' : '/auth/login'}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-3 text-muted-foreground"
                >
                  {isLoggedIn ? 'Account' : 'Sign In'}
                </Link>
                <Link
                  href="/search"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-3 text-muted-foreground"
                >
                  Search
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  )
}
