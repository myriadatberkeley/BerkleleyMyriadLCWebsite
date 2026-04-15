import Navbar from "@/components/navbar"

export const metadata = {
  title: "Projects",
  description: "Selected consulting engagements where MYRIAD has helped law firms and legal departments modernize their operations.",
}

export default function ProjectsPage() {
  const projects = [
    { tag: "Legal Tech Consulting", title: "BGD&O LLP", desc: "Conducted a comprehensive legal technology audit for BGD&O LLP, identifying inefficiencies in billing software, legal research workflows, and file analysis processes. Delivered tailored recommendations for SOC 2 and GDPR compliant solutions." },
    { tag: "AI & Technology Assessment", title: "Bankhead & Howard — Paxton.AI & PointOne", desc: "Partnered with Bankhead & Howard to evaluate Paxton.AI's legal research capabilities and PointOne's document management and automation platform. Delivered a detailed report on integration opportunities and actionable recommendations to streamline document workflows and reduce administrative overhead." },
  ]

  return (
    <>
      <Navbar />
      <section className="min-h-[45vh] flex items-center pt-24 bg-gradient-to-br from-[#0d0d1a] via-[#222240] to-[#4c4566] relative overflow-hidden">
        <div className="absolute bottom-[-30%] left-[-10%] w-[50%] h-[100%] bg-[radial-gradient(ellipse_at_40%_60%,rgba(207,202,168,0.1),transparent_55%)]" />
        <div className="max-w-[1200px] mx-auto px-8 relative z-10">
          <p className="text-[0.7rem] font-semibold tracking-[3px] uppercase text-[#CECAA8] mb-4">Our Work</p>
          <h1 className="font-bold text-5xl md:text-6xl text-white mb-4">Projects</h1>
          <p className="text-white/50 text-lg max-w-xl">A selection of consulting engagements where we've helped law firms and legal departments modernize their operations.</p>
        </div>
      </section>

      <section className="py-20 bg-[#0d0d1a]">
        <div className="max-w-[1200px] mx-auto px-8">
          {/* Team Photo */}
          <div className="rounded-xl overflow-hidden border border-[#675F84]/20 mb-12 relative">
            <img src="/assets/photo1.jpg" alt="Myriad consulting team" className="w-full object-contain" />
            <div className="absolute inset-0 bg-[#0d0d1a]/25 mix-blend-multiply" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((p) => (
              <div key={p.title} className="bg-[#222240] border border-[#675F84]/20 rounded-lg overflow-hidden hover:border-[#CECAA8] hover:-translate-y-1 transition-all group">
                <div className="p-7">
                  <span className="inline-block text-[0.6rem] font-semibold tracking-[2px] uppercase text-[#CECAA8] bg-[#CECAA8]/10 px-3 py-1 rounded mb-3">{p.tag}</span>
                  <h3 className="font-bold text-xl text-white mb-3">{p.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0d0d1a]">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="bg-gradient-to-br from-[#4c4566] to-[#0d0d1a] rounded-xl p-12 md:p-16 text-center border border-[#675F84]/25">
            <h2 className="font-bold text-3xl text-white mb-4">Want <span className="font-serif font-normal tracking-wide">MYRIAD</span> on Your Team?</h2>
            <p className="text-white/50 mb-8 max-w-lg mx-auto">We're always looking for new client engagements. If your firm is ready to modernize, let's start a conversation.</p>
            <a href="mailto:admin@myriadlc.org" className="inline-flex px-10 py-4 rounded-full bg-gradient-to-r from-[#675F84] to-[#7d78a0] text-white font-semibold text-sm hover:shadow-lg transition-all">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
