"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import WhatsappIcon from "@/components/icons/WhatsappIcon";

const categories = [
  {
    id: "matchapp",
    title: "Match App",
    faqs: [
      {
        question: "¿Qué es Match App?",
        answer: "Match App es una plataforma de citas y emparejamiento diseñada para conectar personas que buscan relaciones honestas, auténticas y significativas. Combinamos un algoritmo de compatibilidad inteligente con verificación de perfiles y acompañamiento constante."
      },
      {
        question: "¿Cómo funciona el algoritmo de emparejamiento?",
        answer: "Nuestro algoritmo analiza tus valores, aficiones, estilo de vida y metas personales para sugerirte personas verdaderamente afines. Priorizamos la compatibilidad real sobre las coincidencias superficiales."
      },
      {
        question: "¿Qué diferencia hay entre el plan Match Dating y Match Dating Pro?",
        answer: "El plan Match Dating incluye la creación de perfil 360°, algoritmo básico por intereses, chat directo y me gustas diarios. El plan Match Dating Pro desbloquea interacciones ilimitadas, ver a quién le gustas antes de hacer match, filtros avanzados de valores y estilo de vida, boost semanal de visibilidad y modo incógnito."
      },
      {
        question: "¿Por dónde empiezo?",
        answer: "Empiezas seleccionando tu plan (Match Dating o Match Dating Pro) y completando tu perfil con honestidad sobre tus gustos e intereses para empezar a conectar de inmediato."
      }
    ]
  },
  {
    id: "compatibility",
    title: "Compatibilidad e Intereses",
    faqs: [
      {
        question: "¿Cómo se evalúa la afinidad entre usuarios?",
        answer: "Mediante un test de personalidad e intereses donde defines tus pasiones, hábitos y visión de vida. Así garantizamos conversaciones fluidas e interés mutuo desde el primer mensaje."
      },
      {
        question: "¿Puedo conectar con personas de otros países?",
        answer: "¡Por supuesto! Match App fomenta el intercambio cultural y las citas internacionales. Puedes conocer la cultura, costumbres y formas de vivir de personas de distintos países."
      }
    ]
  },
  {
    id: "safety",
    title: "Seguridad y Verificación",
    faqs: [
      {
        question: "¿Cómo garantizan la seguridad y la honestidad en los perfiles?",
        answer: "Cada usuario pasa por un proceso de verificación de identidad de foto y teléfono. Además, nuestro equipo de moderación supervisa continuamente la comunidad para mantener un ambiente seguro y libre de perfiles falsos."
      },
      {
        question: "¿Mis datos personales están protegidos?",
        answer: "Absolutamente. Tus datos están encriptados y solo compartimos lo que tú decides hacer público en tu perfil. Puedes usar el modo incógnito en el plan Pro si deseas mayor privacidad."
      }
    ]
  }
];

export default function FAQsSection() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].id);
  const [expandedIndex, setExpandedIndex] = useState<string | null>(null);

  const filteredFaqs = selectedCategory === "all"
    ? categories.flatMap(cat => cat.faqs.map(faq => ({ ...faq, categoryId: cat.id, categoryTitle: cat.title })))
    : categories.find(cat => cat.id === selectedCategory)?.faqs.map(faq => {
      const cat = categories.find(c => c.id === selectedCategory)!;
      return { ...faq, categoryId: cat.id, categoryTitle: cat.title };
    }) || [];

  const toggleExpand = (id: string) => {
    setExpandedIndex(expandedIndex === id ? null : id);
  };

  return (
    <section id="faqs" className="py-16 md:py-24 lg:py-28 bg-black font-sans text-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl relative z-10">
        
        {/* Header */}
        <div className="mb-16 text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-4 text-white">
            Tus dudas resueltas <br className="hidden md:inline" />
            <span className="text-gray-400">de forma transparente</span>
          </h2>
          <p className="text-lg text-gray-400 font-normal leading-relaxed max-w-2xl mx-auto">
            Encuentra claridad sobre nuestros planes, perfiles verificados y proceso de coincidencia. Honestidad total desde el primer momento.
          </p>
        </div>

        {/* Category Pills (Filtros) */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.id);
                setExpandedIndex(null);
              }}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                selectedCategory === cat.id
                  ? "bg-white text-black shadow-md shadow-white/10"
                  : "bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10 hover:text-white"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Vertical Accordion List */}
        <div className="border-t border-white/10 divide-y divide-white/10 mb-20">
          <AnimatePresence initial={false}>
            {filteredFaqs.map((faq, idx) => {
              const id = `${faq.categoryId}-${idx}`;
              const isExpanded = expandedIndex === id;

              return (
                <div key={id} className="py-5 transition-colors duration-300 hover:bg-white/[0.02] px-2 rounded-xl">
                  <button
                    onClick={() => toggleExpand(id)}
                    className="w-full flex justify-between items-center text-left py-2 group focus:outline-none"
                    aria-expanded={isExpanded}
                  >
                    <div className="flex flex-col gap-1 pr-6">
                      <span className="text-base md:text-lg font-medium text-white transition-colors duration-200">
                        {faq.question}
                      </span>
                    </div>
                    <div
                      className={`flex-shrink-0 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 group-hover:text-white group-hover:bg-white/10 transition-all duration-300 ${
                        isExpanded ? "rotate-180 bg-white border-white text-black group-hover:bg-white group-hover:text-black" : ""
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                          transition: { height: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }, opacity: { duration: 0.25, delay: 0.05 } }
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                          transition: { height: { duration: 0.25, ease: [0.16, 1, 0.3, 1] }, opacity: { duration: 0.15 } }
                        }}
                        className="overflow-hidden"
                      >
                        <div className="pb-4 pt-2 text-sm md:text-base text-gray-400 leading-relaxed max-w-3xl">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* WhatsApp CTA Dudas */}
        <div className="mt-16 text-center max-w-xl mx-auto flex flex-col items-center">
          <p className="text-gray-400 text-xs md:text-sm mb-6 leading-relaxed">
            <span className="font-semibold text-white block mb-1 text-sm md:text-base">¿Aún tienes preguntas?</span>
            Si quieres hablar con nuestro equipo de matchmaking o tienes dudas sobre los planes, estamos listos para atenderte por WhatsApp.
          </p>
          
          <a
            href="https://api.whatsapp.com/send/?phone=393342451123&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-auto px-5 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium text-xs md:text-sm hover:bg-gradient-to-r hover:from-[#2d1b4e] hover:to-[#9b4dca] hover:border-[#2d1b4e] hover:[transition-property:transform,box-shadow] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 transition-all duration-300"
          >
            <WhatsappIcon className="w-4 h-4" />
            <span className="ml-2">Chatear por WhatsApp</span>
          </a>
        </div>
        
      </div>
    </section>
  );
}
