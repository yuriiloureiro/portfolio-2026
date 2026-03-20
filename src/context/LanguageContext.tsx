"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { project_details_pt, project_details_en } from "@/lib/translations";

type Language = "pt" | "en";

type ServiceItem = {
  title: string;
  description: string;
  tags: string[];
};

type ProjectDetail = {
  title: string;
  category: string;
  type: string;
  challenge: string;
  solution: string;
  stack: string[];
  live_url: string;
  github_url: string;
};

type Translations = {
  nav: {
    about: string;
    portfolio: string;
    services: string;
    cta: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta_primary: string;
    cta_secondary: string;
    badge1_title: string;
    badge1_sub: string;
    badge2_title: string;
    badge2_sub: string;
    badge3_title: string;
    badge3_sub: string;
    badge4_title: string;
    badge4_sub: string;
  };
  techstack: {
    headline: string;
  };
  projects: {
    label: string;
    title: string;
    title_italic: string;
    subtitle: string;
    cta: string;
  };
  services: {
    label: string;
    title: string;
    title_italic: string;
    items: ServiceItem[];
  };
  contact: {
    label: string;
    title: string;
    title_italic: string;
    cta: string;
  };
  footer: {
    rights: string;
  };
  about: {
    hero_title: string;
    hero_cta_portfolio: string;
    hero_cta_services: string;
    story_label: string;
    story_title: string;
    story_text: string;
    values_label: string;
    values_title: string;
    value1_title: string;
    value1_text: string;
    value2_title: string;
    value2_text: string;
    value3_title: string;
    value3_text: string;
    faq_label: string;
    faq_title: string;
    faq_q1: string;
    faq_a1: string;
    faq_q2: string;
    faq_a2: string;
    faq_q3: string;
    faq_a3: string;
    faq_q4: string;
    faq_a4: string;
  };
  contact_page: {
    left_title_line1: string;
    left_title_line2: string;
    left_title_line3: string;
    email_label: string;
    phone_label: string;
    form_title: string;
    full_name: string;
    email: string;
    phone: string;
    service: string;
    service_placeholder: string;
    message: string;
    submit: string;
  };
  services_page: {
    hero_title: string;
    hero_cta_primary: string;
    hero_cta_secondary: string;
    section_label: string;
    section_title: string;
    section_subtitle: string;
    cards: {
      title: string;
      desc: string;
      tags: string[];
    }[];
    cta_bar_title: string;
    cta_bar_primary: string;
    cta_bar_secondary: string;
    process_label: string;
    process_title: string;
    process_steps: {
      n: string;
      title: string;
      text: string;
      meta: string;
      chip: string;
    }[];
    faq_label: string;
    faq_title: string;
    faqs: { q: string; a: string }[];
  };
  portfolio_page: {
    hero_title: string;
    hero_cta_primary: string;
    hero_cta_secondary: string;
    section_label: string;
    section_title: string;
    projects: {
      title: string;
      category: string;
      type: string;
      slug: string;
    }[];
    cta_title: string;
    cta_primary: string;
    cta_secondary: string;
  };
  project_page: {
    challenge_title: string;
    solution_title: string;
    technology_title: string;
    view_live: string;
    cta_title: string;
    back_to_portfolio: string;
  };
  project_details: Record<string, ProjectDetail>;
};

