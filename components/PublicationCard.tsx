import Link from 'next/link'

interface PublicationCardProps {
  title: string
  venue: string
  description: string
  href?: string
}

export default function PublicationCard({ title, venue, description, href }: PublicationCardProps) {
  const content = (
    <div className="flex flex-col rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-accent/30 hover:shadow-md dark:border-slate-700 dark:bg-slate-900 dark:hover:border-accent/50">
      <span className="text-xs font-medium text-accent dark:text-accent-muted">{venue}</span>
      <h3 className="mt-1 font-semibold text-slate-900 dark:text-slate-100">{title}</h3>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{description}</p>
    </div>
  )

  if (href) {
    return (
      <Link href={href} target="_blank" rel="noopener noreferrer" className="block">
        {content}
      </Link>
    )
  }

  return content
}
