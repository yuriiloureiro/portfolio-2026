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
    about: {
      hero_title: "Mentes Apaixonadas, Soluções Inspiradoras",
      hero_cta_portfolio: "Nosso Portfólio",
      hero_cta_services: "Nossos Serviços",
      story_label: "Nossa História",
      story_title: "As Crônicas de Yuri",
      story_text:
        "Desenvolvedor Full Stack apaixonado por transformar ideias complexas em interfaces intuitivas e códigos de alta performance. Com foco em tecnologias modernas como Next.js e Node.js, busco sempre o equilíbrio entre estética e funcionalidade.",
      values_label: "Nossos Valores",
      values_title: "O que nos move",
      value1_title: "Inovação Constante",
      value1_text:
        "Sempre na fronteira das novas tecnologias para entregar o melhor.",
      value2_title: "Qualidade de Código",
      value2_text: "Código limpo, testado e fácil de manter a longo prazo.",
      value3_title: "Foco no Usuário",
      value3_text:
        "Design e performance pensados para quem realmente usa o produto.",
      faq_label: "Dúvidas Frequentes",
      faq_title: "Perguntas comuns",
      faq_q1: "Qual é a sua stack principal?",
      faq_a1:
        "Foco em ecossistema JavaScript/TypeScript, utilizando Next.js, React, Node.js e Tailwind CSS para interfaces de alta performance.",
      faq_q2: "Como funciona o seu processo de trabalho?",
      faq_a2:
        "Trabalho de forma ágil, com entregas semanais, comunicação transparente via Slack/Discord e versionamento rigoroso no GitHub.",
      faq_q3: "Você trabalha com projetos internacionais?",
      faq_a3:
        "Sim, estou preparado para atuar em times globais, com fluência técnica e adaptabilidade a diferentes fusos horários.",
      faq_q4: "Qual o prazo médio de entrega?",
      faq_a4:
        "Depende da complexidade, mas um MVP funcional geralmente leva de 4 a 6 semanas, priorizando sempre a qualidade do código.",
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
    about: {
      hero_title: "Passionate Minds, Inspiring Solutions",
      hero_cta_portfolio: "Our Portfolio",
      hero_cta_services: "Our Services",
      story_label: "Our Story",
      story_title: "The Yuri Chronicles",
      story_text:
        "Full Stack Developer passionate about transforming complex ideas into intuitive interfaces and high-performance code. Focusing on modern technologies like Next.js and Node.js, I always seek the balance between aesthetics and functionality.",
      values_label: "Our Values",
      values_title: "What drives us",
      value1_title: "Constant Innovation",
      value1_text:
        "Always at the frontier of new technologies to deliver the best.",
      value2_title: "Code Quality",
      value2_text:
        "Clean, tested, and easy-to-maintain code for the long term.",
      value3_title: "User Focus",
      value3_text:
        "Design and performance designed for those who actually use the product.",
      faq_label: "FAQ",
      faq_title: "Common questions",
      faq_q1: "What is your main tech stack?",
      faq_a1:
        "I focus on the JavaScript/TypeScript ecosystem, using Next.js, React, Node.js, and Tailwind CSS for high-performance interfaces.",
      faq_q2: "How does your workflow work?",
      faq_a2:
        "I work agilely, with weekly deliveries, transparent communication via Slack/Discord, and rigorous versioning on GitHub.",
      faq_q3: "Do you work on international projects?",
      faq_a3:
        "Yes, I am prepared to work in global teams, with technical fluency and adaptability to different time zones.",
      faq_q4: "What is the average delivery time?",
      faq_a4:
        "It depends on the complexity, but a functional MVP usually takes 4 to 6 weeks, always prioritizing code quality.",
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
