import React from 'react'
import { motion } from 'framer-motion'

export default function SectionHeading({
  eyebrow,
  title,
  description
}: {
  eyebrow?: string
  title: string
  description?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="mb-10"
    >
      {eyebrow ? (
        <div className="mb-3 inline-flex rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
          {eyebrow}
        </div>
      ) : null}

      <h2 className="max-w-4xl text-3xl font-semibold leading-[1.08] sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description ? (
        <p className="mt-5 max-w-3xl text-sm leading-7 text-muted sm:text-base">
          {description}
        </p>
      ) : null}

    </motion.div>
  )
}

