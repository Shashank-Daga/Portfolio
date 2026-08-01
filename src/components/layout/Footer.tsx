import Link from "next/link";
// import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/6 bg-[#0B0E12]">
      <div className="mx-auto max-w-[1160px] px-7 pt-10">
        {/* Top */}
        <div className="flex flex-wrap items-center justify-between gap-6 border-b border-white/6 pb-6">
          {/* Left */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-[10px]">
              <div className="flex h-[30px] w-[30px] items-center justify-center rounded-md bg-[#E8A33D] text-[11px] font-extrabold tracking-[0.04em] text-[#0B0E12]">
                SD
              </div>

              <span className="text-[15px] font-bold text-[#EDF1F7]">
                Shashank Daga
              </span>
            </div>

            <p className="max-w-[360px] text-[14px] italic leading-[1.5] text-[#4E5A6B]">
              "Engineering scalable software, transforming data into intelligent
              solutions."
            </p>
          </div>

          {/* Right */}
          <div className="flex items-center gap-6">
            <Link
              href="https://github.com/Shashank-Daga"
              target="_blank"
              className="text-[15px] text-[#4E5A6B] transition-colors duration-200 hover:text-[#E8A33D]"
            >
              GitHub
            </Link>

            <Link
              href="https://www.linkedin.com/in/shashank-daga-635466270/"
              target="_blank"
              className="text-[15px] text-[#4E5A6B] transition-colors duration-200 hover:text-[#E8A33D]"
            >
              LinkedIn
            </Link>

            <Link
              href="mailto:shashankdaga2510@gmail.com"
              className="text-[15px] text-[#4E5A6B] transition-colors duration-200 hover:text-[#E8A33D]"
            >
              Email
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex items-center justify-between py-5 text-[14px] text-[#4E5A6B]">
          <p>
            © {new Date().getFullYear()} Shashank Daga. Designed & built from
            scratch.
          </p>

          <Link
            href="#hero"
            className="group flex items-center gap-[6px] transition-all duration-200 hover:-translate-y-0.5 hover:text-[#E8A33D]"
          >
            {/* <ArrowUp size={14} strokeWidth={1.7} /> */}
            <span>Top</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}