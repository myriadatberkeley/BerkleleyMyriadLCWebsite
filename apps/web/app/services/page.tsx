import Navbar from "@/components/navbar"

export const metadata = {
  title: "Collaborate",
  description: "Work with MYRIAD — legal tech audits, workflow optimization, technology implementation, and compliance consulting for law firms.",
}

export default function ServicesPage() {
  const services = [
    { icon: "⚖", title: "Legal Tech Audits", desc: "We conduct thorough assessments of your firm's current technology stack, evaluating tools across case management, document review, e-discovery, and practice management to identify gaps and opportunities." },
    { icon: "⚙", title: "Workflow Optimization", desc: "Our consultants map your operational workflows end-to-end, identifying bottlenecks and redundancies. We recommend process improvements and automation strategies to streamline daily operations." },
    { icon: "💻", title: "Technology Implementation", desc: "From vendor evaluation to rollout planning, we guide firms through selecting and implementing the right legal tech platforms — billing systems, research tools, document management, and more." },
    { icon: "📊", title: "Billing & Revenue Systems", desc: "We analyze billing workflows and recommend modern time-tracking and invoicing solutions that reduce administrative burden and improve revenue capture across your practice." },
    { icon: "🔒", title: "Compliance & Cybersecurity", desc: "We help firms navigate SOC 2, GDPR, and other compliance frameworks, ensuring your technology infrastructure meets regulatory standards for data protection and client confidentiality." },
    { icon: "🔍", title: "AI-Powered Legal Research", desc: "We evaluate and recommend AI-driven research platforms that enhance accuracy, reduce research time, and give your attorneys a competitive edge in case preparation." },
  ]

  return (
    <>
      <Navbar />
      {/* Page Hero */}
      <section className="min-h-[45vh] flex items-center pt-24 bg-gradient-to-br from-[#0d0d1a] via-[#222240] to-[#4c4566] relative overflow-hidden">
        <div className="absolute top-[-40%] right-[-15%] w-[60%] h-[140%] bg-[radial-gradient(ellipse_at_60%_40%,rgba(100,95,135,0.2),transparent_60%)]" />
        <div className="max-w-[1200px] mx-auto px-8 relative z-10">
          <p className="text-[0.7rem] font-semibold tracking-[3px] uppercase text-[#CECAA8] mb-4">What We Do</p>
          <h1 className="font-bold text-5xl md:text-6xl text-white mb-4">Collaborate</h1>
          <p className="text-white/50 text-lg max-w-xl">We deliver tailored legal technology solutions that help law firms operate more efficiently, securely, and competitively.</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-[#222240]">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="bg-[#0d0d1a] border border-[#675F84]/20 rounded-lg p-8 hover:border-[#675F84] hover:-translate-y-1 transition-all relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#675F84] to-[#CECAA8] scale-x-0 group-hover:scale-x-100 origin-left transition-transform" />
                <span aria-hidden="true" className="text-2xl block mb-4">{s.icon}</span>
                <h3 className="font-bold text-lg text-white mb-3">{s.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-[#0d0d1a]">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <p className="text-[0.7rem] font-semibold tracking-[3px] uppercase text-[#CECAA8] mb-4">Our Process</p>
            <h2 className="font-bold text-3xl md:text-4xl text-white mb-4">How We Work</h2>
            <p className="text-white/50">Every engagement follows a structured methodology designed to maximize value and knowledge transfer.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { num: "01", label: "Discovery & Questionnaire" },
              { num: "02", label: "Workflow Analysis" },
              { num: "03", label: "Solution Design" },
              { num: "04", label: "Deliverable & Handoff" },
            ].map((s) => (
              <div key={s.num} className="text-center p-6 bg-[#222240] rounded-lg border border-[#675F84]/20 hover:border-[#CECAA8] transition-colors">
                <span className="font-bold text-3xl text-[#CECAA8]">{s.num}</span>
                <span className="block text-xs text-white/40 mt-2">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 bg-[#222240]">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-[0.7rem] font-semibold tracking-[3px] uppercase text-[#CECAA8] mb-4">Work With Us</p>
              <h2 className="font-bold text-3xl md:text-4xl text-white mb-6">Let's Start a Conversation</h2>
              <p className="text-white/50 leading-relaxed mb-4">
                Whether you're a law firm looking to modernize operations, a legal tech company seeking user feedback, or an organization interested in partnering with <span className="font-serif font-normal tracking-wide">MYRIAD</span>, we'd love to hear from you.
              </p>
              <p className="text-white/50 leading-relaxed mb-4">
                Prospective members — UC Berkeley students interested in joining our team as consultants — are also encouraged to reach out about recruitment timelines and the application process.
              </p>
              <p className="text-white/50 leading-relaxed mb-8">
                Fill out the form and our team will get back to you within 2–3 business days.
              </p>
              <div className="flex flex-col gap-4 text-sm">
                <div className="flex items-center gap-3 text-white/50">
                  <span className="w-8 h-8 rounded-full bg-[#675F84]/30 flex items-center justify-center text-[#CECAA8] text-xs">@</span>
                  <span>admin@myriadlc.org</span>
                </div>
                <div className="flex items-center gap-3 text-white/50">
                  <span className="w-8 h-8 rounded-full bg-[#675F84]/30 flex items-center justify-center text-[#CECAA8] text-xs">in</span>
                  <a href="https://www.linkedin.com/company/myriad-legal-consulting/" target="_blank" rel="noopener noreferrer" className="hover:text-[#CECAA8] transition-colors">LinkedIn</a>
                </div>
                <div className="flex items-center gap-3 text-white/50">
                  <span className="w-8 h-8 rounded-full bg-[#675F84]/30 flex items-center justify-center text-[#CECAA8] text-xs">ig</span>
                  <a href="https://www.instagram.com/myriadatberkeley/" target="_blank" rel="noopener noreferrer" className="hover:text-[#CECAA8] transition-colors">@myriadatberkeley</a>
                </div>
              </div>
            </div>

            <form
              action="https://formsubmit.co/admin@myriadlc.org"
              method="POST"
              className="bg-[#0d0d1a] border border-[#675F84]/20 rounded-xl p-8 flex flex-col gap-5"
            >
              {/* FormSubmit config */}
              <input type="hidden" name="_subject" value="New inquiry from MYRIAD website" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_next" value="/services#contact" />
              <input
                type="text"
                name="_honey"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
              />

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs text-white/50 uppercase tracking-[2px]">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Your name"
                    className="bg-[#222240] border border-[#675F84]/30 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/55 focus:outline-none focus:border-[#CECAA8] transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs text-white/50 uppercase tracking-[2px]">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                    className="bg-[#222240] border border-[#675F84]/30 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/55 focus:outline-none focus:border-[#CECAA8] transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="organization" className="text-xs text-white/50 uppercase tracking-[2px]">Organization</label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  placeholder="Firm or company name"
                  className="bg-[#222240] border border-[#675F84]/30 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/55 focus:outline-none focus:border-[#CECAA8] transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="interest" className="text-xs text-white/50 uppercase tracking-[2px]">I'm interested in</label>
                <select
                  id="interest"
                  name="interest"
                  className="bg-[#222240] border border-[#675F84]/30 rounded-lg px-4 py-3 text-sm text-white/70 focus:outline-none focus:border-[#CECAA8] transition-colors appearance-none"
                >
                  <option value="Consultation">Consultation</option>
                  <option value="Sponsorship">Sponsorship</option>
                  <option value="Partnership">Partnership</option>
                  <option value="Joining MYRIAD (Prospective Member)">Joining MYRIAD (Prospective Member)</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs text-white/50 uppercase tracking-[2px]">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us about your needs..."
                  className="bg-[#222240] border border-[#675F84]/30 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/55 focus:outline-none focus:border-[#CECAA8] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-full bg-gradient-to-r from-[#675F84] to-[#7f7898] text-white font-semibold text-sm hover:shadow-lg hover:shadow-[#675F84]/20 transition-all mt-2"
              >
                Send Message
              </button>
              <p className="text-[0.65rem] text-white/40 text-center mt-1">
                By submitting this form you agree to be contacted by <span className="font-serif font-normal tracking-wide">MYRIAD</span> regarding your inquiry.
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
