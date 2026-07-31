import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import CommandPalette from './components/CommandPalette'
import ScrollToTop from './components/ScrollToTop'


export default function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-bg bg-mesh text-text">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-card focus:px-3 focus:py-2 focus:text-text"
      >
        Skip to content
      </a>

      <Navbar />
      <CommandPalette />

      <main id="main" className="relative">
        <Hero />
        
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <ScrollToTop />
    </div>
  )
}

