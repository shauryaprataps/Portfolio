import React from 'react'
import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

type TimelineItem = {
  title: string
  subtitle: string
  detail: string
  year: string
}

const items: TimelineItem[] = [
  {
    title: 'B.Tech - Computer Science',
    subtitle: 'School / University Name',
    detail: 'Focus on core CS, software engineering, and applied projects.',
    year: '2023 - Present'
  },
  {
    title: 'Higher Secondary',
    subtitle: 'CBSE / Central Public School',
    detail: 'Strong foundation in mathematics and programming fundamentals.',
    year: '2021 - 2023'
  },
  {
    title: 'Secondary Education',
    subtitle: 'CBSE / Rapid Global School',
    detail: 'Completed secondary education with a focus on science and technology.',
    year: '2008 - 2021'
  }
]

export default function Education() {
  return (
    <section id="education" className="mx-auto w-full max-w-6xl px-4 py-16 sm:py-20">
      <SectionHeading
        eyebrow="Education"
        title="A timeline that's easy to scan."
        description="Clear academic background and relevant learning focus."
      />

      <div className="relative">
        <div className="absolute bottom-0 left-3 top-0 w-px bg-gradient-to-b from-accent via-accent2 to-transparent" aria-hidden="true" />
        <div className="space-y-5">
          {items.map((it, idx) => (
            <motion.article
              key={it.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="premium-card rounded-[1.5rem] p-5"
            >
              <div className="relative pl-7">
                <span
                  className="absolute left-[-6px] top-3 h-3 w-3 rounded-full bg-accent shadow-[0_0_0_6px_rgb(var(--color-accent)/0.12)]"
                  aria-hidden="true"
                />
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-base font-semibold">{it.title}</h3>
                    <p className="mt-1 text-sm text-muted">{it.subtitle}</p>
                  </div>
                  <div className="rounded-full border border-border/45 bg-surface/55 px-3 py-1.5 text-xs font-medium text-muted">{it.year}</div>
                </div>
                <p className="mt-3 text-sm leading-7 text-muted">{it.detail}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
