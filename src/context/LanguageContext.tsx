"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "pt" | "en";

type ServiceItem = {
  title: string;
  description: string;
  tags: string[];
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
};

const translations: Record<Language, Translations> = {
  pt: {
    nav: {
      about: "Sobre",
      portfolio: "Portfólio",
      services: "Serviços",
      cta: "Fale Comigo",
    },
    hero: {
      title: "Onde a Visão Encontra o Código para um Amanhã Melhor",
      subtitle:
        "Criando experiências digitais de alta performance com tecnologias modernas e arquiteturas escaláveis.",
      cta_primary: "Sobre mim",
      cta_secondary: "Meu portfólio",
      badge1_title: "Performance em primeiro lugar",
      badge1_sub: "Aplicações rápidas, estáveis e otimizadas.",
      badge2_title: "Clean code de verdade",
      badge2_sub: "Arquiteturas pensadas para crescer sem dor.",
      badge3_title: "Foco total em UX",
      badge3_sub: "Interfaces claras, objetivas e agradáveis.",
      badge4_title: "Parceria confiável",
      badge4_sub: "Comunicação transparente e entregas no prazo.",
    },
    techstack: {
      headline:
        "As tecnologias que uso para construir produtos modernos e escaláveis.",
    },
    projects: {
      label: "Portfólio",
      title: "Projetos",
      title_italic: "em destaque",
      subtitle:
        "Seleção de trabalhos que representam minha forma de pensar produto, código e experiência.",
      cta: "Ver todos os projetos",
    },
    services: {
      label: "Serviços",
      title: "Soluções",
      title_italic: "sob medida",
      items: [
        {
          title: "Desenvolvimento Web",
          description:
            "Aplicações modernas em React/Next.js focadas em performance, acessibilidade e escalabilidade.",
          tags: ["Next.js", "React", "TypeScript", "REST API"],
        },
        {
          title: "UI & Microinterações",
          description:
            "Experiências que conectam visual forte com fluidez, animações sutis e navegação intuitiva.",
          tags: ["Framer Motion", "Tailwind", "Design System"],
        },
        {
          title: "Backend & APIs",
          description:
            "Arquiteturas robustas com Node.js, bancos de dados relacionais e integrações via API.",
          tags: ["Node.js", "PostgreSQL", "Prisma"],
        },
        {
          title: "Consultoria Técnica",
          description:
            "Apoio estratégico em arquitetura, escolhas de stack e revisão de código para times em crescimento.",
          tags: ["Code Review", "Arquitetura", "Mentoria"],
        },
      ],
    },
    contact: {
      label: "Contato",
      title: "Vamos construir algo",
      title_italic: "incrível juntos?",
      cta: "Enviar mensagem",
    },
    footer: {
      rights: "Todos os direitos reservados.",
    },
  },

  en: {
    nav: {
      about: "About",
      portfolio: "Portfolio",
      services: "Services",
      cta: "Contact Me",
    },
    hero: {
      title: "Where Vision Meets Code for a Better Tomorrow",
      subtitle:
        "Crafting high-performance digital experiences with modern technologies and scalable architectures.",
      cta_primary: "About Me",
      cta_secondary: "My Portfolio",
      badge1_title: "Performance first",
      badge1_sub: "Fast, stable and optimized applications.",
      badge2_title: "Clean code mindset",
      badge2_sub: "Architectures designed to scale without pain.",
      badge3_title: "UX as a priority",
      badge3_sub: "Clear, focused and pleasant interfaces.",
      badge4_title: "Reliable partner",
      badge4_sub: "Transparent communication and on-time delivery.",
    },
    techstack: {
      headline: "The technologies I use to build modern and scalable products.",
    },
    projects: {
      label: "Portfolio",
      title: "Selected",
      title_italic: "projects",
      subtitle:
        "A curated selection of work that reflects how I think about product, code and user experience.",
      cta: "View all projects",
    },
    services: {
      label: "Services",
      title: "Tailored",
      title_italic: "solutions",
      items: [
        {
          title: "Web Development",
          description:
            "Modern React/Next.js applications focused on performance, accessibility and scalability.",
          tags: ["Next.js", "React", "TypeScript", "REST API"],
        },
        {
          title: "UI & Microinteractions",
          description:
            "Experiences that blend strong visuals with smooth motion and intuitive navigation.",
          tags: ["Framer Motion", "Tailwind", "Design System"],
        },
        {
          title: "Backend & APIs",
          description:
            "Robust architectures with Node.js, relational databases and API integrations.",
          tags: ["Node.js", "PostgreSQL", "Prisma"],
        },
        {
          title: "Technical Consulting",
          description:
            "Strategic support on architecture, stack decisions and code review for growing teams.",
          tags: ["Code Review", "Architecture", "Mentoring"],
        },
      ],
    },
    contact: {
      label: "Contact",
      title: "Let's build something",
      title_italic: "remarkable together.",
      cta: "Send a message",
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
};

type LanguageContextType = {
  language: Language;
  t: Translations;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "pt" ? "en" : "pt"));
  };

  const value: LanguageContextType = {
    language,
    t: translations[language],
    toggleLanguage,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
