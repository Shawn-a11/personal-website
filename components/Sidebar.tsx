'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  Home,
  FolderKanban,
  Share2,
  MessageCircle,
  Menu,
  X,
  Linkedin,
  Github,
  Mail,
  GraduationCap,
  Sun,
  Moon,
} from 'lucide-react'
import { useTheme } from './ThemeProvider'

const navItems = [
  { href: '#about', label: 'Home', icon: Home },
  { href: '#projects', label: 'Research Projects', icon: FolderKanban },
  { href: '#publications', label: 'Publications', icon: Share2 },
  { href: '#contact', label: 'Contact', icon: MessageCircle },
]

const socialLinks = [
  { href: 'https://linkedin.com/in/shuwen8681/', icon: Linkedin, label: 'LinkedIn' },
  { href: 'https://github.com/Shawn-a11', icon: Github, label: 'GitHub' },
  { href: 'mailto:shuwen8681@gmail.com', icon: Mail, label: 'Email' },
  { href: 'https://scholar.google.com/citations?user=01E6oJ0AAAAJ&hl=zh-CN', icon: GraduationCap, label: 'Google Scholar' },
]

export default function Sidebar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="fixed top-4 right-4 z-50 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 text-white lg:hidden"
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Overlay for mobile */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed left-0 top-0 z-40 flex h-full w-72 flex-col border-r border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900
          transition-transform duration-300 lg:translate-x-0
          ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        {/* Profile */}
        <div className="flex flex-col items-center border-b border-slate-200 pb-6 dark:border-slate-700">
          <div className="relative h-28 w-28 overflow-hidden rounded-full shadow-lg">
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-accent to-blue-600 text-3xl font-bold text-white">
              SG
            </div>
            <Image
              src="/avatar.png"
              alt="Shuwen Ge"
              fill
              className="object-cover"
              sizes="112px"
              priority
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
            />
          </div>
          <h1 className="mt-4 text-xl font-bold tracking-tight">Shuwen Ge</h1>
          <p className="mt-1 text-center text-sm text-slate-600 dark:text-slate-400">
            Junior AI Researcher
          </p>

          {/* Day / Night toggle */}
          <div className="mt-3 flex gap-1 rounded-lg bg-slate-100 p-1 dark:bg-slate-800">
            <button
              onClick={() => setTheme('light')}
              className={`flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs transition ${
                theme === 'light'
                  ? 'bg-accent text-white'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100'
              }`}
              title="白天"
            >
              <Sun size={14} />
              Day
            </button>
            <button
              onClick={() => setTheme('dark')}
              className={`flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs transition ${
                theme === 'dark'
                  ? 'bg-accent text-white'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100'
              }`}
              title="黑夜"
            >
              <Moon size={14} />
              Night
            </button>
          </div>

          {/* Social links */}
          <div className="mt-4 flex gap-3">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-600 transition hover:bg-accent hover:text-white dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-accent"
                aria-label={label}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <nav className="mt-6 flex flex-col gap-1">
          {navItems.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100"
            >
              <Icon size={20} className="shrink-0" />
              <span>{label}</span>
            </Link>
          ))}
        </nav>
      </aside>
    </>
  )
}
