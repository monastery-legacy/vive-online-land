"use client";

import { Button } from '@/components/ui/button';
import { sendMetaEvent } from "@/lib/meta-events";

export default function FreeTrainingShowcase() {
    return (
        <section className="pt-12 md:pt-16 lg:pt-20 pb-16 md:pb-20 lg:pb-24 bg-white text-black overflow-hidden font-sans">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="flex flex-col items-center text-center">
                    
                    {/* Premium Capsule Tag */}
                    <div className="w-fit mb-6 bg-gradient-to-r from-[#2d1b4e] to-[#9b4dca] text-white text-[10px] md:text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md select-none">
                        RECURSOS Y GUÍAS DE VIAJE
                    </div>
                    
                    <h2 className="font-normal tracking-tight text-black mb-6 leading-[1.1]">
                        <span className="text-3xl md:text-4xl lg:text-5xl block mb-2 font-medium">Guías & Consejos de Viaje</span>
                        <span className="text-gray-500 text-xl md:text-2xl lg:text-3xl font-light">Para planificar tus vacaciones con tranquilidad y confianza</span>
                    </h2>
                    
                    <p className="text-gray-600 text-base leading-[1.7] font-light max-w-2xl">
                        Accede de forma inmediata a nuestras guías de viaje, consejos de seguridad en aeropuertos, recomendaciones gastronómicas, requisitos de visado e itinerarios recomendados en los destinos más atractivos.<br /><br />
                        Una recopilación práctica de herramientas diseñadas para que viajes con total seguridad, aproveches tus días al máximo y disfrutes de momentos inolvidables.
                    </p>
                    
                    <Button asChild className="mt-8 w-64 px-5 py-2.5 bg-gradient-to-r from-[#2d1b4e] to-[#9b4dca] border border-[#2d1b4e] text-white rounded-full hover:[transition-property:transform,box-shadow] transition-all flex justify-center items-center hover:scale-105 hover:shadow-lg text-sm">
                        <a 
                            href="https://api.whatsapp.com/send/?phone=393342451123&text&type=phone_number&app_absent=0" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            onClick={() => sendMetaEvent('Lead', { source: 'FreeTrainingShowcase: Planificar Viaje' })} 
                        >
                            Planificar mi Viaje por WhatsApp
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
}
