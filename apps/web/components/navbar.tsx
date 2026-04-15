"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const links = [
    { label: "Home", href: "/" },
    { label: "Collaborate", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/about" },
  ]

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0d0d1a]/85 backdrop-blur-xl border-b border-[#675F84]/15">
      <div className="max-w-[1200px] mx-auto px-8 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-0">
          <img src="/assets/logo.svg" alt="Myriad" className="h-12 mix-blend-screen" />
          <div>
            <span className="text-white font-serif text-base tracking-wide font-bold">MYRIAD</span>
            <span className="block text-[#CECAA8] text-[0.55rem] tracking-[3px] uppercase font-sans">Legal Consulting</span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-xs font-light px-4 py-2 rounded-full transition-all duration-200 ${
                pathname === l.href
                  ? "text-[#CECAA8] bg-white/5"
                  : "text-white/70 hover:text-[#CECAA8] hover:bg-white/5"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          className="md:hidden flex flex-col gap-[5px]"
          onClick={() => setOpen(!open)}
        >
          <span className={`block w-6 h-[2px] bg-white transition-transform ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block w-6 h-[2px] bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-[2px] bg-white transition-transform ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#0d0d1a]/98 backdrop-blur-xl border-t border-[#675F84]/15 px-8 py-6 flex flex-col gap-4">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-white/80 hover:text-[#CECAA8] text-lg">
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
