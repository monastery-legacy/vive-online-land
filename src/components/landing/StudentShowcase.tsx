"use client";

import Link from "next/link";
import { sendMetaEvent } from "@/lib/meta-events";
import { Button } from "@/components/ui/button";
import InlineYouTubeFeature from "@/components/landing/InlineYouTubeFeature";

const STUDENT_SHOWCASE_VIDEO_ID = "rLGS2ecW1Rw";
const STUDENT_SHOWCASE_START_SECONDS = 1530;
const STUDENT_SHOWCASE_POSTER = "/assets/generated/student_showcase_campus.png";

export default function StudentShowcase() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white text-black overflow-hidden font-sans">
      <div className="container mx-auto px-6 max-w-[1600px]">
        <div className="flex flex-col lg:flex-row-reverse gap-8 lg:gap-16 items-center lg:items-center">
          <div className="w-full lg:w-[30%] flex flex-col pt-2 lg:pt-4 pl-0 lg:pl-4">
            <h2 className="font-normal tracking-tight text-black mb-6 leading-[1.1]">
              <span className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl block mb-2 font-medium">
                Match Dating
              </span>
              <span className="text-gray-500 text-xl md:text-2xl lg:text-3xl font-light">
                Conexiones auténticas basadas en honestidad
              </span>
            </h2>
            <p className="text-gray-600 text-base leading-[1.7] font-light">
              Nuestro plan Match Dating está diseñado para quienes buscan una experiencia de citas transparente y sin falsas apariencias. Gracias a nuestro algoritmo de afinidad inteligente y perfiles 100% verificados, podrás conectar de forma directa con personas que comparten tu estilo de vida, pasiones y visión del mundo.
              <br />
              <br />
              Conoce la cultura, gustos e historias de personas fascinantes. Fomentamos la honestidad y la seguridad en cada interacción para que disfrutes de conversaciones reales y encuentres a tu persona ideal.
            </p>
            <p className="text-xs text-gray-400 mt-4 leading-relaxed">
              *Cada perfil pasa por una verificación de identidad para garantizar una comunidad segura y de alta calidad.*
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                className="w-full sm:w-64 px-5 py-2.5 bg-gradient-to-r from-[#2d1b4e] to-[#9b4dca] border border-[#2d1b4e] text-white rounded-full hover:[transition-property:transform,box-shadow] transition-all flex justify-center items-center hover:scale-105 hover:shadow-lg text-sm"
              >
                <a href="https://api.whatsapp.com/send/?phone=393342451123&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" onClick={() => sendMetaEvent('Lead', { source: 'StudentShowcase: Encontrar Pareja' })}>Encontrar mi Pareja ahora</a>
              </Button>
              <Button
                asChild
                className="w-full sm:w-64 px-5 py-2.5 bg-transparent border border-black text-black rounded-full hover:bg-gradient-to-r hover:from-[#2d1b4e] hover:to-[#9b4dca] hover:text-white hover:border-[#2d1b4e] hover:[transition-property:transform,box-shadow] transition-all flex justify-center items-center hover:scale-105 hover:shadow-lg text-sm"
              >
                <Link href="#planes" onClick={() => sendMetaEvent('Lead', { source: 'StudentShowcase: Conocer Plan' })}>Ver Detalles del Plan</Link>
              </Button>
            </div>
          </div>

          <div className="w-full lg:w-[70%] relative aspect-video rounded-3xl overflow-hidden shadow-2xl bg-black">
            <InlineYouTubeFeature
              videoId={STUDENT_SHOWCASE_VIDEO_ID}
              startSeconds={STUDENT_SHOWCASE_START_SECONDS}
              posterSrc={STUDENT_SHOWCASE_POSTER}
              posterAlt="Match Dating - Conexiones Auténticas"
              className="rounded-3xl w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
