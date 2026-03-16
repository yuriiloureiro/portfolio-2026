import Link from "next/link";
import Logo from "../ui/Logo";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center p-4">
      <nav className="flex w-full max-w-6xl items-center justify-between rounded-full border border-white/10 bg-black/20 px-5 py-3 backdrop-blur-md">
        
        <Link href="/" className="flex items-center gap-3 group">
          <Logo />
          <span className="text-sm font-semibold tracking-[0.2em] text-white/90 hidden md:block group-hover:text-accent transition-colors">
            YURI <span className="text-accent">LOUREIRO</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <Link href="#about" className="text-sm text-white/60 hover:text-accent transition-colors">
            About
          </Link>
          <Link href="#projects" className="text-sm text-white/60 hover:text-accent transition-colors">
            Projects
          </Link>
          <Link href="#contact" className="text-sm text-white/60 hover:text-accent transition-colors">
            Contact
          </Link>
        </div>

        <Link
          href="#contact"
          className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-black transition-transform hover:scale-105 active:scale-95"
        >
          Let&apos;s Talk
        </Link>
      </nav>
    </header>
  );
}