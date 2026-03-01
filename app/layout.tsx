import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Shuwen Ge | AI Researcher',
  description: 'Undergraduate researcher in Audio AI & LLM alignment. NeurIPS 2025, ACL ARR 2026.',
  openGraph: {
    title: 'Shuwen Ge | AI Researcher',
    description: 'Undergraduate researcher in Audio AI & LLM alignment.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning data-theme="tech">
      <body className="min-h-screen bg-slate-50 font-sans text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-100">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
