import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiArrowUp } from 'react-icons/fi'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 720)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <motion.a
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      href="#"
      className="fixed bottom-5 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-2xl border border-border/50 bg-card/80 text-text shadow-glass backdrop-blur transition hover:-translate-y-1"
      aria-label="Back to top"
    >
      <FiArrowUp />
    </motion.a>
  )
}
