"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  {
    id: "europa",
    title: "Viajes a Europa y Visados",
    faqs: [
      {
        question: "¿Qué requisitos y visados necesito para viajar a Europa?",
        answer: "Para viajar a Europa (Zona Schengen) requieres pasaporte vigente (con al menos 3 a 6 meses de validez desde la fecha de salida), boleto de ida y vuelta confirmado, reserva de hotel o carta de invitación, comprobantes de solvencia económica y seguro de viaje internacional. Dependiendo de tu nacionalidad, necesitarás una Visa Schengen o el permiso ETIAS."
      },
      {
        question: "¿Es obligatorio el Seguro de Viaje Internacional para la Zona Schengen?",
        answer: "Sí, es un requisito legal obligatorio para ingresar a los 29 países del espacio Schengen. El seguro debe ofrecer una cobertura médica mínima de 30,000 euros para emergencias médicas, hospitalización y repatriación."
      },
      {
        question: "¿Cómo me asesora Vive Online con la gestión de visados para Europa?",
        answer: "En Vive Online te brindamos asesoría personalizada paso a paso: revisamos tus documentos, organizamos tus itinerarios de vuelo, reservamos alojamientos verificados y te guiamos en el llenado de formularios para asegurar que tu solicitud cumpla con todos los estándares consulares."
      },
      {
        question: "¿Con cuánta anticipación debo tramitar mi viaje o visado a Europa?",
        answer: "Recomendamos iniciar tu trámite entre 2 y 3 meses antes de la fecha planificada de tu viaje. Esto te permite obtener citas consulares sin prisas, asegurar tarifas preferenciales en hoteles y organizar tu itinerario con total tranquilidad."
      }
    ]
  },
  {
    id: "servicios",
    title: "Reservas, Hoteles y Movilidad",
    faqs: [
      {
        question: "¿Qué servicios de viaje incluye Vive Online?",
        answer: "Ofrecemos reservas en hoteles y alojamientos turísticos seleccionados, renta de autos sin cobros ocultos y con kilometraje ilimitado, traslados privados aeropuerto-hotel, así como accesos VIP a eventos, espectáculos y tours internacionales."
      },
      {
        question: "¿Cómo puedo solicitar o reservar un servicio?",
        answer: "Puedes seleccionar tu plan o servicio directamente en nuestra plataforma y presionar el botón de WhatsApp. Un asesor especializado en viajes atenderá tu consulta de inmediato para confirmar tus fechas y detalles personalizados."
      },
      {
        question: "¿Tienen garantías en las reservas de hoteles y vehículos?",
        answer: "Sí, todas nuestras reservas son 100% verificadas directamente con los proveedores oficiales, garantizando tarifas transparentes, confirmación inmediata y soporte continuo durante tu estadía."
      }
    ]
  },
  {
    id: "seguridad",
    title: "Seguridad y Asistencia 24/7",
    faqs: [
      {
        question: "¿Qué tipo de soporte recibo durante mi viaje en el extranjero?",
        answer: "Contamos con una línea de atención y soporte por WhatsApp 24/7. Ante cualquier duda, imprevisto o cambio de itinerario durante tu viaje por Europa u otros continentes, nuestro equipo estará disponible para asistirte en tiempo real."
      },
      {
        question: "¿Mis datos personales y comprobantes de viaje están protegidos?",
        answer: "Totalmente. Toda tu información de viaje, copias de pasaporte y comprobantes de reserva están protegidos mediante encriptación y estrictas políticas de confidencialidad y privacidad."
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
      <div className="container mx-auto px-4 md:px-6 max-w-[1400px] relative z-10">
        
        {/* Header */}
        <div className="mb-16 text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-4 text-white">
            Tus dudas resueltas <br className="hidden md:inline" />
            <span className="text-gray-400">sobre viajes y visados a Europa</span>
          </h2>
          <p className="text-lg text-gray-400 font-normal leading-relaxed max-w-2xl mx-auto">
            Encuentra toda la información sobre requisitos de ingreso a Europa, visados Schengen, hoteles, traslados y asistencia personalizada para tus vacaciones.
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
        <div className="border-t border-white/10 divide-y divide-white/10 mb-20 max-w-4xl mx-auto">
          <AnimatePresence initial={false}>
            {filteredFaqs.map((faq, idx) => {
              const id = `${faq.categoryId}-${idx}`;
              const isExpanded = expandedIndex === id;

              return (
                <div key={id} className="py-5 transition-colors duration-300 hover:bg-white/[0.02] px-2 rounded-xl">
                  <button
                    onClick={() => toggleExpand(id)}
                    className="w-full flex items-center justify-between text-left gap-4 group"
                  >
                    <span className="text-lg md:text-xl font-medium text-white group-hover:text-gray-200 transition-colors">
                      {faq.question}
                    </span>
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
                        <div className="pb-4 pt-3 text-sm md:text-base text-gray-400 font-light leading-relaxed text-justify max-w-3xl">
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

        {/* Bottom Banner */}
        <div className="bg-gradient-to-r from-white/5 via-white/[0.08] to-white/5 border border-white/10 rounded-3xl p-8 md:p-12 text-center max-w-3xl mx-auto backdrop-blur-xl">
          <h3 className="text-2xl md:text-3xl font-medium text-white mb-3 tracking-tight">
            ¿Tienes alguna consulta sobre tu visado o itinerario a Europa?
          </h3>
          <p className="text-gray-400 text-sm md:text-base mb-8 max-w-xl mx-auto font-light">
            Nuestro equipo de asesores turísticos resolverá tus preguntas en vivo por WhatsApp de forma inmediata.
          </p>
          <a
            href="https://api.whatsapp.com/send/?phone=393342451123&text=Hola!%20Tengo%20preguntas%20sobre%20los%20requisitos%20y%20visados%20para%20viajar%20a%20Europa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3.5 bg-white text-black hover:bg-gray-100 rounded-full font-semibold text-sm md:text-base transition-all duration-300 hover:scale-105 shadow-xl"
          >
            Hablar con un Asesor por WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}
