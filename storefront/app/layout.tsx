import './globals.css'
import type { Metadata } from 'next'
import { Lato, Inter } from 'next/font/google'
import { Providers } from './providers'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import AnnouncementBar from '@/components/layout/announcement-bar'
import { AnalyticsProvider } from '@/components/analytics-provider'
import { Toaster } from 'sonner'
import { ElementPickerListener } from '@/components/element-picker-listener'
import { ErrorBoundary } from '@/components/error-boundary'
import dynamic from 'next/dynamic'

const CookieConsent = dynamic(() => import('@/components/cookie-consent'))

const heading = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-heading',
  display: 'swap',
})

const body = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Store — Modern Commerce',
    template: '%s | Store',
  },
  description: 'Discover curated products crafted with care. A modern ecommerce experience.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`} suppressHydrationWarning>
      <head>
        {/* PostHog cross-origin iframe recording shim — records DOM via rrweb and forwards
            events to the parent window (admin dashboard) for session replay */}
        <script dangerouslySetInnerHTML={{ __html: `
(function() {
  'use strict';
  if (window.parent === window) return;
  var origin = window.location.origin;
  var isRecording = false;
  function startRecording() {
    if (isRecording) return;
    var record = window.rrweb && window.rrweb.record;
    if (!record) return;
    isRecording = true;
    record({
      emit: function(event) {
        try { window.parent.postMessage({ type: 'rrweb', event: event, origin: origin, isCheckout: event.type === 2 }, '*'); } catch(e) {}
      },
      collectFonts: true,
      sampling: { scroll: 150 }
    });
  }
  function loadAndRecord() {
    if (window.rrweb && window.rrweb.record) { startRecording(); return; }
    var s = document.createElement('script');
    s.src = 'https://unpkg.com/@posthog/rrweb-record@0.0.37/dist/rrweb-record.umd.cjs';
    s.onload = startRecording;
    document.head.appendChild(s);
  }
  window.addEventListener('message', function(e) {
    if (e.data && (e.data.type === 'posthog:start-recording-v2' || e.data.type === 'posthog:start-recording')) loadAndRecord();
  });
  if (document.readyState === 'complete') loadAndRecord();
  else window.addEventListener('load', loadAndRecord);
})();
        `}} />
      </head>
      <body>
        <Providers>
          <ElementPickerListener />
          <AnnouncementBar />
          <Header />
          <main className="min-h-screen">
            <ErrorBoundary>
              <AnalyticsProvider>
                {children}
              </AnalyticsProvider>
            </ErrorBoundary>
          </main>
          <Footer />
          <CookieConsent />
          <Toaster position="bottom-right" richColors />
        </Providers>
      </body>
    </html>
  )
}
