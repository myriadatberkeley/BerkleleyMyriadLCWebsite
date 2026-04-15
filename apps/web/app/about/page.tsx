import Navbar from "@/components/navbar"
import StatsCounter from "@/components/stats-counter"

export const metadata = {
  title: "About",
  description: "Meet MYRIAD Legal Consulting at Berkeley — UC Berkeley's nonprofit student-run legal consulting organization.",
}

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="min-h-[45vh] flex items-center pt-24 bg-gradient-to-br from-[#0d0d1a] via-[#222240] to-[#4c4566] relative overflow-hidden">
        <div className="absolute top-[-40%] right-[-15%] w-[60%] h-[140%] bg-[radial-gradient(ellipse_at_60%_40%,rgba(100,95,135,0.2),transparent_60%)]" />
        <div className="max-w-[1200px] mx-auto px-8 relative z-10">
          <p className="text-[0.7rem] font-semibold tracking-[3px] uppercase text-[#CECAA8] mb-4">Who We Are</p>
          <h1 className="font-bold text-5xl md:text-6xl text-white mb-4">About <span className="font-serif font-normal tracking-wide text-4xl md:text-5xl">MYRIAD</span></h1>
          <p className="text-white/50 text-lg max-w-xl">
            UC Berkeley&apos;s premier legal consulting organization at the intersection of law, business, and technology.
          </p>
        </div>
      </section>

      {/* Our Mission + Photos */}
      <section className="py-20 bg-[#222240]">
        <div className="max-w-[800px] mx-auto px-8">
          <h2 className="font-bold text-3xl text-white mb-6">Our Mission</h2>
          <p className="text-white/60 leading-relaxed mb-6">
            <span className="font-serif font-normal tracking-wide">MYRIAD</span> Legal Consulting at Berkeley is a nonprofit student-run consulting organization that partners with law firms and legal departments to drive operational excellence through technology.
          </p>
          <p className="text-white/60 leading-relaxed mb-6">
            Our consultants assess current workflows, identify areas for improved efficiency, and recommend automation tools and technologies to enhance productivity and client service.
          </p>
          <StatsCounter />

          {/* Photos — varied sizes */}
          <div className="rounded-lg overflow-hidden border border-[#675F84]/20 relative mb-3">
            <img src="/assets/about-1.jpg" alt="Myriad consulting team group photo" className="w-full object-contain" />
            <div className="absolute inset-0 bg-[#0d0d1a]/25 mix-blend-multiply" />
          </div>
          <div className="grid grid-cols-[2fr_3fr] gap-3">
            <div className="rounded-lg overflow-hidden border border-[#675F84]/20 relative">
              <img src="/assets/about-3.jpg" alt="Myriad team at work" className="w-full h-full object-cover object-center" />
              <div className="absolute inset-0 bg-[#0d0d1a]/25 mix-blend-multiply" />
            </div>
            <div className="rounded-lg overflow-hidden border border-[#675F84]/20 relative">
              <img src="/assets/about-2.jpg" alt="Myriad team at a Berkeley event" className="w-full h-full object-cover object-center scale-[1.3]" />
              <div className="absolute inset-0 bg-[#0d0d1a]/25 mix-blend-multiply" />
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors & Partners */}
      <section className="py-20 bg-[#0d0d1a]">
        <div className="max-w-[1200px] mx-auto px-8">
          {/* ASUC */}
          <div className="text-center max-w-xl mx-auto mb-16">
            <p className="text-[0.7rem] font-semibold tracking-[3px] uppercase text-[#CECAA8] mb-4">Our Sponsor</p>
            <h2 className="font-bold text-3xl text-white mb-4">Sponsored By</h2>
            <p className="text-white/50 mb-8">
              <span className="font-serif font-normal tracking-wide">MYRIAD</span> is proudly sponsored by the student government at UC Berkeley.
            </p>
            <div className="inline-flex flex-col items-center bg-[#222240] border border-[#675F84]/20 rounded-lg px-12 py-8 hover:border-[#CECAA8] transition-colors">
              <img src="/assets/logo-asuc.png" alt="ASUC" className="h-44 w-auto object-contain mb-4" />
              <span className="block text-[0.65rem] tracking-[2px] uppercase text-white/50">Associated Students of the University of California</span>
            </div>
          </div>

          {/* Client Firms */}
          <div className="text-center max-w-xl mx-auto mb-8">
            <p className="text-[0.7rem] font-semibold tracking-[3px] uppercase text-[#CECAA8] mb-4">Clients</p>
            <h2 className="font-bold text-3xl text-white mb-4">Firms We&apos;ve Worked With</h2>
          </div>
          <div className="grid grid-cols-2 gap-6 max-w-xl mx-auto">
            {[
              { name: "BGD&O LLP", type: "Law Firm" },
              { name: "Bankhead & Howard", type: "Law Firm" },
            ].map((p) => (
              <div key={p.name} className="bg-[#222240] border border-[#675F84]/20 rounded-lg p-8 text-center hover:border-[#CECAA8] hover:-translate-y-1 transition-all">
                <span className="font-bold text-lg text-[#CECAA8]">{p.name}</span>
                <span className="block text-[0.6rem] tracking-[2px] uppercase text-white/40 mt-2">{p.type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Profiles - Airtable Embed */}
      <section className="py-20 bg-[#222240]">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <p className="text-[0.7rem] font-semibold tracking-[3px] uppercase text-[#CECAA8] mb-4">The Team</p>
            <h2 className="font-bold text-3xl text-white mb-4">Our People</h2>
            <p className="text-white/50">Meet the consultants behind <span className="font-serif font-normal tracking-wide">MYRIAD</span>.</p>
          </div>
          <div className="rounded-lg overflow-hidden border border-[#675F84]/20">
            <iframe
              title="Myriad team profiles"
              className="airtable-embed"
              src="https://airtable.com/embed/appiuKR8imkO1tagD/shrt3jfuhItSEm3uI"
              width="100%"
              height="533"
              style={{ background: "transparent", border: "none" }}
            />
          </div>
        </div>
      </section>
    </>
  )
}
