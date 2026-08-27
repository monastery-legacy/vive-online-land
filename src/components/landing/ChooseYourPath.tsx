"use client";

import Link from "next/link";
import { sendMetaEvent } from "@/lib/meta-events";
import {
  Search,
  ClipboardCheck,
  MessageSquare,
  MapPin,
  Activity,
  Heart,
  ShieldCheck,
  Users,
  Clock,
  Sparkles,
  Zap,
  CheckCircle2,
} from "lucide-react";

const paths = [
  {
    title: "Plan Viajero Estándar",
    subtitle: "La opción perfecta para organizar tus vacaciones, alojamientos y traslados con seguridad.",
    features: [
      { text: "Búsqueda y Reserva de Hoteles Verificados", icon: Activity },
      { text: "Renta de Autos con Kilometraje Ilimitado", icon: Sparkles },
      { text: "Asistencia y Soporte en Viajes 24/7", icon: Heart },
      { text: "Acceso a Eventos y Tours Locales", icon: MessageSquare },
      { text: "Asesoría en Requisitos de Viaje", icon: MapPin },
      { text: "Garantía y Seguridad en tu Reserva", icon: ShieldCheck }
    ],
    href: "https://api.whatsapp.com/send/?phone=393342451123&text&type=phone_number&app_absent=0",
    buttonText: "Reservar mi Viaje ahora",
    highlighted: false,
    glowColor: "bg-white/20",
    tag: "Plan Inicial",
    tagColor: "bg-gradient-to-r from-[#2d1b4e] to-[#9b4dca]"
  },
  {
    title: "Plan Viajero VIP",
    subtitle: "La experiencia premium con atención personalizada, tours exclusivos y traslados ejecutivos.",
    features: [
      { text: "Todo lo incluido en el Plan Estándar", icon: CheckCircle2 },
      { text: "Asesoría Personalizada de Viajes en Vivo", icon: Zap },
      { text: "Reservas Prioritarias en Hoteles 5 Estrellas", icon: Search },
      { text: "Alquiler de Vehículos de Lujo y SUV", icon: ClipboardCheck },
      { text: "Pases Exclusivos a Eventos Internacionales", icon: Sparkles },
      { text: "Seguro de Viaje Completo Cobertura Total", icon: Clock },
      { text: "Atención Concierge 24/7 y Gestión de Itinerario", icon: ShieldCheck },
      { text: "Descuentos Exclusivos en Paquetes VIP", icon: Users }
    ],
    href: "https://api.whatsapp.com/send/?phone=393342451123&text&type=phone_number&app_absent=0",
    buttonText: "Reservar mi Experiencia VIP",
    highlighted: true,
    glowColor: "bg-white/20",
    tag: "¡Más Popular!",
    tagColor: "bg-gradient-to-r from-[#2d1b4e] to-[#9b4dca]"
  }
];

export default function ChooseYourPath() {
  return (
    <section id="planes" className="pt-20 md:pt-28 pb-16 md:pb-20 bg-[#050507] relative overflow-hidden font-sans">
      {/* Sutil efecto de cuadrícula de fondo */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />

      {/* Degradado superior para suavizar la unión con el Hero */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#050507] -translate-y-full" />

      <div className="container max-w-[1400px] mx-auto px-4 md:px-6 relative z-10">

        {/* Header Centrado Simplificado */}
        <div className="mb-12 md:mb-20 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-normal tracking-tight text-white leading-tight mb-4">
            Elige tu Plan de Viaje en Vive Online
          </h2>
          <p className="text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Selecciona la ruta ideal para tus próximas vacaciones. Paquetes y servicios exclusivos para viajar con total comodidad y tranquilidad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 max-w-5xl gap-5 md:gap-6 lg:gap-8 mx-auto items-stretch">
          {paths.map((path, index) => (
            <div key={index} className="relative group w-full flex flex-col">

              {/* Glow Effect Background */}
              <div className={`absolute -inset-2 ${path.glowColor} rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              {/* Card Content */}
              <div className="relative flex-1 bg-black border border-white/10 rounded-[2rem] p-5 md:p-6 lg:p-8 flex flex-col ring-1 ring-white/5 shadow-2xl overflow-hidden hover:bg-black transition-colors duration-300">

                {/* Visual Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl" />

                {/* Floating Tag */}
                {path.tag && (
                  <div className={`absolute top-0 right-0 ${path.tagColor} text-white text-[10px] font-medium uppercase tracking-widest px-3 py-1.5 md:px-6 md:py-2 rounded-bl-3xl shadow-lg z-20 animate-pulse`}>
                    {path.tag}
                  </div>
                )}

                {/* Title & Subtitle with fixed min-height for EXACT button alignment */}
                <div className="flex flex-col items-center text-center mb-4 md:mb-6 lg:mb-8 min-h-[5rem] md:min-h-[5.5rem] justify-start shrink-0">
                  <h3 className="text-xl md:text-2xl font-normal text-white tracking-tight mb-3 md:mb-4 leading-relaxed">{path.title}</h3>
                  <p className="text-slate-400 text-sm font-light leading-loose">{path.subtitle}</p>
                </div>

                {/* CTA Button - Perfectly aligned across both cards */}
                <div className="flex flex-col items-center gap-3 mt-2 mb-5 md:mb-8 w-full shrink-0">
                  <a 
                    href={path.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => sendMetaEvent('Lead', { source: 'ChooseYourPath: ' + path.title })}
                    className={`w-full py-2.5 md:py-3 rounded-full bg-transparent text-white font-normal text-base shadow-2xl hover:scale-[1.03] active:scale-95 transition-all duration-300 border border-white/40 hover:bg-gradient-to-r hover:from-[#2d1b4e] hover:to-[#9b4dca] hover:border-[#2d1b4e] text-center`} 
                    aria-label={`Ir a ${path.title}`}
                  >
                    {path.buttonText}
                  </a>
                </div>

                <div className="space-y-4 md:space-y-5 flex-1">
                  <p className="text-white font-normal text-xs uppercase tracking-widest opacity-50 mb-3 md:mb-5 text-center">¿Qué incluye el plan?</p>
                  {path.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3 text-slate-300 group/item cursor-default leading-loose">
                      <div className="mt-1.5 transition-transform group-hover/item:scale-110 shrink-0">
                        <feature.icon className="w-5 h-5 text-white" strokeWidth={1.5} />
                      </div>
                      <span className="text-sm font-normal text-slate-100 group-hover/item:text-white transition-colors">
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
