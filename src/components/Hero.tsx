import React from 'react'
import { motion } from 'framer-motion'
import { FaDownload, FaGithub, FaLinkedin } from 'react-icons/fa'
import { FiArrowDown, FiExternalLink, FiZap } from 'react-icons/fi'

const stats = [
  { value: '5+', label: 'Projects Built' },
  { value: '250+', label: 'LeetCode Questions Solved' },
  { value: 'B.Tech', label: 'Computer Science' },
  { value: '2027', label: 'Graduation Year' },
]

export default function Hero() {
  return (
    <section id="hero" className="mx-auto w-full max-w-6xl px-4 py-16 sm:py-20">
      <div className="absolute inset-0 -z-10">
        <motion.div animate={{ y: [0, 24, 0], x: [0, 12, 0] }} transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }} className="absolute left-[-8rem] top-20 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
        <motion.div animate={{ y: [0, -18, 0], x: [0, -16, 0] }} transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }} className="absolute right-[-7rem] top-32 h-96 w-96 rounded-full bg-accent2/20 blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 pb-16 pt-14 sm:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-xs font-medium text-text backdrop-blur">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent3 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent3" />
                </span>
                Available for Full-Time Opportunities
              </div>

              <h1 className="mt-7 text-5xl font-semibold leading-[0.98] sm:text-6xl lg:text-7xl">
                Hi, I'm{' '}
                <span className="gradient-text">
                  Shaurya Pratap Singh
                </span>
              </h1>

              <p className="mt-6 text-xl font-medium text-text/90 sm:text-2xl">
                Full Stack Developer & Computer Science Student
              </p>

              <p className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
                I design and build modern web applications that solve real-world
problems. My work focuses on creating scalable, user-friendly
products with strong attention to performance, usability, and
clean engineering practices.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#projects"
                  className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-accent to-accent2 px-6 py-3 text-sm font-semibold text-white shadow-premium transition-all duration-300 hover:-translate-y-1"
                >
                  View Projects
                  <FiExternalLink className="transition group-hover:translate-x-0.5" size={16} />
                </a>

                <a
                  href="/Shaurya_Resume2.pdf"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-border/45 bg-card/65 px-6 py-3 text-sm font-semibold text-text shadow-glass backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-surface/70"
                >
                  <FaDownload size={16} />
                  Download Resume
                </a>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {stats.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 + index * 0.05 }}
                    className="premium-card rounded-2xl p-4"
                  >
                    <div className="text-2xl font-semibold">{item.value}</div>
                    <div className="mt-1 text-xs text-muted">
                      {item.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  { href: 'https://www.linkedin.com/in/shauryapratapsingh1303/', label: 'LinkedIn', icon: FaLinkedin },
                  { href: 'https://github.com/shauryaprataps', label: 'GitHub', icon: FaGithub }
                ].map((social) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -4, scale: 1.03 }}
                      className="inline-flex items-center gap-2 rounded-xl border border-border/45 bg-card/55 px-4 py-2 text-sm text-muted shadow-glass backdrop-blur transition hover:text-text"
                    >
                      <Icon />
                      {social.label}
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative mx-auto max-w-sm"
            >
              <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} className="absolute -left-8 top-12 z-10 hidden rounded-2xl border border-border/45 bg-card/75 p-3 text-xs font-medium text-text shadow-glass backdrop-blur sm:flex">
                <FiZap className="mr-2 text-accent" /> AI-ready products
              </motion.div>
              <div className="premium-card rounded-[2rem] p-4">
                <div className="overflow-hidden rounded-[1.5rem]">
                  <img
                   src={`${import.meta.env.BASE_URL}me.png`} alt="Profile"                  alt="Shaurya Pratap Singh"
                    loading="eager"
                    className="aspect-[4/5] w-full rounded-[1.5rem] object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>

                <div className="mt-4 rounded-2xl border border-border/45 bg-surface/55 p-4 text-center">
                  <p className="text-sm leading-6 text-muted">
                    Passionate about building impactful products, solving complex
                    problems, and continuously learning new technologies.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
      </div>
    </section>
  )
}
