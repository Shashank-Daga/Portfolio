import { Container } from "@/components/ui/Container";

export default function Contact() {
    return (
        <section id="achievements" className="px-6 py-24 sm:px-8 lg:px-10">

            <Container>

                <div className="mb-12 flex flex-col gap-3">
                    <div className="inline-flex w-fit items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#E8A33D]">
                        Achievements & Leadership
                    </div>
                    <h2 className="text-4xl font-extrabold tracking-[-0.03em] text-[#F8FAFC] sm:text-5xl">
                        Beyond the <span className="text-[#E8A33D]">classroom.</span>
                    </h2>
                </div>

                <div id="contact" className="mt-12 rounded-[36px] border border-white/10 bg-[#0B0E12]/80 p-8 shadow-[0_24px_100px_rgba(0,0,0,0.28)] backdrop-blur-xl">

                    <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">

                        <div className="max-w-2xl">
                            <div className="inline-flex w-fit items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#E8A33D]">
                                Let&apos;s Talk
                            </div>
                            <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.03em] text-[#F8FAFC] sm:text-5xl">
                                Let&apos;s build something
                                <br />
                                <span className="text-[#E8A33D]">meaningful together.</span>
                            </h2>
                            <p className="mt-5 text-base leading-8 text-slate-300">
                                I&apos;m actively seeking full-time opportunities as a Data Engineer, Backend Developer, or Full Stack Engineer. Open to projects, collaborations, or just a good tech conversation.
                            </p>
                        </div>

                        <div className="space-y-3">
                            <a href="mailto:shashankdaga2510@gmail.com" className="flex items-center gap-4 rounded-[24px] border border-white/10 bg-white/5 p-4 transition hover:border-[#E8A33D] hover:bg-[#E8A33D]/10" id="contact-email">
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E8A33D]/15 text-[#E8A33D]">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5" aria-hidden="true">
                                        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div className="flex-1">
                                    <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Email</div>
                                    <div className="mt-1 text-base font-semibold text-[#F8FAFC]">shashankdaga2510@gmail.com</div>
                                </div>
                            </a>

                            <div className="flex flex-wrap gap-3">
                                <a href="https://github.com/Shashank-Daga" target="_blank" rel="noopener noreferrer" className="flex flex-1 items-center gap-3 rounded-[24px] border border-white/10 bg-white/5 p-4 transition hover:border-[#E8A33D] hover:bg-[#E8A33D]/10" id="contact-github">
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-[#F8FAFC]" aria-label="GitHub">
                                        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.419 2.865 8.166 6.839 9.489.5.09.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.455-1.157-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.532 1.03 1.532 1.03.891 1.529 2.341 1.089 2.91.833.091-.647.349-1.086.635-1.337-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.683-.103-.253-.447-1.27.098-2.646 0 0 .84-.269 2.75 1.025A9.548 9.548 0 0112 6.836c.85.004 1.705.114 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.376.202 2.394.1 2.646.64.699 1.026 1.591 1.026 2.683 0 3.841-2.337 4.687-4.565 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                                    </svg>
                                    <span className="text-sm font-semibold text-[#F8FAFC]">GitHub</span>
                                </a>
                                <a href="https://www.linkedin.com/in/shashank-daga-635466270/" target="_blank" rel="noopener noreferrer" className="flex flex-1 items-center gap-3 rounded-[24px] border border-white/10 bg-white/5 p-4 transition hover:border-[#E8A33D] hover:bg-[#E8A33D]/10" id="contact-linkedin">
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-[#F8FAFC]" aria-label="LinkedIn">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                    <span className="text-sm font-semibold text-[#F8FAFC]">LinkedIn</span>
                                </a>
                            </div>
                            <div className="flex items-center gap-3 rounded-[24px] border border-white/10 bg-white/5 p-4 text-sm font-semibold text-[#F8FAFC]" id="contact-phone">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5" aria-hidden="true">
                                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                                </svg>
                                <span>+91 8446542510</span>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
                
            </Container>

        </section>
    );
}
