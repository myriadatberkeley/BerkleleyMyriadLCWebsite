"use client"
import { useState } from "react"
import { MeshGradient } from "@paper-design/shaders-react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function MyriadHero() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Collaborate", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/about" },
  ]

  return (
    <div className="min-h-screen bg-[#0d0d1a] relative overflow-hidden">
      {/* Mesh Gradient Background - Purple/Gold theme */}
      <MeshGradient
        className="absolute inset-0 w-full h-full"
        colors={["#0d0d1a", "#675F84", "#4c4566", "#1a1a2e", "#CECAA8"]}
        speed={0.25}
      />

      {/* Header / Navigation */}
      <header className="relative z-30 flex items-center justify-between px-5 sm:px-8 py-4 sm:py-5">
        <motion.div
          className="flex items-center gap-3 group cursor-pointer"
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Link href="/" className="flex items-center gap-0">
            <img
              src="/assets/logo.svg"
              alt="Myriad"
              className="h-10 sm:h-14 w-auto drop-shadow-lg mix-blend-screen"
            />
            <div>
              <span className="text-white font-serif text-base sm:text-lg tracking-wide font-bold">MYRIAD</span>
              <span className="block text-[#CECAA8] text-[0.55rem] sm:text-[0.6rem] tracking-[3px] uppercase">
                Legal Consulting
              </span>
            </div>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex items-center space-x-1">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-white/80 hover:text-[#CECAA8] text-xs font-light px-4 py-2 rounded-full hover:bg-white/5 transition-all duration-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className="sm:hidden flex flex-col gap-[5px] p-2 -mr-2"
        >
          <span className={`block w-6 h-[2px] bg-white transition-transform ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block w-6 h-[2px] bg-white transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-[2px] bg-white transition-transform ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </header>

      {/* Mobile menu panel */}
      {menuOpen && (
        <div className="sm:hidden absolute top-[68px] left-0 right-0 z-30 bg-[#0d0d1a]/95 backdrop-blur-xl border-b border-[#675F84]/20 px-6 py-5 flex flex-col gap-3">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-white/80 hover:text-[#CECAA8] text-base py-1"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}

      {/* Hero Content */}
      <main className="absolute top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-12 left-5 right-5 sm:left-8 sm:right-auto md:left-12 z-20 max-w-2xl">
        <div className="text-center sm:text-left">
          <motion.div
            className="mb-6 leading-none"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.h1
              className="text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] font-normal tracking-wide font-serif"
              style={{
                background: "linear-gradient(135deg, #CECAA8 0%, #e0dcc4 25%, #ffffff 50%, #7f7898 75%, #CECAA8 100%)",
                backgroundSize: "400% 400%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              MYRIAD
            </motion.h1>
            <p className="text-base sm:text-2xl md:text-3xl lg:text-4xl font-normal text-white tracking-[0.2em] sm:tracking-[0.35em] uppercase mt-1">
              Legal Consulting
            </p>
          </motion.div>

          <motion.p
            className="text-sm sm:text-lg font-light text-white/60 mb-8 leading-relaxed max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            UC Berkeley&apos;s premier legal consulting organization. We partner with
            law firms to identify inefficiencies and implement cutting-edge technology solutions.
          </motion.p>

        </div>
      </main>

    </div>
  )
}
