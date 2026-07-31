import React from 'react'
import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import {
  FaAws,
  FaDatabase,
  FaJava,
  FaReact,
  FaServer,
  FaTools,
} from 'react-icons/fa'

type SkillGroup = {
  title: string
  subtitle: string
  skills: string[]
  icon: React.ElementType
}

const groups: SkillGroup[] = [
  {
    title: 'Frontend',
    subtitle: 'Interfaces, motion, and product UI',
    icon: FaReact,
    skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Framer Motion']
  },
  {
    title: 'Backend',
    subtitle: 'APIs, auth, and server logic',
    icon: FaServer,
    skills: ['Node.js', 'Express', 'REST APIs', 'Prisma', 'Authentication']
  },
  {
    title: 'Databases',
    subtitle: 'Data modeling and persistence',
    icon: FaDatabase,
    skills: ['PostgreSQL', 'MongoDB', 'SQL', 'Database Design']
  },
  {
    title: 'Cloud & DevOps',
    subtitle: 'Deployment and cloud services',
    icon: FaAws,
    skills: ['AWS', 'Vercel','Render', 'Firebase',  'Amazon S3', 'AWS Lambda']
  },
  {
    title: 'Languages',
    subtitle: 'Programming foundations',
    icon: FaJava,
    skills: ['Java', 'Python', 'JavaScript', 'TypeScript']
  },
  {
    title: 'Tools',
    subtitle: 'Daily workflow and collaboration',
    icon: FaTools,
    skills: ['Git', 'GitHub', 'Postman', 'VS Code']
  }
]



function SkillCard({ group, index }: { group: SkillGroup; index: number }) {
  const Icon = group.icon

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-70px' }}
      transition={{ duration: 0.48, delay: index * 0.05, ease: 'easeOut' }}
      whileHover={{ y: -6 }}
      className="premium-card group rounded-[1.75rem] p-[1px]"
    >
      <div className="relative h-full rounded-[1.7rem] bg-card/55 p-5 transition duration-300 group-hover:bg-card/75 sm:p-6">
        <div className="absolute inset-0 rounded-[1.7rem] bg-[radial-gradient(420px_circle_at_20%_0%,rgb(var(--color-accent)/0.12),transparent_55%)] opacity-0 transition duration-300 group-hover:opacity-100" />

        <div className="relative">
          <div className="mb-5 flex items-start gap-3">
            <motion.div
              whileHover={{ scale: 1.06, rotate: -2 }}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-border/45 bg-surface/70 text-accent shadow-sm"
            >
              <Icon className="h-5 w-5" />
            </motion.div>

            <div>
              <h3 className="text-lg font-semibold">{group.title}</h3>
              <p className="mt-1 text-xs leading-5 text-muted">{group.subtitle}</p>
            </div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.035, delayChildren: 0.08 } }
            }}
            className="flex flex-wrap gap-2.5"
          >
            {group.skills.map((skill) => (
              <motion.span
                key={skill}
                variants={{
                  hidden: { opacity: 0, y: 8, scale: 0.96 },
                  show: { opacity: 1, y: 0, scale: 1 }
                }}
                whileHover={{ scale: 1.045, y: -2 }}
                transition={{ duration: 0.2 }}
                className="rounded-full border border-border/45 bg-surface/55 px-3.5 py-2 text-xs font-medium text-text shadow-sm transition-colors duration-300 hover:border-accent/35 hover:bg-accent/10 hover:shadow-[0_0_24px_rgb(var(--color-accent)/0.14)]"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.article>
  )
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto w-full max-w-6xl px-4 py-16 sm:py-20"
    >
      <SectionHeading
        eyebrow="Skills"
        title="Technologies I Work With"
        description="A collection of technologies, frameworks, databases, and cloud platforms I use to build modern, scalable applications."
      />

      

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {groups.map((group, index) => (
          <SkillCard key={group.title} group={group} index={index} />
        ))}
      </div>
    </section>
  )
}
