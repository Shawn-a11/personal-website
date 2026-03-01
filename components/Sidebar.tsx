'use client'

import { useState } from 'react'
import Link from 'next/link'
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
  Twitter,
} from 'lucide-react'

const navItems = [
  { href: '#about', label: 'Home', icon: Home },
  { href: '#projects', label: 'Research Projects', icon: FolderKanban },
  { href: '#publications', label: 'Publications & Sharing', icon: Share2 },
  { href: '#contact', label: 'Contact', icon: MessageCircle },
]

const socialLinks = [
  { href: 'https://linkedin.com/in/shuwen8681/', icon: Linkedin, label: 'LinkedIn' },
  { href: 'https://github.com/gesuwen', icon: Github, label: 'GitHub' },
  { href: 'mailto:shuwen8681@gmail.com', icon: Mail, label: 'Email' },
  { href: 'https://x.com', icon: Twitter, label: 'X' },
]

export default function Sidebar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
          <div className="flex h-28 w-28 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-accent to-blue-600 text-3xl font-bold text-white shadow-lg">
            SG
          </div>
          <h1 className="mt-4 text-xl font-bold tracking-tight">Shuwen Ge</h1>
          <p className="mt-1 text-center text-sm text-slate-600 dark:text-slate-400">
            AI Researcher & Creator · Building & Sharing
          </p>

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
