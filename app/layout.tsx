import { Navbar } from '@/components/Navbar'
import './globals.css'
import { cn } from '@/lib/utils'

import { Urbanist } from 'next/font/google'
import { Toaster } from 'sonner'
import { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { TracingBeam } from '@/components/ui/tracing-beam'
import SparklesCore from '@/components/ui/SparklesCore'

const urbanist = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Marwan Ezzat's Portfolio",
  description:
    'A 3D portfolio website built with React Three Fiber and Next.js',
}
type Props = Readonly<{
  children: React.ReactNode
}>

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          urbanist.className,
          'relative relative h-max min-h-screen overflow-x-hidden',
        )}
      >
        <Navbar />
        <Toaster richColors />

        <SparklesCore
          background="transparent"
          minSize={0.3}
          maxSize={0.8}
          particleDensity={30}
          className="absolute left-0 top-0 h-full w-screen"
          particleColor="#FFFFFF"
        />

        <TracingBeam>{children}</TracingBeam>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
