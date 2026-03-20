"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Footer from "@/components/layout/Footer";
import FadeIn from "@/components/animations/FadeIn";
import { useLanguage } from "@/context/LanguageContext";

type Props = {
  slug: string;
};

const projectColors: Record<string, string> = {
  auramax: "#232321",
  scaramuzzi: "#9f7c3c",
  "to-por-ai-no-mundo": "#133930",
  "maiara-psicologia": "#18264a",
  "anna-psicologia": "#6c8990",
  "caixinha-2026": "#4f46e5",
};

// MAPEAMENTO DE PASTAS: Liga o ID do projeto ao nome da pasta real na public/projects
const projectFolderMap: Record<string, string> = {
  "anna-psicologia": "annapsi",
  "to-por-ai-no-mundo": "chico",
  "maiara-psicologia": "maiarapsi",
  auramax: "auramax",
  scaramuzzi: "scaramuzzi",
  "caixinha-2026": "caixinha-2026",
};

// MAPEAMENTO DE SUFIXOS: Caso o nome do arquivo use um sufixo diferente do ID
const projectSuffixMap: Record<string, string> = {
  "anna-psicologia": "annapsi",
  "to-por-ai-no-mundo": "chico",
  "maiara-psicologia": "maiarapsi",
  "caixinha-2026": "caixinha2026",
};

