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

// utilitário simples para gerar slugs previsíveis
function slugify(str?: string) {
  if (!str) return "";
  return str
    .toString()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // remove acentos
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/**
 * ImageLoader tries a list of src candidates and returns the first that successfully loads.
 * Renders a placeholder while trying to load candidates.
 */
function ImageLoader({
  candidates,
  alt,
  className,
  style,
  width,
  height,
}: {
  candidates: string[];
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  width?: number;
  height?: number;
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
          // next candidate
        }
      }
      if (mounted) setSrc(null);
    })();

    return () => {
      mounted = false;
    };
    // stringify so effect runs when candidates array content changes
  }, [JSON.stringify(candidates)]);

  // loading or none found -> placeholder
  if (!src) {
    return (
      <div
        className={`w-full h-full bg-slate-100 ${className || ""}`}
        style={style}
        aria-hidden
      />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      width={width}
      height={height}
    />
  );
}

export default function ProjectClient({ slug }: Props) {
  const { t } = useLanguage();
  const projectDetails = (t as any).project_details || {};

  // Resolve key robustamente: slug direto, slugified key, slugified title
  const decodedSlug = slug ? decodeURIComponent(slug) : "";
  let resolvedKey: string | undefined = Object.prototype.hasOwnProperty.call(
    projectDetails,
    decodedSlug,
  )
    ? decodedSlug
    : undefined;

  if (!resolvedKey) {
    resolvedKey = Object.keys(projectDetails).find(
      (k) => slugify(k) === decodedSlug,
    );
  }

  if (!resolvedKey) {
    resolvedKey = Object.keys(projectDetails).find(
      (k) =>
        slugify((projectDetails[k] && projectDetails[k].title) || "") ===
        decodedSlug,
    );
  }

  const project = resolvedKey ? (projectDetails as any)[resolvedKey] : null;
  const bgColor = resolvedKey
    ? projectColors[resolvedKey] || "#4f46e5"
    : "#4f46e5";

  // Se não encontrou, mostra mensagem com slug tentado
  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background font-syne p-10">
        <h1 className="text-4xl font-bold mb-4">Projeto não encontrado</h1>
        <p className="text-muted mb-8 text-center">
          O slug{" "}
          <span className="font-mono bg-slate-100 px-2 py-1 rounded">
            "{decodedSlug || "vazio"}"
          </span>{" "}
          não corresponde a nenhum projeto.
        </p>

        <ul className="text-sm space-y-1 mb-6">
          {Object.keys(projectDetails).map((k) => (
            <li key={k} className="text-primary/90">
              {k} — (slug: <span className="font-mono">{slugify(k)}</span>)
            </li>
          ))}
        </ul>

        <Link
          href="/portfolio"
          className="h-12 px-8 rounded-full bg-primary text-white flex items-center gap-2 hover:scale-105 transition-transform"
        >
          <ArrowLeft size={18} /> Voltar ao Portfólio
        </Link>
      </div>
    );
  }

  // A partir daqui sabemos que resolvedKey está definido (project existe).
  const rk = resolvedKey as string;
  const keyNoDash = rk.replace(/-/g, "");
  const folderBase = `/projects/${rk}`; // ex: /projects/caixinha-2026

  // candidatos de caminho cobrindo as variações que você descreveu
  const coverCandidates = [
    `${folderBase}/cover-${rk}.webp`,
    `${folderBase}/cover-${keyNoDash}.webp`,
    `${folderBase}/cover.webp`,
    `${folderBase}/${rk}.webp`,
    `${folderBase}.webp`,
    `/projects/cover-${rk}.webp`,
    `/projects/${rk}.webp`,
  ];

  const screenCandidates = [
    `${folderBase}/screen-${rk}.webp`,
    `${folderBase}/screen-${keyNoDash}.webp`,
    `${folderBase}/screen.webp`,
    `${folderBase}/${rk}-screen.webp`,
    `/projects/${rk}-screen.webp`,
    `${folderBase}/screen.webp`,
  ];

  const collageCandidates = [
    `${folderBase}/collage-${rk}.webp`,
    `${folderBase}/collage-${keyNoDash}.webp`,
    `${folderBase}/collage.webp`,
    `${folderBase}/${rk}-collage.webp`,
    `/projects/${rk}-collage.webp`,
    `${folderBase}/collage.webp`,
  ];

  return (
    <main className="min-h-screen bg-background pt-2">
      {/* HERO: cover inside colored rounded block */}
      <section className="w-full px-2 pb-2">
        <div
          style={{ backgroundColor: bgColor }}
          className="rounded-[2.5rem] pt-16 md:pt-24 overflow-hidden flex flex-col items-center"
        >
          <div className="max-w-4xl text-center mb-8 px-4">
            <FadeIn delay={0.05}>
              <div className="flex items-center justify-center gap-2 mb-6">
                <span className="px-5 py-1.5 rounded-full bg-white/10 backdrop-blur-xl text-white text-[10px] font-bold uppercase tracking-[0.2em] border border-white/10">
                  {project.category} — {project.type}
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <h1 className="text-5xl md:text-9xl font-syne font-semibold tracking-tighter text-white mb-6 leading-[0.85]">
                {project.title}
              </h1>
            </FadeIn>

            <FadeIn delay={0.25}>
              <div className="flex gap-4 justify-center mb-10">
                <a
                  href={project.live_url || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-12 md:h-14 px-8 rounded-full bg-white text-black font-bold text-[10px] uppercase tracking-widest inline-flex items-center gap-3 hover:scale-105 transition-transform shadow-xl"
                >
                  {(t as any).project_page?.view_live || "View Live Project"}{" "}
                  <ExternalLink size={14} />
                </a>
              </div>
            </FadeIn>
          </div>

          <div className="w-full px-4 md:px-12 mb-12">
            <FadeIn delay={0.45} duration={1.0} className="w-full">
              <div className="relative w-full rounded-t-[2rem] overflow-hidden shadow-2xl">
                <div className="w-full">
                  <ImageLoader
                    candidates={coverCandidates}
                    alt={`${project.title} — cover`}
                    className="w-full h-auto block"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* INFO SECTION: challenge / solution / tech */}
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
          <div className="relative w-full aspect-[21/9] rounded-[2.5rem] overflow-hidden border border-border">
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
