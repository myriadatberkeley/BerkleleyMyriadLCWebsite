import Link from "next/link"
import MyriadHero from "@workspace/ui/components/ui/hero"
import StatsCounter from "@/components/stats-counter"

export default function Home() {
  return (
    <>
      <MyriadHero />

      {/* Partners Marquee */}
      <section className="py-10 bg-[#222240] border-y border-[#675F84]/20 overflow-hidden">
        <p className="text-center text-[0.65rem] tracking-[4px] uppercase text-white/40 mb-8">Our Partners</p>
        <div className="flex w-max animate-marquee">
          {[...Array(2)].map((_, set) => (
            <div key={set} className="flex items-center gap-16 px-8">
              {[
                { src: "/assets/partner-deliberate-clean.png", alt: "deliberate.ai" },
                { src: "/assets/partner-clerky-clean.png", alt: "Clerky" },
                { src: "/assets/partner-parley-clean.png", alt: "Parley" },
                { src: "/assets/partner-billables-clean.png", alt: "billables.ai" },
                { src: "/assets/partner-kim-clean.png", alt: "KIM" },
              ].map((logo) => (
                <div
                  key={`${set}-${logo.alt}`}
                  className="flex-shrink-0 flex items-center justify-center h-10 w-40"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="max-h-8 max-w-full w-auto object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-[#0d0d1a]">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden border border-[#CECAA8]/20 relative">
              <img src="/assets/team-2.jpg" alt="Myriad team" className="w-full object-cover object-[80%_55%] aspect-[3/4] scale-[1.15]" />
              <div className="absolute inset-0 bg-[#0d0d1a]/25 mix-blend-multiply" />
            </div>
            <div>
              <p className="text-[0.7rem] font-semibold tracking-[3px] uppercase text-[#CECAA8] mb-4">About Us</p>
              <h2 className="font-bold text-3xl md:text-4xl text-white mb-6">Bridging Law & Technology at Berkeley</h2>
              <p className="text-white/50 leading-relaxed mb-4">
                <span className="font-serif font-normal tracking-wide">MYRIAD</span> Legal Consulting at Berkeley is a nonprofit student-run consulting organization that partners with law firms and legal departments to drive operational excellence through technology.
              </p>
              <p className="text-white/50 leading-relaxed">
                Our consultants assess current workflows, identify areas for improved efficiency, and recommend automation tools and technologies to enhance productivity and client service.
              </p>
            </div>
          </div>

          {/* Stats */}
          <StatsCounter />
        </div>
      </section>

      {/* Team Photo Banner */}
      <section className="bg-[#0d0d1a]">
        <div className="max-w-[1200px] mx-auto px-8 pb-20">
          <div className="rounded-xl overflow-hidden border border-[#675F84]/20 relative">
            <img src="/assets/team-1.jpg" alt="Myriad team smiling" className="w-full object-contain" />
            <div className="absolute inset-0 bg-[#0d0d1a]/25 mix-blend-multiply" />
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-[#222240]">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <p className="text-[0.7rem] font-semibold tracking-[3px] uppercase text-[#CECAA8] mb-4">What We Do</p>
            <h2 className="font-bold text-3xl md:text-4xl text-white mb-4">Our Core Services</h2>
            <p className="text-white/50">We sit at the intersection of legal practice and technology, delivering actionable insights to modernize law firm operations.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "⚙", title: "Workflow Assessment", desc: "Comprehensive analysis of existing legal workflows to identify bottlenecks, redundancies, and opportunities for automation." },
              { icon: "💻", title: "Legal Tech Implementation", desc: "Research, evaluate, and recommend cutting-edge legal technology platforms tailored to your firm's specific needs." },
              { icon: "🔒", title: "Compliance & Security", desc: "Navigate SOC 2, GDPR, and other regulatory frameworks to ensure your technology stack meets compliance standards." },
            ].map((s) => (
              <div key={s.title} className="bg-[#0d0d1a] border border-[#675F84]/20 rounded-lg p-8 hover:border-[#675F84] hover:-translate-y-1 transition-all relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#675F84] to-[#CECAA8] scale-x-0 group-hover:scale-x-100 origin-left transition-transform" />
                <span aria-hidden="true" className="text-2xl block mb-4">{s.icon}</span>
                <h3 className="font-bold text-lg text-white mb-3">{s.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/services" className="inline-flex px-8 py-3 rounded border border-[#CECAA8]/40 text-[#CECAA8] text-sm hover:bg-[#CECAA8] hover:text-[#0d0d1a] transition-all">
              Collaborate With Us
            </Link>
          </div>
        </div>
      </section>

      {/* Where We Go - Logo Garden */}
      <section className="py-20 bg-[#0d0d1a]">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <p className="text-[0.7rem] font-semibold tracking-[3px] uppercase text-[#CECAA8] mb-4">Our Network</p>
            <h2 className="font-bold text-3xl md:text-4xl text-white mb-4">Where We Go</h2>
            <p className="text-white/50">Companies, firms, and public offices our consultants and students have gone on to work at.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-x-10 gap-y-12 items-center justify-items-center">
            {[
              { src: "/assets/logo-cisco.png", alt: "Cisco", tint: true, size: "max-h-16" },
              { src: "/assets/logo-house.png", alt: "U.S. House of Representatives", tint: false, size: "max-h-24" },
              { src: "/assets/logo-aclu.png", alt: "ACLU", tint: true, size: "max-h-16" },
              { src: "/assets/logo-epa.png", alt: "U.S. Environmental Protection Agency", tint: false, size: "max-h-24" },
              { src: "/assets/logo-cambridge.png", alt: "University of Cambridge", tint: false, size: "max-h-24" },
              { src: "/assets/logo-assembly.png", alt: "California State Assembly", tint: false, size: "max-h-24" },
              { src: "/assets/logo-berkeleylab.png", alt: "Berkeley Lab", tint: true, size: "max-h-24" },
              { src: "/assets/logo-dlapiper.png", alt: "DLA Piper", tint: true, size: "max-h-16" },
            ].map((logo) => (
              <div
                key={logo.alt}
                className="flex items-center justify-center h-24 w-full"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className={`max-w-full object-contain opacity-80 hover:opacity-100 transition-opacity ${logo.size} ${logo.tint ? "brightness-0 invert" : ""}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
