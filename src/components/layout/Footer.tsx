"use client";

import Image from "next/image";
import Link from "next/link";
import { Github } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const LinkedInIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const socials = [
    {
      label: "GitHub",
      href: "https://github.com/yuriiloureiro",
      icon: <Github size={16} />,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/loureiroyuri",
      icon: <LinkedInIcon />,
    },
  ];

  return (
    <footer className="w-full px-2 py-4">
      <div className="bg-white border border-border rounded-[2.5rem] p-12 md:p-20 flex flex-col items-center gap-10 text-center">
        {/* Logo Clicável para Home */}
        <Link
          href="/"
          className="flex flex-col items-center gap-4 group cursor-pointer"
        >
          <div className="relative w-16 h-16 flex items-center justify-center transition-transform group-hover:scale-110">
            <Image
              src="/logo-yuri-loureiro.png"
              alt="Yuri Loureiro Logo"
              width={64}
              height={64}
              className="object-contain"
            />
          </div>
          <span className="font-bold text-foreground tracking-tight uppercase text-sm">
            Yuri <span className="text-primary">Loureiro</span>
          </span>
        </Link>

        {/* Links Rápidos (ajustados para as rotas reais) */}
        <div className="flex items-center gap-8">
          {[
            { label: t.nav.about, href: "/about" },
            { label: t.nav.portfolio, href: "/portfolio" },
            { label: t.nav.services, href: "/services" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[11px] uppercase tracking-widest font-semibold text-muted hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Redes Sociais */}
        <div className="flex items-center gap-3">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="w-10 h-10 border border-border rounded-full flex items-center justify-center text-muted hover:border-primary hover:text-primary transition-all hover:scale-110"
            >
              {social.icon}
            </a>
          ))}
        </div>

        <div className="w-full h-px bg-border" />

        <p className="text-muted text-[10px] uppercase tracking-widest font-medium">
          © {currentYear} Yuri Loureiro — {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
