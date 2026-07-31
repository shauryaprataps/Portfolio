import React from 'react'

export default function Badge({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-border/45 bg-surface/70 px-3 py-1.5 text-xs font-medium text-muted transition-colors hover:border-accent/30 hover:text-text">
      {label}
    </span>
  )
}

