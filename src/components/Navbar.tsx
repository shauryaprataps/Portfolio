import React, { useEffect, useState } from 'react'
import { FiCommand, FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'

type NavItem = {
  id: string
  label: string
}

const navItems: NavItem[] = [
  { id: 'hero', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' }
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [activeId, setActiveId] = useState('about')
  const [light, setLight] = useState(false)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 130, damping: 24 })

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    const wantsLight = stored === 'light'
    document.documentElement.classList.toggle('light', wantsLight)
    setLight(wantsLight)
  }, [])

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      const offset = 110
      let current = navItems[0]?.id ?? 'about'
      for (const item of navItems) {
        const el = document.getElementById(item.id)
        if (!el) continue
        const top = el.getBoundingClientRect().top + window.scrollY
        if (y + offset >= top) current = item.id
      }
      setActiveId(current)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const toggleTheme = () => {
    const next = !light
    setLight(next)
    document.documentElement.classList.toggle('light', next)
    localStorage.setItem('theme', next ? 'light' : 'dark')
  }

  return (
    <motion.header
      initial={{ y: -8, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="sticky top-0 z-50"
    >
      <motion.div className="fixed left-0 top-0 h-1 w-full origin-left bg-gradient-to-r from-accent via-accent2 to-accent3" style={{ scaleX }} />
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="mt-3 rounded-[1.35rem] border border-border/45 bg-card/72 shadow-glass backdrop-blur-2xl">
          <div className="flex h-16 items-center justify-between gap-3 px-4">
            <a
              href="#"
              className="flex items-center gap-2 rounded-xl px-2 py-1"
              aria-label="SPS home"
            >
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-accent to-accent2 text-sm font-bold text-white shadow-glass">S</span>
              <span className="text-sm font-semibold tracking-wide text-text">SPS</span>
              <span className="hidden text-xs text-text/70 sm:inline">Portfolio</span>
            </a>

            <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
              {navItems.map((item) => {
                const isActive = activeId === item.id
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={
                      'rounded-xl px-3 py-2 text-sm transition-colors ' +
                      (isActive
                        ? 'bg-surface/80 text-text shadow-sm'
                        : 'text-muted hover:bg-surface/60 hover:text-text')
                    }
                  >
                    {item.label}
                  </a>
                )
              })}
            </nav>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => window.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', ctrlKey: true }))}
                className="hidden rounded-xl border border-border/45 bg-surface/55 p-2 text-muted transition hover:text-text lg:inline-flex"
                aria-label="Open command palette"
              >
                <FiCommand size={18} />
              </button>
              <button
                type="button"
                onClick={toggleTheme}
                className="rounded-xl border border-border/45 bg-surface/55 p-2 text-muted transition hover:text-text"
                aria-label="Toggle theme"
              >
                {light ? <FiMoon size={18} /> : <FiSun size={18} />}
              </button>
              <button
                type="button"
                className="rounded-xl border border-border/45 bg-surface/55 p-2 text-text hover:bg-surface/80 md:hidden"
                aria-label={open ? 'Close menu' : 'Open menu'}
                onClick={() => setOpen((v) => !v)}
              >
                {open ? <FiX size={18} /> : <FiMenu size={18} />}
              </button>
            </div>
          </div>

          <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="border-t border-border/60 md:hidden"
            >
              <div className="flex flex-col gap-1 p-3">
                {navItems.map((item) => {
                  const isActive = activeId === item.id
                  return (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={() => setOpen(false)}
                      className={
                        'rounded-xl px-3 py-2 text-sm transition-colors ' +
                      (isActive
                          ? 'bg-surface/80 text-text'
                          : 'text-muted hover:bg-surface/60 hover:text-text')
                      }
                    >
                      {item.label}
                    </a>
                  )
                })}
              </div>
            </motion.div>
          )}
          </AnimatePresence>
        </div>
      </div>
    </motion.header>
  )
}

