import { Navbar } from '@/components/Navbar'
import './globals.css'
import { cn } from '@/lib/utils'

import { Urbanist } from 'next/font/google'
import { Toaster } from 'sonner'
import { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

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
          'relative h-screen min-h-screen bg-secondary',
        )}
      >
        <Navbar />
        <Toaster richColors />
        <div className="absolute inset-0 -z-50 h-screen bg-gradient-radial " />

        <div className="pointer-events-none fixed inset-0 -z-40 h-full w-full  bg-[url('/noisetexture.jpg')] opacity-20 mix-blend-color-burn"></div>
        <div className="max-container h-full">{children}</div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
