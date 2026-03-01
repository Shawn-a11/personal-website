import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Shuwen Ge | AI Researcher & Creator',
  description: 'Building and sharing AI knowledge. Research in audio, LLMs, and bioacoustics.',
  openGraph: {
    title: 'Shuwen Ge | AI Researcher & Creator',
    description: 'Building and sharing AI knowledge.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-slate-50 font-sans text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-100">
        {children}
      </body>
    </html>
  )
}
