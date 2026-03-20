import ProjectClient from "./ProjectClient";

type Props = {
  params: Promise<{ slug: string }> | { slug: string };
};

export default async function ProjectPage({ params }: Props) {
  // Aguarda os parâmetros para garantir que o slug não venha vazio
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  return <ProjectClient slug={slug} />;
}
