"use client"
import { useEffect, useRef, useState } from "react"

type Stat = {
  /** Final numeric value to count up to. */
  value: number
  /** Prefix shown before the number (e.g. "Est. "). */
  prefix?: string
  /** Suffix shown after the number (e.g. "+"). */
  suffix?: string
  /** Label under the number. */
  label: string
  /** Optional override so "Est. 2024" doesn't count from 0. */
  startFrom?: number
  /** Animation duration in ms. */
  duration?: number
}

const STATS: Stat[] = [
  { value: 5, suffix: "+", label: "Client Engagements" },
  { value: 15, suffix: "+", label: "Active Consultants" },
  { value: 10, suffix: "+", label: "Industry Partners" },
  { value: 2024, prefix: "Est. ", label: "Founded at Berkeley", startFrom: 2000 },
]

function Counter({ stat, active }: { stat: Stat; active: boolean }) {
  const [display, setDisplay] = useState(stat.startFrom ?? 0)

  useEffect(() => {
    if (!active) return
    const from = stat.startFrom ?? 0
    const to = stat.value
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    if (prefersReduced) {
      setDisplay(to)
      return
    }
    const duration = stat.duration ?? 1400
    const start = performance.now()
    let raf = 0
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration)
      // easeOutCubic
      const eased = 1 - Math.pow(1 - t, 3)
      const current = Math.round(from + (to - from) * eased)
      setDisplay(current)
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [active, stat.value, stat.startFrom, stat.duration])

  return (
    <span className="font-bold text-3xl text-[#CECAA8]">
      {stat.prefix}
      {display}
      {stat.suffix}
    </span>
  )
}

export default function StatsCounter() {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(true)
            io.disconnect()
            break
          }
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -10% 0px" }
    )
    io.observe(node)
    return () => io.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 mb-12"
    >
      {STATS.map((s) => (
        <div
          key={s.label}
          className="flex flex-col items-center justify-center text-center p-6 min-h-[140px] bg-[#222240] rounded-lg border border-[#675F84]/20 hover:border-[#CECAA8] transition-colors"
        >
          <Counter stat={s} active={active} />
          <span className="block text-xs text-white/40 mt-2">{s.label}</span>
        </div>
      ))}
    </div>
  )
}
