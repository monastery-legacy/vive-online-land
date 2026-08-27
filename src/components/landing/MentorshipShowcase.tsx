"use client";

import { useRef } from "react";
import { sendMetaEvent } from "@/lib/meta-events";
import { Button } from "@/components/ui/button";
import InlineYouTubeFeature from "@/components/landing/InlineYouTubeFeature";

export default function MentorshipShowcase() {
    const containerRef = useRef(null);

    return (
        <section className="py-12 md:py-16 lg:py-20 bg-white text-black overflow-hidden font-sans">
            <div className="container mx-auto px-6 max-w-[1600px]">
                <div className="flex flex-col lg:flex-row-reverse gap-8 lg:gap-16 items-center lg:items-center">
                    
                    {/* Left Column: Text */}
                    <div className="w-full lg:w-[30%] flex flex-col pt-2 lg:pt-4 pl-0 lg:pl-4">
                        <h2 className="font-normal tracking-tight text-black mb-6 leading-[1.1]">
                            <span className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl block mb-2 font-medium">Eventos & Experiencias</span>
                            <span className="text-gray-500 text-xl md:text-2xl lg:text-3xl font-light">Acceso VIP a conciertos, espectáculos y tours internacionales</span>
                        </h2>
                        <p className="text-gray-600 text-base leading-[1.7] font-light mb-8">
                            Organizar un viaje inolvidable va más allá del alojamiento. En Vive Online coordinamos tu acceso a eventos exclusivos, festivales, conciertos, eventos deportivos y experiencias gastronómicas de primer nivel en cualquier rincón del planeta.<br /><br />
                            Te acompañamos en cada detalle logístico para que disfrutes de tu itinerario de forma amena, segura y sin contratiempos.
                        </p>
                        <a href="https://api.whatsapp.com/send/?phone=393342451123&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" onClick={() => sendMetaEvent('Lead', { source: 'MentorshipShowcase: Cotizar Eventos' })}>
                           <Button className="mt-6 w-64 px-5 py-2.5 bg-gradient-to-r from-[#2d1b4e] to-[#9b4dca] border border-[#2d1b4e] text-white rounded-full hover:[transition-property:transform,box-shadow] transition-all flex justify-center items-center hover:scale-105 hover:shadow-lg text-sm">Cotizar Eventos por WhatsApp</Button>
                        </a>
                    </div>

                    {/* Right Column: Video/Media */}
                    <div ref={containerRef} className="w-full lg:w-[70%] relative aspect-video bg-[#0a0a0a] rounded-3xl overflow-hidden shadow-2xl">
                        <InlineYouTubeFeature
                            videoId="eIehK9fENJs"
                            startSeconds={17}
                            posterAlt="Vive Online - Eventos y Experiencias"
                            className="rounded-3xl w-full h-full"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}
