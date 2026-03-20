import { project_details_pt, project_details_en } from "./translations";

// Helper simples para pegar metadados no servidor
export function getProjectMetadata(slug: string, lang: "pt" | "en") {
  const details = lang === "pt" ? project_details_pt : project_details_en;
  const project = details[slug as keyof typeof details];

  if (!project) return null;

  return {
    title: `${project.title} | Yuri Loureiro`,
    description: project.challenge,
  };
}
