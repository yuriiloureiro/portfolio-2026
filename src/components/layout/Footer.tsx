export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-white/20 text-sm">
          © {currentYear} Yuri Loureiro. All rights reserved.
        </p>
        <div className="flex gap-8 text-white/20 text-xs font-medium tracking-widest uppercase">
          <span>Built with Next.js & Framer Motion</span>
        </div>
      </div>
    </footer>
  );
}