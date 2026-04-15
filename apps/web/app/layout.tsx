import localFont from "next/font/local"
import Link from "next/link"

import "@workspace/ui/globals.css"
import { cn } from "@workspace/ui/lib/utils"

const laluxes = localFont({
  src: "../public/fonts/LaLuxes.otf",
  variable: "--font-serif",
  display: "swap",
})

const telegraf = localFont({
  src: "../public/fonts/PPTelegraf-Regular.otf",
  variable: "--font-sans",
  display: "swap",
})

export const metadata = {
  metadataBase: new URL("https://myriadlc.org"),
  title: {
    default: "Myriad Legal Consulting at Berkeley",
    template: "%s · Myriad Legal Consulting",
  },
  description: "UC Berkeley's premier legal consulting organization at the intersection of legaltech, business, and law.",
  icons: { icon: "/assets/logo-icon.png" },
  openGraph: {
    title: "Myriad Legal Consulting at Berkeley",
    description: "UC Berkeley's premier legal consulting organization at the intersection of legaltech, business, and law.",
    url: "https://myriadlc.org",
    siteName: "Myriad Legal Consulting",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Myriad Legal Consulting at Berkeley",
    description: "UC Berkeley's premier legal consulting organization at the intersection of legaltech, business, and law.",
  },
}

export const viewport = {
  themeColor: "#0d0d1a",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          "antialiased bg-[#0d0d1a] text-white min-h-screen",
          telegraf.variable,
          laluxes.variable,
          "font-sans"
        )}
      >
        {children}
        <Footer />
      </body>
    </html>
  )
}

function Footer() {
  return (
    <footer className="bg-[#222240] border-t border-[#675F84]/20 py-10">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <img src="/assets/logo.svg" alt="Myriad" className="h-8" />
            <span className="text-white/70 text-sm"><span className="font-serif font-normal tracking-wide">MYRIAD</span> Legal Consulting</span>
          </div>
          <div className="flex gap-8 text-sm text-white/50">
            <Link href="/" className="hover:text-[#CECAA8] transition-colors">Home</Link>
            <Link href="/services" className="hover:text-[#CECAA8] transition-colors">Collaborate</Link>
            <Link href="/projects" className="hover:text-[#CECAA8] transition-colors">Projects</Link>
            <Link href="/about" className="hover:text-[#CECAA8] transition-colors">About</Link>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-[#675F84]/10 text-center text-xs text-white/40">
          <p>
            admin@myriadlc.org &nbsp;&bull;&nbsp;
            <a href="https://www.instagram.com/myriadatberkeley/" target="_blank" rel="noopener noreferrer" className="text-[#CECAA8] hover:underline">Instagram</a> &nbsp;&bull;&nbsp;
            <a href="https://www.linkedin.com/company/myriad-legal-consulting/" target="_blank" rel="noopener noreferrer" className="text-[#CECAA8] hover:underline">LinkedIn</a>
          </p>
          <p className="mt-2">&copy; {new Date().getFullYear()} <span className="font-serif font-normal tracking-wide">MYRIAD</span> Legal Consulting at Berkeley. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
