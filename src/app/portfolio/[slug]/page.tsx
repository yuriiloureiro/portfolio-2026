import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Footer from "@/components/layout/Footer";
import { project_details_pt } from "@/lib/translations";
import FadeIn from "@/components/animations/FadeIn";

const projectColors: Record<string, string> = {
  auramax: "#232321",
  scaramuzzi: "#9f7c3c",
  "to-por-ai-no-mundo": "#133930",
  "maiara-psicologia": "#18264a",
  "anna-psicologia": "#6c8990",
  "caixinha-2026": "#4f46e5",
};

const folderMap: Record<string, string> = {
  auramax: "auramax",
  scaramuzzi: "scaramuzzi",
  "to-por-ai-no-mundo": "chico",
  "maiara-psicologia": "maiarapsi",
  "anna-psicologia": "annapsi",
  "caixinha-2026": "caixinha-2026", // nome da pasta em public/projects
};

// Se o sufixo do arquivo for diferente do slug/pasta, mapeie aqui.
// Ex.: pasta = "caixinha-2026", mas os arquivos são "cover-caixinha2026.webp"
const fileSuffixMap: Record<string, string> = {
  "caixinha-2026": "caixinha2026",
  "to-por-ai-no-mundo": "chico",
  "maiara-psicologia": "maiarapsi",
  "anna-psicologia": "annapsi",
  // adicione outros casos especiais se precisar
};

interface PageProps {
  params: Promise<{ slug: string }> | { slug: string };
}

export default async function ProjectPage(props: PageProps) {
  const params = await props.params;
  const slug = params.slug;

  const project = (project_details_pt as any)[slug];
  const bgColor = projectColors[slug] || "#4f46e5";
  const folder = folderMap[slug] || slug;
  const fileSuffix = fileSuffixMap[slug] || folder;

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background font-syne">
        <div className="text-center">
          <h1 className="text-2xl mb-4">Projeto não encontrado</h1>
          <Link href="/portfolio" className="text-primary underline">
            Voltar ao Portfólio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-background pt-2">
      {/* 1. HERO SECTION */}
      <section className="w-full px-2 pb-2">
        <div
          style={{ backgroundColor: bgColor }}
          className="rounded-[2.5rem] pt-16 md:pt-24 overflow-hidden flex flex-col items-center"
        >
          <div className="max-w-4xl text-center mb-16 px-4">
            <FadeIn delay={0.05}>
              <div className="flex items-center justify-center gap-2 mb-8">
                <span className="px-5 py-1.5 rounded-full bg-white/10 backdrop-blur-xl text-white text-[10px] font-bold uppercase tracking-[0.2em] border border-white/10">
                  {project.category} — {project.type}
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <h1 className="text-5xl md:text-9xl font-syne font-semibold tracking-tighter text-white mb-10 leading-[0.85]">
                {project.title}
              </h1>
            </FadeIn>

            <FadeIn delay={0.25}>
              <div className="flex gap-4 justify-center">
                <a
                  href={project.live_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-14 px-10 rounded-full bg-white text-black font-bold text-[10px] uppercase tracking-widest inline-flex items-center gap-3 hover:scale-105 transition-transform shadow-xl"
                >
                  View Live Project <ExternalLink size={14} />
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Cover: sem cortes (object-contain) e sem bordas internas */}
          <div className="w-full px-4 md:px-12">
            <FadeIn delay={0.45} duration={1.0} className="w-full">
              <div className="relative w-full rounded-t-[2rem] overflow-hidden shadow-2xl">
                <Image
                  src={`/projects/${folder}/cover-${fileSuffix}.webp`}
                  alt={project.title}
                  width={1920}
                  height={1080}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 2. INFO SECTION */}
      <section className="w-full px-2 pb-2">
        <div className="bg-white border border-border rounded-[2.5rem] p-10 md:p-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24">
            <div className="md:col-span-4">
              <h3 className="text-primary font-bold text-[10px] uppercase tracking-[0.2em] mb-6">
                The Challenge
              </h3>
              <p className="text-xl text-muted leading-relaxed font-medium">
                {project.challenge}
              </p>
            </div>

            <div className="md:col-span-4">
              <h3 className="text-primary font-bold text-[10px] uppercase tracking-[0.2em] mb-6">
                The Solution
              </h3>
              <p className="text-xl text-muted leading-relaxed font-medium">
                {project.solution}
              </p>
            </div>

            <div className="md:col-span-4">
              <h3 className="text-primary font-bold text-[10px] uppercase tracking-[0.2em] mb-6">
                Technology
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

      {/* 3. SCREEN SECTION (agora antes da Collage) */}
      <section className="w-full px-2 pb-2">
        <FadeIn delay={0.2}>
          <div className="relative w-full aspect-[16/10] md:aspect-[21/9] rounded-[2.5rem] overflow-hidden border border-border">
            <Image
              src={`/projects/${folder}/screen-${fileSuffix}.webp`}
              alt="Interface Detail"
              fill
              className="object-cover"
            />
          </div>
        </FadeIn>
      </section>

      {/* 4. COLLAGE SECTION */}
      <section className="w-full px-2 pb-2">
        <FadeIn delay={0.15}>
          <div className="relative w-full aspect-[21/9] rounded-[2.5rem] overflow-hidden border border-border">
            <Image
              src={`/projects/${folder}/collage-${fileSuffix}.webp`}
              alt="Project Showcase"
              fill
              className="object-cover"
            />
          </div>
        </FadeIn>
      </section>

      {/* 5. CTA SECTION */}
      <section className="w-full px-2 pb-2">
        <FadeIn delay={0.25}>
          <div className="bg-primary rounded-[2.5rem] p-12 md:p-24 text-center text-white">
            <h2 className="text-4xl md:text-6xl font-syne font-semibold tracking-tighter mb-10">
              Gostou deste projeto?
            </h2>
            <Link
              href="/portfolio"
              className="h-14 px-12 rounded-full bg-white text-primary font-bold text-[10px] uppercase tracking-widest inline-flex items-center gap-3 hover:scale-105 transition-transform"
            >
              <ArrowLeft size={16} /> Voltar ao Portfólio
            </Link>
          </div>
        </FadeIn>
      </section>

      <Footer />
    </main>
  );
}