const pt: Translations = {
  nav: {
    about: "Sobre",
    portfolio: "Portfólio",
    services: "Serviços",
    cta: "Contato",
  },
  hero: {
    title: "Construindo Experiências Digitais de Alto Nível",
    subtitle:
      "Desenvolvedor Full Stack focado em criar aplicações web modernas, escaláveis e centradas no usuário.",
    cta_primary: "Ver Projetos",
    cta_secondary: "Sobre Mim",
    badge1_title: "Alta Performance",
    badge1_sub: "Otimizado para velocidade",
    badge2_title: "Código Limpo",
    badge2_sub: "Escalável e mantível",
    badge3_title: "Foco em UX",
    badge3_sub: "Design intuitivo",
    badge4_title: "Dev Confiável",
    badge4_sub: "Entrega garantida",
  },
  techstack: {
    headline: "Tecnologias que utilizo para dar vida a grandes ideias",
  },
  projects: {
    label: "Projetos Selecionados",
    title: "Trabalhos em",
    title_italic: "Destaque",
    subtitle:
      "Uma coleção de projetos que demonstram minha paixão por design e desenvolvimento.",
    cta: "Ver todos os projetos",
  },
  services: {
    label: "O que eu faço",
    title: "Soluções",
    title_italic: "Digitais",
    items: [
      {
        title: "Frontend",
        description: "Interfaces modernas com React e Next.js.",
        tags: ["React", "Next.js", "Tailwind"],
      },
      {
        title: "Backend",
        description: "APIs robustas e escaláveis.",
        tags: ["Node.js", "PostgreSQL", "Prisma"],
      },
      {
        title: "UI/UX",
        description: "Design focado na experiência do usuário.",
        tags: ["Figma", "Framer Motion"],
      },
      {
        title: "No-Code & CMS",
        description:
          "Sites profissionais e gerenciáveis com foco em conversão.",
        tags: ["WordPress", "Framer", "Shopify", "Webflow"],
      },
    ],
  },
  contact: {
    label: "Vamos conversar?",
    title: "Pronto para o",
    title_italic: "Próximo Passo",
    cta: "Entrar em contato",
  },
  footer: {
    rights: "Todos os direitos reservados.",
  },
  about: {
    hero_title:
      "Transformando ideias em realidade digital através de código e design.",
    hero_cta_portfolio: "Ver Portfólio",
    hero_cta_services: "Meus Serviços",
    story_label: "Minha História",
    story_title:
      "Desenvolvedor por paixão, solucionador de problemas por natureza.",
    story_text:
      "Sou um desenvolvedor Full Stack focado em criar soluções que não apenas funcionam, mas encantam. Com experiência em tecnologias modernas, busco sempre o equilíbrio entre performance e estética.",
    values_label: "Valores",
    values_title: "O que guia meu trabalho",
    value1_title: "Qualidade",
    value1_text:
      "Código limpo e bem estruturado é a base de qualquer projeto de sucesso.",
    value2_title: "Inovação",
    value2_text:
      "Sempre explorando novas tecnologias para entregar o melhor resultado.",
    value3_title: "Compromisso",
    value3_text: "Foco total na entrega e na satisfação do cliente.",
    faq_label: "FAQ",
    faq_title: "Dúvidas Frequentes",
    faq_q1: "Qual sua stack principal?",
    faq_a1:
      "Trabalho principalmente com React, Next.js, Node.js e Tailwind CSS.",
    faq_q2: "Você trabalha como freelancer?",
    faq_a2:
      "Sim, estou disponível para projetos freelance e contratos de longo prazo.",
    faq_q3: "Você faz design também?",
    faq_a3: "Sim, tenho foco em UI/UX e utilizo Figma para prototipação.",
    faq_q4: "Como entrar em contato?",
    faq_a4: "Você pode usar o formulário de contato ou me chamar no LinkedIn.",
  },
  contact_page: {
    left_title_line1: "Vamos",
    left_title_line2: "Criar Algo",
    left_title_line3: "Incrível",
    email_label: "hello@loureiroyuri.com",
    phone_label: "+351 912 448 530",
    form_title: "Envie uma mensagem",
    full_name: "Nome Completo",
    email: "E-mail",
    phone: "Telefone",
    service: "Serviço de Interesse",
    service_placeholder: "Selecione um serviço",
    message: "Sua Mensagem",
    submit: "Enviar Mensagem",
  },
  services_page: {
    hero_title: "Soluções pensadas para o seu sucesso",
    hero_cta_primary: "Fale comigo",
    hero_cta_secondary: "Ver portfólio",
    section_label: "Serviços",
    section_title: "Soluções sob medida",
    section_subtitle:
      "Do design ao deploy: entregas modernas, escaláveis e com foco em performance.",
    cards: [
      {
        title: "Desenvolvimento Web",
        desc: "Aplicações modernas em Next.js/React com excelente performance e UX.",
        tags: ["Web Apps", "Landing Pages", "Frontend"],
      },
      {
        title: "Backend & APIs",
        desc: "APIs robustas, integrações e arquitetura preparada para crescer.",
        tags: ["Node.js", "REST", "Auth"],
      },
      {
        title: "UI & Microinterações",
        desc: "Interfaces elegantes com animações sutis e consistência visual.",
        tags: ["Framer Motion", "Tailwind", "Design System"],
      },
      {
        title: "Performance & SEO",
        desc: "Otimizações de carregamento, acessibilidade e SEO técnico.",
        tags: ["Core Web Vitals", "A11y", "SEO"],
      },
      {
        title: "Consultoria Técnica",
        desc: "Revisão de código, decisões de stack e orientação prática.",
        tags: ["Code Review", "Arquitetura", "Mentoria"],
      },
    ],
    cta_bar_title: "Veja meu trabalho em ação. Vamos começar sua jornada?",
    cta_bar_primary: "Fale comigo",
    cta_bar_secondary: "Portfólio",
    process_label: "Como eu trabalho",
    process_title: "Do conceito à entrega",
    process_steps: [
      {
        n: "01",
        title: "Discovery",
        text: "Entendo objetivos, restrições e defino o que é sucesso para o projeto.",
        meta: "1–2 dias",
        chip: "Alinhamento",
      },
      {
        n: "02",
        title: "Design",
        text: "Estruturo a experiência: fluxos, UI e microinteractions (quando aplicável).",
        meta: "3–7 dias",
        chip: "Blueprint",
      },
      {
        n: "03",
        title: "Desenvolvimento",
        text: "Implemento com código limpo, componentes reutilizáveis e foco em performance.",
        meta: "1–4 semanas",
        chip: "Build",
      },
      {
        n: "04",
        title: "Testes",
        text: "Testes manuais + ajustes de compatibilidade, responsividade e acessibilidade.",
        meta: "2–5 dias",
        chip: "QA",
      },
      {
        n: "05",
        title: "Deploy",
        text: "Publico e configuro ambiente (ex: Vercel), monitorando a entrega.",
        meta: "1–2 dias",
        chip: "Launch",
      },
      {
        n: "06",
        title: "Suporte",
        text: "Iterações e melhorias contínuas conforme necessidades e feedback.",
        meta: "contínuo",
        chip: "Evolução",
      },
    ],
    faq_label: "FAQ",
    faq_title: "Suas dúvidas, respondidas",
    faqs: [
      {
        q: "Quais serviços você oferece?",
        a: "Web apps, landing pages, UI engineering, APIs e consultoria técnica com foco em performance e manutenção fácil.",
      },
      {
        q: "Como você começa um novo projeto?",
        a: "Começo com discovery e alinhamento de escopo. Depois UI/arquitetura, implementação e QA — com atualizações semanais.",
      },
      {
        q: "Você trabalha com times internacionais?",
        a: "Sim. Trabalho bem com comunicação assíncrona, documentação e colaboração via GitHub.",
      },
      {
        q: "O que você precisa para iniciar?",
        a: "Objetivo do projeto, referências, público-alvo, requisitos essenciais e prazo. Com isso eu proponho um plano e próximos passos.",
      },
    ],
  },
  portfolio_page: {
    hero_title: "Transformando ideias em soluções digitais",
    hero_cta_primary: "Fale comigo",
    hero_cta_secondary: "Sobre mim",
    section_label: "Portfólio",
    section_title: "Um olhar sobre meus melhores trabalhos",
    projects: [
      {
        title: "AuraMax",
        category: "Produto",
        type: "Landing Page",
        slug: "auramax",
      },
      {
        title: "Scaramuzzi",
        category: "Imobiliário",
        type: "Website Luxo",
        slug: "scaramuzzi",
      },
      {
        title: "Caixinha 2026",
        category: "Finanças",
        type: "Web App",
        slug: "caixinha-2026",
      },
      {
        title: "Dra. Maiara",
        category: "Saúde",
        type: "Website",
        slug: "maiara-psicologia",
      },
      {
        title: "Anna Psicologia",
        category: "Saúde",
        type: "Landing Page",
        slug: "anna-psicologia",
      },
      {
        title: "Tô Por Aí no Mundo",
        category: "Viagem",
        type: "Blog/Expedições",
        slug: "to-por-ai-no-mundo",
      },
    ],
    cta_title: "Tem um projeto em mente? Vamos transformar sua ideia.",
    cta_primary: "Fale comigo",
    cta_secondary: "Serviços",
  },
  project_page: {
    challenge_title: "O Desafio",
    solution_title: "A Solução",
    technology_title: "Tecnologia",
    view_live: "Ver Projeto Ao Vivo",
    cta_title: "Gostou deste projeto?",
    back_to_portfolio: "Voltar ao Portfólio",
  },
  project_details: project_details_pt as any,
};

