"use client";

import { motion } from "framer-motion";
import {
  FileCheck,
  Heart,
  MessageSquare,
  Sparkles,
  Target,
  CheckCircle2
} from "lucide-react";

const stages = [
  {
    id: 1,
    tag: "ETAPA 1",
    title: "Asesoría & Planificación",
    description: "Definimos tus destinos de interés, fechas y preferencias de viaje con atención personalizada.",
    icon: FileCheck,
    supportText: "¿Cómo Vive Online te apoya en esta fase?",
    bullets: [
      { text: "Atención personalizada 1 a 1 por expertos en viajes." },
      { text: "Revisión de requisitos de ingreso y visados." },
      { text: "Optimización de fechas según temporada y presupuesto." }
    ],
    objective: "diseñar el itinerario ideal según tus gustos y presupuesto."
  },
  {
    id: 2,
    tag: "ETAPA 2",
    title: "Alojamientos & Movilidad",
    description: "Seleccionamos hoteles verificados y alquilamos vehículos con las mejores condiciones.",
    icon: Sparkles,
    supportText: "¿Cómo Vive Online te apoya en esta fase?",
    bullets: [
      { text: "Reservas directas en hoteles y resorts de calidad." },
      { text: "Alquiler de autos con kilometraje ilimitado." },
      { text: "Confirmación inmediata y gestión de cambios." }
    ],
    objective: "garantizar comodidad y las mejores tarifas en tu viaje."
  },
  {
    id: 3,
    tag: "ETAPA 3",
    title: "Eventos & Tours Exclusivos",
    description: "Añadimos experiencias inolvidables a tu itinerario sin preocupaciones de logística.",
    icon: MessageSquare,
    supportText: "¿Cómo Vive Online te apoya en esta fase?",
    bullets: [
      { text: "Pases VIP y boletos para eventos internacionales." },
      { text: "Tours guiados y actividades culturales en destino." },
      { text: "Coordinación completa de horarios e itinerarios." }
    ],
    objective: "asegurar actividades y experiencias únicas en el destino."
  },
  {
    id: 4,
    tag: "ETAPA 4",
    title: "Disfrute & Asistencia 24/7",
    description: "Viaja con la tranquilidad de contar con soporte continuo antes y durante tu viaje.",
    icon: Heart,
    supportText: "¿Cómo Vive Online te apoya en esta fase?",
    bullets: [
      { text: "Línea de atención y soporte por WhatsApp 24/7." },
      { text: "Seguro de viaje con cobertura médica e imprevistos." },
      { text: "Comunidad de viajeros y recomendaciones locales." }
    ],
    objective: "vivir una aventura inolvidable con soporte continuo."
  }
];

export default function StageDetails() {
  return (
    <section className="pt-32 bg-white overflow-hidden font-sans" id="fases-viaje">
      <div className="container mx-auto px-6 max-w-[1600px]">

        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-4 text-slate-900">
            ¡El camino hacia <br />
            tus vacaciones ideales!
          </h2>
          <p className="text-xl text-gray-500 font-medium leading-relaxed max-w-2xl">
            Conoce los 4 pasos sencillos para planificar tu viaje de forma cómoda, transparente y segura con Vive Online.
          </p>
        </div>

        {/* CSS Grid for nodes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-32">
            {stages.map((stage) => {
              const Icon = stage.icon;
              return (
                <div
                  key={stage.id}
                  className="group relative w-full flex flex-col justify-start rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)] bg-white/90 backdrop-blur-sm border border-slate-200 transition-shadow hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
                >
                  {/* Content Layout */}
                  <div className="relative p-6 w-full flex flex-col h-full z-10">
                    
                    {/* Header line */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="text-[#9b4dca]">
                        <Icon size={24} />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#2d1b4e] to-[#9b4dca]">
                        {stage.tag}
                      </span>
                    </div>
                    
                    {stage.title && (
                      <h4 className="text-lg md:text-xl font-medium tracking-tight leading-snug mb-2 text-slate-900">
                        {stage.title}
                      </h4>
                    )}
                    
                    <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-5">
                      {stage.description}
                    </p>

                    {/* How we help section */}
                    <div className="flex-1 border-t border-slate-100 pt-5">
                      <p className="font-medium text-xs mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#2d1b4e] to-[#9b4dca]">
                        {stage.supportText}
                      </p>
                      
                      <ul className="space-y-3 mb-6">
                        {stage.bullets.map((bullet, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                            <span className="text-xs text-slate-600 leading-relaxed">{bullet.text}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Objective */}
                    <div className="mt-auto flex items-start gap-2 pt-2">
                      <Target className="w-4 h-4 text-[#9b4dca] shrink-0 mt-0.5" />
                      <p className="text-[11px] text-slate-600 leading-relaxed">
                        <strong className="text-slate-800 font-medium">Objetivo: </strong> 
                        {stage.objective}
                      </p>
                    </div>

                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
