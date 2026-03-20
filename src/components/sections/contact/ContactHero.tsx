"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { ChevronDown, CheckCircle2, AlertCircle } from "lucide-react";

export default function ContactHero() {
  const { t } = useLanguage();

  // Estados para o formulário
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Erro ao enviar");

      setStatus("success");
      setFormData({ name: "", email: "", phone: "", service: "", message: "" }); // Limpa o form
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section className="w-full px-2 pb-2">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
        {/* LEFT BLUE CARD */}
        <div className="md:col-span-6 bg-primary rounded-[2.5rem] min-h-[520px] md:min-h-[680px] p-8 md:p-14 flex flex-col justify-between overflow-hidden relative">
          <div>
            <h1 className="font-syne font-semibold tracking-tighter leading-[0.95] text-white text-5xl md:text-7xl">
              {t.contact_page.left_title_line1} <br />
              <span className="text-white/55">
                {t.contact_page.left_title_line2}
              </span>{" "}
              <span className="text-white/55">
                {t.contact_page.left_title_line3}
              </span>
            </h1>
          </div>

          <div className="space-y-4">
            <a
              href="mailto:hello@loureiroyuri.com"
              className="block text-white/85 text-xl md:text-2xl underline underline-offset-8 decoration-white/25 hover:decoration-white/60 transition"
            >
              hello@loureiroyuri.com
            </a>
            <a
              href="tel:+351912448530"
              className="block text-white/85 text-xl md:text-2xl underline underline-offset-8 decoration-white/25 hover:decoration-white/60 transition"
            >
              +351 912 448 530
            </a>
          </div>

          <div className="absolute -top-24 -right-24 w-72 h-72 bg-white/10 blur-[80px] rounded-full" />
        </div>

        {/* RIGHT BLUE CARD (FORM) */}
        <div className="md:col-span-6 bg-primary rounded-[2.5rem] min-h-[520px] md:min-h-[680px] p-8 md:p-14 overflow-hidden relative">
          <h2 className="text-white font-syne font-semibold tracking-tighter text-3xl md:text-4xl mb-10">
            {t.contact_page.form_title}
          </h2>

          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="h-full flex flex-col items-center justify-center text-white gap-4 py-20"
            >
              <CheckCircle2 size={64} className="text-green-400" />
              <h3 className="text-2xl font-bold">Mensagem Enviada!</h3>
              <p className="text-white/60 text-center">
                Obrigado pelo contato. Responderei em breve.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-4 text-sm underline opacity-50 hover:opacity-100"
              >
                Enviar outra mensagem
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Full name */}
              <div className="flex flex-col gap-2">
                <label className="text-white/60 text-[11px] uppercase tracking-[0.22em]">
                  {t.contact_page.full_name}
                </label>
                <input
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="h-12 md:h-14 px-5 rounded-2xl bg-transparent border border-white/15 text-white placeholder:text-white/35 focus:outline-none focus:border-white/35 transition"
                  placeholder="John Anderson"
                />
              </div>

              {/* Email + Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-white/60 text-[11px] uppercase tracking-[0.22em]">
                    {t.contact_page.email}
                  </label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="h-12 md:h-14 px-5 rounded-2xl bg-transparent border border-white/15 text-white placeholder:text-white/35 focus:outline-none focus:border-white/35 transition"
                    placeholder="john.anderson@gmail.com"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-white/60 text-[11px] uppercase tracking-[0.22em]">
                    {t.contact_page.phone}
                  </label>
                  <input
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="h-12 md:h-14 px-5 rounded-2xl bg-transparent border border-white/15 text-white placeholder:text-white/35 focus:outline-none focus:border-white/35 transition"
                    placeholder="+351 912 448 530"
                  />
                </div>
              </div>

              {/* Service */}
              <div className="flex flex-col gap-2">
                <label className="text-white/60 text-[11px] uppercase tracking-[0.22em]">
                  {t.contact_page.service}
                </label>
                <div className="relative">
                  <select
                    required
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    className="appearance-none w-full h-12 md:h-14 px-5 pr-12 rounded-2xl bg-transparent border border-white/15 text-white focus:outline-none focus:border-white/35 transition"
                  >
                    <option value="" disabled className="text-slate-900">
                      {t.contact_page.service_placeholder}
                    </option>
                    <option value="Web Development" className="text-slate-900">
                      Web Development
                    </option>
                    <option
                      value="UI & Microinteractions"
                      className="text-slate-900"
                    >
                      UI & Microinteractions
                    </option>
                    <option value="Backend & APIs" className="text-slate-900">
                      Backend & APIs
                    </option>
                    <option
                      value="Technical Consulting"
                      className="text-slate-900"
                    >
                      Technical Consulting
                    </option>
                  </select>
                  <ChevronDown
                    size={18}
                    className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-white/70"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label className="text-white/60 text-[11px] uppercase tracking-[0.22em]">
                  {t.contact_page.message}
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="px-5 py-4 rounded-2xl bg-transparent border border-white/15 text-white placeholder:text-white/35 focus:outline-none focus:border-white/35 transition resize-none"
                  placeholder="How can I help you?"
                />
              </div>

              {/* Button */}
              <motion.button
                whileHover={{ scale: status === "sending" ? 1 : 1.01 }}
                whileTap={{ scale: status === "sending" ? 1 : 0.99 }}
                disabled={status === "sending"}
                className={`mt-2 h-12 md:h-14 w-full rounded-full font-semibold tracking-wide transition-all ${
                  status === "sending"
                    ? "bg-white/20 text-white cursor-not-allowed"
                    : "bg-white text-primary"
                }`}
                type="submit"
              >
                {status === "sending" ? "Enviando..." : t.contact_page.submit}
              </motion.button>

              {status === "error" && (
                <div className="flex items-center gap-2 text-red-400 text-sm justify-center mt-2">
                  <AlertCircle size={16} />
                  <span>Ocorreu um erro. Tente novamente.</span>
                </div>
              )}
            </form>
          )}

          <div className="absolute -bottom-28 -left-28 w-80 h-80 bg-white/10 blur-[90px] rounded-full" />
        </div>
      </div>
    </section>
  );
}