const en: Translations = {
  nav: {
    about: "About",
    portfolio: "Portfolio",
    services: "Services",
    cta: "Contact",
  },
  hero: {
    title: "Building High-Level Digital Experiences",
    subtitle:
      "Full Stack Developer focused on creating modern, scalable, and user-centric web applications.",
    cta_primary: "View Projects",
    cta_secondary: "About Me",
    badge1_title: "High Performance",
    badge1_sub: "Optimized for speed",
    badge2_title: "Clean Code",
    badge2_sub: "Scalable and maintainable",
    badge3_title: "UX Focused",
    badge3_sub: "Intuitive design",
    badge4_title: "Reliable Dev",
    badge4_sub: "Guaranteed delivery",
  },
  techstack: {
    headline: "Technologies I use to bring great ideas to life",
  },
  projects: {
    label: "Selected Projects",
    title: "Featured",
    title_italic: "Works",
    subtitle:
      "A collection of projects that demonstrate my passion for design and development.",
    cta: "View all projects",
  },
  services: {
    label: "What I do",
    title: "Digital",
    title_italic: "Solutions",
    items: [
      {
        title: "Frontend",
        description: "Modern interfaces with React and Next.js.",
        tags: ["React", "Next.js", "Tailwind"],
      },
      {
        title: "Backend",
        description: "Robust and scalable APIs.",
        tags: ["Node.js", "PostgreSQL", "Prisma"],
      },
      {
        title: "UI/UX",
        description: "User experience focused design.",
        tags: ["Figma", "Framer Motion"],
      },
      {
        title: "No-Code & CMS",
        description: "Professional, manageable websites focused on conversion.",
        tags: ["WordPress", "Framer", "Shopify", "Webflow"],
      },
    ],
  },
  contact: {
    label: "Let's talk?",
    title: "Ready for the",
    title_italic: "Next Step",
    cta: "Get in touch",
  },
  footer: {
    rights: "All rights reserved.",
  },
  about: {
    hero_title:
      "Transforming ideas into digital reality through code and design.",
    hero_cta_portfolio: "View Portfolio",
    hero_cta_services: "My Services",
    story_label: "My Story",
    story_title: "Developer by passion, problem solver by nature.",
    story_text:
      "I am a Full Stack developer focused on creating solutions that not only work but delight. With experience in modern technologies, I always seek the balance between performance and aesthetics.",
    values_label: "Values",
    values_title: "What guides my work",
    value1_title: "Quality",
    value1_text:
      "Clean and well-structured code is the foundation of any successful project.",
    value2_title: "Innovation",
    value2_text:
      "Always exploring new technologies to deliver the best result.",
    value3_title: "Commitment",
    value3_text: "Total focus on delivery and customer satisfaction.",
    faq_label: "FAQ",
    faq_title: "Frequently Asked Questions",
    faq_q1: "What is your main stack?",
    faq_a1: "I mainly work with React, Next.js, Node.js, and Tailwind CSS.",
    faq_q2: "Do you work as a freelancer?",
    faq_a2:
      "Yes, I am available for freelance projects and long-term contracts.",
    faq_q3: "Do you do design too?",
    faq_a3: "Yes, I focus on UI/UX and use Figma for prototyping.",
    faq_q4: "How to get in touch?",
    faq_a4: "You can use the contact form or reach out to me on LinkedIn.",
  },
  contact_page: {
    left_title_line1: "Let's",
    left_title_line2: "Create Something",
    left_title_line3: "Amazing",
    email_label: "hello@loureiroyuri.com",
    phone_label: "+351 912 448 530",
    form_title: "Send a message",
    full_name: "Full Name",
    email: "Email",
    phone: "Phone",
    service: "Service of Interest",
    service_placeholder: "Select a service",
    message: "Your Message",
    submit: "Send Message",
  },
  services_page: {
    hero_title: "Solutions designed for your success",
    hero_cta_primary: "Get in touch",
    hero_cta_secondary: "View portfolio",
    section_label: "Services",
    section_title: "Tailored solutions",
    section_subtitle:
      "From design to deployment: modern, scalable delivery with a performance-first mindset.",
    cards: [
      {
        title: "Web Development",
        desc: "Modern Next.js/React apps with strong performance and UX.",
        tags: ["Web Apps", "Landing Pages", "Frontend"],
      },
      {
        title: "Backend & APIs",
        desc: "Robust APIs, integrations and architectures built to scale.",
        tags: ["Node.js", "REST", "Auth"],
      },
      {
        title: "UI & Microinteractions",
        desc: "Polished interfaces with subtle motion and visual consistency.",
        tags: ["Framer Motion", "Tailwind", "Design System"],
      },
      {
        title: "Performance & SEO",
        desc: "Loading, accessibility and technical SEO improvements.",
        tags: ["Core Web Vitals", "A11y", "SEO"],
      },
      {
        title: "Technical Consulting",
        desc: "Code review, stack decisions and practical engineering guidance.",
        tags: ["Code Review", "Architecture", "Mentoring"],
      },
    ],
    cta_bar_title: "See my work in action. Ready to start your journey?",
    cta_bar_primary: "Get in touch",
    cta_bar_secondary: "Portfolio",
    process_label: "How I work",
    process_title: "From concept to completion",
    process_steps: [
      {
        n: "01",
        title: "Discovery",
        text: "Align on goals, constraints, and define what success looks like.",
        meta: "1–2 days",
        chip: "Alignment",
      },
      {
        n: "02",
        title: "Design",
        text: "Shape the experience: flows, UI and microinteractions (when needed).",
        meta: "3–7 days",
        chip: "Blueprint",
      },
      {
        n: "03",
        title: "Development",
        text: "Build with clean code, reusable components and performance in mind.",
        meta: "1–4 weeks",
        chip: "Build",
      },
      {
        n: "04",
        title: "Testing",
        text: "Manual QA + cross-device, responsive and accessibility adjustments.",
        meta: "2–5 days",
        chip: "QA",
      },
      {
        n: "05",
        title: "Deployment",
        text: "Ship and configure the environment (e.g., Vercel), monitoring the release.",
        meta: "1–2 days",
        chip: "Launch",
      },
      {
        n: "06",
        title: "Ongoing support",
        text: "Iterate and improve over time based on needs and feedback.",
        meta: "ongoing",
        chip: "Evolution",
      },
    ],
    faq_label: "FAQ",
    faq_title: "Your questions, answered",
    faqs: [
      {
        q: "What services do you offer?",
        a: "Web apps, landing pages, UI engineering, APIs and technical consulting focused on performance and maintainability.",
      },
      {
        q: "How do you start a new project?",
        a: "Discovery and scope alignment first. Then UI/architecture, implementation and QA — with weekly progress updates.",
      },
      {
        q: "Do you work with international teams?",
        a: "Yes. I'm comfortable with async communication, documentation and GitHub-based collaboration.",
      },
      {
        q: "What do you need to get started?",
        a: "Project goals, references, target users, must-have requirements and timeline. Then I propose a plan and next steps.",
      },
    ],
  },
  portfolio_page: {
    hero_title: "Transforming ideas into digital solutions",
    hero_cta_primary: "Get in touch",
    hero_cta_secondary: "About me",
    section_label: "Portfolio",
    section_title: "A glimpse into my best work",
    projects: [
      {
        title: "AuraMax",
        category: "Product",
        type: "Landing Page",
        slug: "auramax",
      },
      {
        title: "Scaramuzzi",
        category: "Real Estate",
        type: "Luxury Website",
        slug: "scaramuzzi",
      },
      {
        title: "Caixinha 2026",
        category: "Finance",
        type: "Web App",
        slug: "caixinha-2026",
      },
      {
        title: "Dra. Maiara",
        category: "Health",
        type: "Website",
        slug: "maiara-psicologia",
      },
      {
        title: "Anna Psicologia",
        category: "Health",
        type: "Landing Page",
        slug: "anna-psicologia",
      },
      {
        title: "Tô Por Aí no Mundo",
        category: "Travel",
        type: "Blog/Expeditions",
        slug: "to-por-ai-no-mundo",
      },
    ],
    cta_title: "Have a project in mind? Let's transform your idea.",
    cta_primary: "Get in touch",
    cta_secondary: "Services",
  },
  project_page: {
    challenge_title: "The Challenge",
    solution_title: "The Solution",
    technology_title: "Technology",
    view_live: "View Live Project",
    cta_title: "Liked this project?",
    back_to_portfolio: "Back to Portfolio",
  },
  project_details: project_details_en as any,
};

const LanguageContext = createContext<
  | {
      language: Language;
      setLanguage: (lang: Language) => void;
      t: Translations;
    }
  | undefined
>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("pt");
  const t = language === "pt" ? pt : en;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export const translations = { pt, en };
