import { LucideIcon } from 'lucide-react'
import Link from 'next/link'

interface ProjectCardProps {
  title: string
  description: string
  icon: LucideIcon
  href?: string
  highlight?: string
}

export default function ProjectCard({ title, description, icon: Icon, href, highlight }: ProjectCardProps) {
  const content = (
    <div className="group flex h-full flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-accent/30 hover:shadow-md dark:border-slate-700 dark:bg-slate-900 dark:hover:border-accent/50">
      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent dark:bg-accent/20">
        <Icon size={24} />
      </div>
      <h3 className="font-semibold text-slate-900 dark:text-slate-100">{title}</h3>
      <p className="mt-2 flex-1 text-sm text-slate-600 dark:text-slate-400">{description}</p>
      {highlight && (
        <p className="mt-2 text-xs font-medium text-accent dark:text-accent-muted">{highlight}</p>
      )}
    </div>
  )

  if (href) {
    return (
      <Link href={href} target="_blank" rel="noopener noreferrer" className="block h-full">
        {content}
      </Link>
    )
  }

  return content
}
