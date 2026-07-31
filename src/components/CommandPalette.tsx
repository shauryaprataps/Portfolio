import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiArrowRight, FiCommand, FiDownload, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

const actions = [
  { label: 'Go to About', hint: 'Section', href: '#about', icon: FiArrowRight },
  { label: 'Go to Skills', hint: 'Section', href: '#skills', icon: FiArrowRight },
  { label: 'Go to Projects', hint: 'Section', href: '#projects', icon: FiArrowRight },
  { label: 'Go to Education', hint: 'Section', href: '#education', icon: FiArrowRight },
  { label: 'Contact Shaurya', hint: 'Email', href: 'mailto:shauryaprataps1303@gmail.com', icon: FiMail },
  { label: 'Download Resume', hint: 'PDF', href: '/Shaurya_Resume2.pdf', icon: FiDownload },
  { label: 'Open GitHub', hint: 'Profile', href: 'https://github.com/shauryaprataps', icon: FiGithub },
  { label: 'Open LinkedIn', hint: 'Profile', href: 'https://www.linkedin.com/in/shauryapratapsingh1303/', icon: FiLinkedin }
]

export default function CommandPalette() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        setOpen((value) => !value)
      }
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-5 left-5 z-40 hidden items-center gap-2 rounded-2xl border border-border/50 bg-card/75 px-4 py-3 text-xs font-medium text-muted shadow-glass backdrop-blur transition hover:-translate-y-0.5 hover:text-text lg:inline-flex"
      >
        <FiCommand /> Ctrl K
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] bg-bg/60 p-4 backdrop-blur-xl"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="premium-card mx-auto mt-20 max-w-xl rounded-[1.75rem] p-3"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center gap-3 border-b border-border/35 px-3 py-3">
                <FiCommand className="text-accent" />
                <span className="text-sm font-medium text-muted">Command palette</span>
              </div>
              <div className="mt-2 max-h-[60vh] overflow-y-auto p-1">
                {actions.map((action) => {
                  const Icon = action.icon
                  return (
                    <a
                      key={action.label}
                      href={action.href}
                      target={action.href.startsWith('http') ? '_blank' : undefined}
                      rel={action.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between gap-3 rounded-2xl px-3 py-3 text-sm text-text transition hover:bg-surface/70"
                    >
                      <span className="inline-flex items-center gap-3">
                        <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-border/40 bg-surface/60 text-accent">
                          <Icon size={17} />
                        </span>
                        {action.label}
                      </span>
                      <span className="text-xs text-muted">{action.hint}</span>
                    </a>
                  )
                })}
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}
