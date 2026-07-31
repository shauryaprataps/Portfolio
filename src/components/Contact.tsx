import React from 'react'
import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import { FiSend } from 'react-icons/fi'

const contactMethods = [
  {
    label: 'Email',
    value: 'shauryaprataps1303@gmail.com',
    href: 'mailto:shauryaprataps1303@gmail.com',
    icon: FaEnvelope
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/shauryapratapsingh1303',
    href: 'https://www.linkedin.com/in/shauryapratapsingh1303/',
    icon: FaLinkedin
  },
  {
    label: 'GitHub',
    value: 'github.com/shauryaprataps',
    href: 'https://github.com/shauryaprataps',
    icon: FaGithub
  }
]

export default function Contact() {
  return (
    <section id="contact" className="mx-auto w-full max-w-6xl px-4 py-16 sm:py-20">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something high-impact."
        description="Reach out via email or use the contact form. I'm open to discussing new projects, creative ideas, or opportunities to be part of your vision."
      />

      <div className="grid items-start gap-5 lg:grid-cols-12 lg:items-stretch">
        <motion.aside
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 lg:h-full"
        >
          <div className="premium-card flex flex-col rounded-[2rem] p-7 sm:p-8 lg:h-full">
            <div>
              <h3 className="text-base font-semibold">Direct Links</h3>
              <p className="mt-2 text-sm leading-6 text-muted">
                The fastest ways to reach me or explore my work.
              </p>

              <div className="mt-7 space-y-4">
                {contactMethods.map((method) => {
                  const Icon = method.icon
                  const isExternal = method.href.startsWith('http')

                  return (
                    <a
                      key={method.label}
                      href={method.href}
                      target={isExternal ? '_blank' : undefined}
                      rel={isExternal ? 'noopener noreferrer' : undefined}
                      className="group flex items-center justify-between gap-4 rounded-2xl border border-border/45 bg-surface/45 p-4 text-sm text-text transition duration-300 hover:-translate-y-1 hover:border-accent/25 hover:bg-surface/75 hover:shadow-[0_18px_45px_rgb(var(--color-accent)/0.1)] sm:p-5"
                    >
                      <span className="flex min-w-0 items-center gap-3">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-border/45 bg-card/60 text-accent transition duration-300 group-hover:scale-105 group-hover:border-accent/30">
                          <Icon size={18} />
                        </span>
                        <span>
                          <span className="block font-semibold">{method.label}</span>
                          <span className="mt-1 block break-all text-xs leading-5 text-muted">
                            {method.value}
                          </span>
                        </span>
                      </span>
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </motion.aside>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="lg:col-span-7 lg:h-full"
        >
          <div className="premium-card rounded-[2rem] p-7 sm:p-8 lg:h-full">
            <h3 className="text-base font-semibold">Send a Message</h3>

            <form
              action="https://formspree.io/f/xeewqweg"
              method="POST"
              className="mt-5 space-y-4"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="text-xs text-muted">Name</span>
                  <input
                    name="name"
                    className="mt-1 w-full rounded-2xl border border-border/45 bg-surface/55 px-4 py-3 text-sm text-text placeholder:text-muted/70 transition focus:border-accent/45"
                    placeholder="Your name"
                    required
                  />
                </label>

                <label className="block">
                  <span className="text-xs text-muted">Email</span>
                  <input
                    name="email"
                    type="email"
                    className="mt-1 w-full rounded-2xl border border-border/45 bg-surface/55 px-4 py-3 text-sm text-text placeholder:text-muted/70 transition focus:border-accent/45"
                    placeholder="you@example.com"
                    required
                  />
                </label>
              </div>

              <label className="block">
                <span className="text-xs text-muted">Message</span>
                <textarea
                  name="message"
                  className="mt-1 min-h-[132px] w-full resize-none rounded-2xl border border-border/45 bg-surface/55 px-4 py-3 text-sm text-text placeholder:text-muted/70 transition focus:border-accent/45"
                  placeholder="Tell me about your project..."
                  required
                />
              </label>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-accent to-accent2 px-5 py-3 text-sm font-semibold text-white shadow-glass transition-transform hover:translate-y-[-2px]"
              >
                <FiSend />
                Send Message
              </button>

            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
