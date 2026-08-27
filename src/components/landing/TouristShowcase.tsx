"use client";

import { useRef } from "react";
import Link from "next/link";
import { sendMetaEvent } from "@/lib/meta-events";
import { Button } from '@/components/ui/button';
import InlineYouTubeFeature from "@/components/landing/InlineYouTubeFeature";

export default function TouristShowcase() {
    const ref = useRef(null);

    return (
        <section className="py-12 md:py-16 lg:py-20 bg-white text-black overflow-hidden font-sans">
            <div className="container mx-auto px-6 max-w-[1600px]">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center lg:items-center">
                    
                    {/* Left Column: Text */}
                    <div className="w-full lg:w-[30%] flex flex-col pt-2 lg:pt-4 pr-0 lg:pr-4">
                        <h2 className="font-normal tracking-tight text-black mb-6 leading-[1.1]">
                            <span className="text-3xl md:text-4xl lg:text-5xl block mb-2 font-medium">Match Dating Pro</span>
                            <span className="text-gray-500 text-xl md:text-2xl lg:text-3xl font-light">Conexiones internacionales & intercambio cultural</span>
                        </h2>
                        <p className="text-gray-600 text-base leading-[1.7] font-light">
                            El plan Match Dating Pro rompe las barreras geográficas y culturales. Conecta con personas increíbles de distintos países, aprende sobre nuevas culturas, estilos de vida e idiomas mientras buscas a tu pareja ideal.<br /><br /> Accede a filtros avanzados de compatibilidad, me gustas ilimitados, modo incógnito y la posibilidad de saber a quién le gustas de inmediato. Experimenta el nivel más exclusivo y efectivo de emparejamiento.
                        </p>
                        <div className="mt-6 flex flex-col sm:flex-row gap-4">
                            <Button asChild className="w-full sm:w-64 px-5 py-2.5 bg-gradient-to-r from-[#2d1b4e] to-[#9b4dca] border border-[#2d1b4e] text-white rounded-full hover:[transition-property:transform,box-shadow] transition-all flex justify-center items-center hover:scale-105 hover:shadow-lg text-sm">
                                <a href="https://api.whatsapp.com/send/?phone=393342451123&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" onClick={() => sendMetaEvent('Lead', { source: 'TouristShowcase: Encontrar Pareja Pro' })}>Encontrar mi Pareja ahora</a>
                            </Button>
                            <Button asChild className="w-full sm:w-64 px-5 py-2.5 bg-transparent border border-black text-black rounded-full hover:bg-gradient-to-r hover:from-[#2d1b4e] hover:to-[#9b4dca] hover:text-white hover:border-[#2d1b4e] hover:[transition-property:transform,box-shadow] transition-all flex justify-center items-center hover:scale-105 hover:shadow-lg text-sm">
                                <Link href="#planes" onClick={() => sendMetaEvent('Lead', { source: 'TouristShowcase: Conocer Plan Pro' })}>Ver Detalles del Plan Pro</Link>
                            </Button>
                        </div>
                    </div>

                    {/* Right Column: Video/Media */}
                    <div ref={ref} className="w-full lg:w-[70%] relative aspect-video rounded-3xl overflow-hidden shadow-2xl bg-black">
                        <InlineYouTubeFeature
                            videoId="9NEnvqghAAo"
                            startSeconds={2040}
                            posterSrc="/assets/generated/tourist_showcase_disney.png"
                            posterAlt="Match Dating Pro - Conexiones Internacionales"
                            className="rounded-3xl w-full h-full"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}
