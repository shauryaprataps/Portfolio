import React from 'react'
import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import SectionHeading from './SectionHeading'
import Badge from './bento/Badge'

type Project = {
  name: string
  description: string
  tech: string[]
  githubUrl: string
  liveUrl: string
  image: string
  highlight: string
  category: string
  status: string
}

const projects: Project[] = [
  {
    name: 'SmartDoc',
    description:
      'OCR-powered document management platform that extracts critical information from uploaded documents and leverages AWS services for automated processing, storage, and notifications.',
    tech: ['React', 'Tailwind CSS', 'AWS Lambda', 'Amazon S3', 'OCR'],
    githubUrl: 'https://github.com/shauryaprataps/SmartDoc',
    liveUrl: 'https://docsmart2025.vercel.app/',
image: `${import.meta.env.BASE_URL}doc.png`   ,
 highlight: 'Featured Project',
    category: 'Document AI',
    status: 'Live'
  },
  {
    name: 'Compensation Intelligence System',
    description:
      'Compensation analytics platform providing salary benchmarking, compensation insights, and interactive visualizations for informed decision-making.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Postman', 'Deployment'],
    githubUrl: 'https://github.com/shauryaprataps/compensation-intelligence',
    liveUrl: 'https://compensation-intell.vercel.app/',
    image: `${import.meta.env.BASE_URL}comp.png`,
    highlight: 'Analytics',
    category: 'Analytics',
    status: 'Live'
  },
  {
    name: 'Emotion Intelligence System',
    description:
      'Multimodal emotion recognition platform combining text, voice, and machine learning techniques to generate structured emotional insights.',
    tech: ['Python', 'Machine Learning', 'NLP', 'Audio Processing'],
    githubUrl: 'https://github.com/shauryaprataps/emotion-recognition-system',
    liveUrl: 'https://analyze-emotions.vercel.app/',
    image: `${import.meta.env.BASE_URL}emo.png`,
    highlight: 'AI/ML',
    category: 'Machine Learning',
    status: 'Live'
  }
]

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.04 }}
      className="premium-card group rounded-[2rem] transition-transform duration-300 will-change-transform hover:-translate-y-1"
    >
      <div className="grid gap-5 p-5 md:grid-cols-12 md:items-stretch">
        <div className="md:col-span-5">
          <div className="relative h-full overflow-hidden rounded-[1.5rem] border border-border/45 bg-surface/50">
            <img
              src={project.image}
              alt={`${project.name} preview`}
              loading="lazy"
              className="aspect-[16/11] h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-transparent" />
            <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/35 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
              {project.category}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:col-span-7">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold">{project.name}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{project.description}</p>
            </div>
            <div className="shrink-0 rounded-2xl border border-accent3/25 bg-accent3/10 px-3 py-2 text-xs font-semibold text-accent3">
              {project.status}
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <Badge key={t} label={t} />
            ))}
          </div>

          <div className="mt-auto flex flex-col gap-3 pt-5 sm:flex-row sm:items-center">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-border/45 bg-surface/55 px-4 py-3 text-sm font-semibold text-text transition hover:-translate-y-0.5 hover:bg-surface/80"
            >
              <FaGithub size={16} /> GitHub
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-accent to-accent2 px-4 py-3 text-sm font-semibold text-white shadow-glass transition-transform hover:translate-y-[-2px]"
            >
              <FaExternalLinkAlt size={16} /> Live Demo
            </a>
          </div>
        </div>
      </div>

      
    </motion.article>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="mx-auto w-full max-w-6xl px-4 py-16 sm:py-20">
      <SectionHeading
        eyebrow="Featured Projects"
        title="Selected work with real-world product thinking."
        description="A premium overview of three projects, each presented with a recruiter-friendly summary, stack badges, live links, and product context."
      />

      <div className="grid gap-5">
        {projects.map((p, i) => (
          <ProjectCard key={p.name} project={p} index={i} />
        ))}
      </div>
    </section>
  )
}