function slugify(str?: string) {
  if (!str) return "";
  return str
    .toString()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function ImageLoader({
  candidates,
  alt,
  className,
  style,
}: {
  candidates: string[];
  alt: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  const [src, setSrc] = useState<string | null>(null);
  useEffect(() => {
    let mounted = true;
    (async () => {
      for (const candidate of candidates) {
        try {
          await new Promise<void>((resolve, reject) => {
            const img = new window.Image();
            img.onload = () => resolve();
            img.onerror = () => reject();
            img.src = candidate;
          });
          if (!mounted) return;
          setSrc(candidate);
          return;
        } catch {
          /* next */
        }
      }
      if (mounted) setSrc(null);
    })();
    return () => {
      mounted = false;
    };
  }, [JSON.stringify(candidates)]);

  if (!src)
    return (
      <div
        className={`w-full h-full bg-slate-100 animate-pulse ${className || ""}`}
        style={style}
        aria-hidden
      />
    );
  return <img src={src} alt={alt} className={className} style={style} />;
}

export default function ProjectClient({ slug }: Props) {
  const { t } = useLanguage();
  const projectDetails = (t as any).project_details || {};
  const decodedSlug = slug ? decodeURIComponent(slug) : "";

  let resolvedKey = Object.prototype.hasOwnProperty.call(
    projectDetails,
    decodedSlug,
  )
    ? decodedSlug
    : undefined;
  if (!resolvedKey)
    resolvedKey = Object.keys(projectDetails).find(
      (k) => slugify(k) === decodedSlug,
    );
  if (!resolvedKey)
    resolvedKey = Object.keys(projectDetails).find(
      (k) => slugify(projectDetails[k]?.title || "") === decodedSlug,
    );

  const project = resolvedKey ? (projectDetails as any)[resolvedKey] : null;
  const bgColor = resolvedKey
    ? projectColors[resolvedKey] || "#4f46e5"
    : "#4f46e5";

  if (!project || !resolvedKey) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background p-10">
        <h1 className="text-4xl font-bold mb-4 font-syne">
          Projeto não encontrado
        </h1>
        <Link
          href="/portfolio"
          className="h-12 px-8 rounded-full bg-primary text-white flex items-center gap-2"
        >
          <ArrowLeft size={18} /> Voltar
        </Link>
      </div>
    );
  }

  // Lógica de caminhos baseada nas suas pastas reais
  const folderName = projectFolderMap[resolvedKey] || resolvedKey;
  const suffix = projectSuffixMap[resolvedKey] || resolvedKey;
  const folderBase = `/projects/${folderName}`;

  // candidatos mais abrangentes (.webp, .jpg, .png e variações)
  const coverCandidates = [
    `${folderBase}/cover-${suffix}.webp`,
    `${folderBase}/cover-${suffix}.jpg`,
    `${folderBase}/cover-${suffix}.png`,
    `${folderBase}/cover-${resolvedKey}.webp`,
    `${folderBase}/cover-${resolvedKey}.jpg`,
    `${folderBase}/cover-${resolvedKey}.png`,
    `${folderBase}/cover.webp`,
    `${folderBase}/cover.jpg`,
    `${folderBase}/cover.png`,
    `${folderBase}/${suffix}.webp`,
    `${folderBase}/${suffix}.jpg`,
    `${folderBase}/${suffix}.png`,
    `${folderBase}/${resolvedKey}.webp`,
    `${folderBase}/${resolvedKey}.jpg`,
    `${folderBase}/${resolvedKey}.png`,
  ];

  const screenCandidates = [
    `${folderBase}/screen-${suffix}.webp`,
    `${folderBase}/screen-${suffix}.jpg`,
    `${folderBase}/screen-${suffix}.png`,
    `${folderBase}/screen.webp`,
    `${folderBase}/screen.jpg`,
    `${folderBase}/screen.png`,
    `${folderBase}/${suffix}-screen.webp`,
    `${folderBase}/${suffix}-screen.jpg`,
    `${folderBase}/${suffix}-screen.png`,
  ];

  const collageCandidates = [
    `${folderBase}/collage-${suffix}.webp`,
    `${folderBase}/collage-${suffix}.jpg`,
    `${folderBase}/collage-${suffix}.png`,
    `${folderBase}/collage.webp`,
    `${folderBase}/collage.jpg`,
    `${folderBase}/collage.png`,
    `${folderBase}/${suffix}-collage.webp`,
    `${folderBase}/${suffix}-collage.jpg`,
    `${folderBase}/${suffix}-collage.png`,
  ];

  return (
    <main className="min-h-screen bg-background pt-2">
      {/* HERO SECTION */}
      <section className="w-full px-2 pb-2">
        <div
          style={{ backgroundColor: bgColor }}
          className="rounded-[2.5rem] pt-16 md:pt-24 overflow-hidden flex flex-col items-center"
        >
          <div className="max-w-4xl text-center mb-8 px-4">
            <FadeIn delay={0.05}>
              <span className="px-5 py-1.5 rounded-full bg-white/10 backdrop-blur-xl text-white text-[10px] font-bold uppercase tracking-[0.2em] border border-white/10 mb-6 inline-block">
                {project.category} — {project.type}
              </span>
            </FadeIn>

            <FadeIn delay={0.15}>
              <h1 className="text-5xl md:text-9xl font-syne font-semibold tracking-tighter text-white mb-6 leading-[0.85]">
                {project.title}
              </h1>
            </FadeIn>

            <FadeIn delay={0.25}>
              <a
                href={project.live_url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 md:h-14 px-8 rounded-full bg-white text-black font-bold text-[10px] uppercase tracking-widest inline-flex items-center gap-3 hover:scale-105 transition-transform shadow-xl mb-10"
              >
                {(t as any).project_page?.view_live || "View Live Project"}{" "}
                <ExternalLink size={14} />
              </a>
            </FadeIn>
          </div>

          {/* COVER: centered, full-image, floating inside the colored block */}
          <div className="w-full px-4 md:px-12">
            <FadeIn delay={0.45} duration={1.0} className="w-full">
              <div className="relative w-full rounded-t-[2rem] overflow-visible shadow-2xl">
                {/* Grid maior colorido já envolve este bloco (bgColor) */}
                <div className="mx-auto w-full max-w-6xl px-4 md:px-8 py-6 md:py-10">
                  {/* Wrapper que faz a imagem “flutuar” com um pequeno negative margin no mobile/desktop */}
                  <div className="mx-auto w-full max-w-[1100px] -mt-6 md:-mt-12 rounded-xl overflow-hidden bg-transparent">
                    <div className="w-full bg-transparent">
                      <ImageLoader
                        candidates={coverCandidates}
                        alt={`${project.title} — cover`}
                        className="w-full h-auto object-contain block"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* INFO SECTION */}
      <section className="w-full px-2 pb-2">
        <div className="bg-white border border-border rounded-[2.5rem] p-10 md:p-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-24">
            <div className="md:col-span-4">
              <h3 className="text-primary font-bold text-[10px] uppercase tracking-[0.2em] mb-6">
                {(t as any).project_page?.challenge_title || "The Challenge"}
              </h3>
              <p className="text-lg text-muted leading-relaxed font-medium">
                {project.challenge}
              </p>
            </div>

            <div className="md:col-span-4">
              <h3 className="text-primary font-bold text-[10px] uppercase tracking-[0.2em] mb-6">
                {(t as any).project_page?.solution_title || "The Solution"}
              </h3>
              <p className="text-lg text-muted leading-relaxed font-medium">
                {project.solution}
              </p>
            </div>

            <div className="md:col-span-4">
              <h3 className="text-primary font-bold text-[10px] uppercase tracking-[0.2em] mb-6">
                {(t as any).project_page?.technology_title || "Technology"}
              </h3>
              <div className="flex flex-wrap gap-3">
                {Array.isArray(project.stack) &&
                  project.stack.map((tech: string) => (
                    <span
                      key={tech}
                      className="px-5 py-2.5 bg-slate-50 border border-border rounded-full text-[10px] font-bold uppercase tracking-widest text-muted"
                    >
                      {tech}
                    </span>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SCREEN SECTION */}
      <section className="w-full px-2 pb-2">
        <FadeIn delay={0.2}>
          <div className="relative w-full aspect-[16/10] md:aspect-[21/9] rounded-[2.5rem] overflow-hidden border border-border">
            <ImageLoader
              candidates={screenCandidates}
              alt={`${project.title} — screen`}
              className="object-cover w-full h-full"
            />
          </div>
        </FadeIn>
      </section>

      {/* COLLAGE SECTION */}
      <section className="w-full px-2 pb-2">
        <FadeIn delay={0.15}>
          <div className="relative w-full aspect-[16/10] md:aspect-[21/9] rounded-[2.5rem] overflow-hidden border border-border">
            <ImageLoader
              candidates={collageCandidates}
              alt={`${project.title} — collage`}
              className="object-cover w-full h-full"
            />
          </div>
        </FadeIn>
      </section>

      {/* CTA */}
      <section className="w-full px-2 pb-2">
        <FadeIn delay={0.25}>
          <div className="bg-primary rounded-[2.5rem] p-12 md:p-24 text-center text-white">
            <h2 className="text-4xl md:text-6xl font-syne font-semibold tracking-tighter mb-10">
              {(t as any).project_page?.cta_title || "Gostou deste projeto?"}
            </h2>
            <Link
              href="/portfolio"
              className="h-14 px-12 rounded-full bg-white text-primary font-bold text-[10px] uppercase tracking-widest inline-flex items-center gap-3 hover:scale-105 transition-transform"
            >
              <ArrowLeft size={16} />{" "}
              {(t as any).project_page?.back_to_portfolio ||
                "Voltar ao Portfólio"}
            </Link>
          </div>
        </FadeIn>
      </section>

      <Footer />
    </main>
  );
}
