import React from 'react'

export default function BentoCard({
  children,
  className = ''
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={
        [
          'rounded-3xl border border-border/70 bg-card/55 p-6 shadow-glass backdrop-blur',
          'relative overflow-hidden',
          'before:absolute before:inset-0 before:bg-[radial-gradient(600px_circle_at_20%_0%,rgba(59,130,246,0.15),transparent_60%),radial-gradient(600px_circle_at_90%_10%,rgba(139,92,246,0.14),transparent_55%)]',
          'before:pointer-events-none before:opacity-0 before:transition-opacity before:duration-300',
          'hover:before:opacity-100',
          className
        ].join(' ')
      }

    >
      {children}
    </div>
  )
}

