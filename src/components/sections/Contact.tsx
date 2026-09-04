import { Container } from "@/components/ui/Container";

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24 sm:px-8 lg:px-10 bg-[#0C0F12]">
    {/* <section id="contact" className="px-6 py-24 sm:px-8 lg:px-10 bg-[#0F1318]"> */}

      <Container>

        <div className="space-y-10">

          <div className="max-w-2xl space-y-5">

            <div className="inline-flex w-fit items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#E8A33D]">
              <span className="h-px w-8 bg-[#E8A33D]" />
              CONTACT
            </div>
            
            <h2 className="text-4xl font-extrabold tracking-[-0.03em] text-[#F8FAFC] sm:text-5xl">
              Let&apos;s <span className="text-[#E8A33D]">Build Together</span>
            </h2>
            <p className="max-w-xl text-base leading-8 text-slate-300">
              I&apos;m open to full-time opportunities, internships, and freelance projects. Whether you're hiring, looking for someone to build your next project, or simply want to discuss an idea — my inbox is open.
            </p>

          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            
            <a
              href="mailto:shashankdaga2510@gmail.com"
              id="contact-email"
              className="group flex items-center justify-between rounded-[24px] border border-white/10 bg-white/5 p-6 transition hover:border-[#E8A33D] hover:bg-[#E8A33D]/10"
            >
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Email</div>
                <div className="mt-3 text-base font-semibold text-[#F8FAFC]">shashankdaga2510@gmail.com</div>
              </div>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5 text-[#E8A33D]" aria-hidden="true">
                <path d="M5 12h14m-4-4l4 4-4 4" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/shashank-daga-635466270/"
              target="_blank"
              rel="noopener noreferrer"
              id="contact-linkedin"
              className="group flex items-center justify-between rounded-[24px] border border-white/10 bg-white/5 p-6 transition hover:border-[#E8A33D] hover:bg-[#E8A33D]/10"
            >
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">LinkedIn</div>
                <div className="mt-3 text-base font-semibold text-[#F8FAFC]">Shashank Daga</div>
              </div>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5 text-[#E8A33D]" aria-hidden="true">
                <path d="M5 12h14m-4-4l4 4-4 4" />
              </svg>
            </a>

            <a
              href="https://github.com/Shashank-Daga"
              target="_blank"
              rel="noopener noreferrer"
              id="contact-github"
              className="group flex items-center justify-between rounded-[24px] border border-white/10 bg-white/5 p-6 transition hover:border-[#E8A33D] hover:bg-[#E8A33D]/10"
            >
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">GitHub</div>
                <div className="mt-3 text-base font-semibold text-[#F8FAFC]">Shashank-Daga</div>
              </div>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5 text-[#E8A33D]" aria-hidden="true">
                <path d="M5 12h14m-4-4l4 4-4 4" />
              </svg>
            </a>

            <a
              href="tel:+918446542510"
              id="contact-phone"
              className="group flex items-center justify-between rounded-[24px] border border-white/10 bg-white/5 p-6 transition hover:border-[#E8A33D] hover:bg-[#E8A33D]/10"
            >
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Phone</div>
                <div className="mt-3 text-base font-semibold text-[#F8FAFC]">+91 8446542510</div>
              </div>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5 text-[#E8A33D]" aria-hidden="true">
                <path d="M5 12h14m-4-4l4 4-4 4" />
              </svg>
            </a>

          </div>

        </div>

      </Container>
      
    </section>
  );
}
