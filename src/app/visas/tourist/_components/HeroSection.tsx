"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FadeIn } from "./Animations";
import { sendMetaEvent } from "@/lib/meta-events";

const videoLinks = [
  "https://firebasestorage.googleapis.com/v0/b/landluxor.firebasestorage.app/o/vive-online%2F16677501_3840_2160_50fps.mp4?alt=media&token=f9a9c6f0-0771-49af-ad4e-f1689009c22f",
  "https://firebasestorage.googleapis.com/v0/b/landluxor.firebasestorage.app/o/vive-online%2F20156158-uhd_3840_2160_24fps.mp4?alt=media&token=d635ab0d-8684-4a07-96eb-cb3ede030517",
  "https://firebasestorage.googleapis.com/v0/b/landluxor.firebasestorage.app/o/vive-online%2F19718378-uhd_3840_2160_25fps.mp4?alt=media&token=164c79c6-354a-48e0-a1ca-eaad226422d8",
  "https://firebasestorage.googleapis.com/v0/b/landluxor.firebasestorage.app/o/vive-online%2F14044120_3840_2160_30fps.mp4?alt=media&token=c39b2381-bc7b-440b-833f-e9125cd63123",
  "https://firebasestorage.googleapis.com/v0/b/landluxor.firebasestorage.app/o/vive-online%2F13437623_3840_2160_25fps.mp4?alt=media&token=c1f4517d-f135-4453-bbb8-7e767420b97c",
  "https://firebasestorage.googleapis.com/v0/b/landluxor.firebasestorage.app/o/vive-online%2F12489170_3840_2160_60fps.mp4?alt=media&token=df058606-85d0-49d7-99ad-6e23182bfc17"
];

export default function HeroSection() {
    const [activeVideo, setActiveVideo] = useState<0 | 1>(0);
    const [index0, setIndex0] = useState(0);
    const [index1, setIndex1] = useState(1);

    const video0Ref = useRef<HTMLVideoElement>(null);
    const video1Ref = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (video0Ref.current) {
            video0Ref.current.play().catch(e => console.log("Autoplay prevent:", e));
        }
    }, []);

    const handleTimeUpdate = (videoNum: 0 | 1) => {
        const currentRef = videoNum === 0 ? video0Ref.current : video1Ref.current;
        if (!currentRef) return;

        const { currentTime, duration } = currentRef;
        
        if (duration > 0 && duration - currentTime <= 1) {
            if (videoNum === activeVideo) {
                const nextVideo = videoNum === 0 ? 1 : 0;
                const nextRef = nextVideo === 0 ? video0Ref.current : video1Ref.current;
                
                if (nextRef) {
                    nextRef.currentTime = 0;
                    nextRef.play().catch(e => console.log("Play error:", e));
                }
                
                setActiveVideo(nextVideo);
                
                setTimeout(() => {
                    if (videoNum === 0) {
                        setIndex0((index1 + 1) % videoLinks.length);
                    } else {
                        setIndex1((index0 + 1) % videoLinks.length);
                    }
                }, 1000);
            }
        }
    };

    const handleEnded = (videoNum: 0 | 1) => {
        if (videoNum === activeVideo) {
            const nextVideo = videoNum === 0 ? 1 : 0;
            const nextRef = nextVideo === 0 ? video0Ref.current : video1Ref.current;
            
            if (nextRef) {
                nextRef.play().catch(e => console.log("Play error:", e));
            }
            setActiveVideo(nextVideo);
            
            if (videoNum === 0) {
                setIndex0((index1 + 1) % videoLinks.length);
            } else {
                setIndex1((index0 + 1) % videoLinks.length);
            }
        }
    };

    return (
        <div className="w-full bg-black relative h-screen overflow-hidden group">

            {/* Background Random Video */}
            <div className="absolute inset-0 w-full h-full">
                <video
                    ref={video0Ref}
                    className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
                        activeVideo === 0 ? 'opacity-100 z-10' : 'opacity-0 z-0'
                    }`}
                    autoPlay
                    muted
                    playsInline
                    preload="metadata"
                    onTimeUpdate={() => handleTimeUpdate(0)}
                    onEnded={() => handleEnded(0)}
                    src={videoLinks[index0]}
                />

                <video
                    ref={video1Ref}
                    className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
                        activeVideo === 1 ? 'opacity-100 z-10' : 'opacity-0 z-0'
                    }`}
                    autoPlay
                    muted
                    playsInline
                    preload="metadata"
                    onTimeUpdate={() => handleTimeUpdate(1)}
                    onEnded={() => handleEnded(1)}
                    src={videoLinks[index1]}
                />
                
                {/* Fallback overlay color while loading or if fails */}
                <div className="absolute inset-0 bg-black/40 z-20 pointer-events-none" />
                
                {/* Smooth fade to next section */}
                <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#050507] to-transparent z-20 pointer-events-none" />
            </div>

            {/* Overlay Content (Static) */}
            <div className="absolute inset-0 flex flex-col justify-end pb-32 z-30 px-6 md:px-12 lg:px-[7rem] pointer-events-none">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 w-full">
                    <div className="text-left">
                        {/* Badge/Eyebrow */}
                        <FadeIn delay={0.1}>
                            <p className="text-white font-medium text-xs uppercase tracking-widest mb-4">
                                Gestionamos tu proceso migratorio y tus vacaciones soñadas
                            </p>
                        </FadeIn>

                        {/* H1: The Big Promise */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-white text-2xl md:text-4xl lg:text-5xl font-medium font-sans drop-shadow-xl tracking-tighter mb-4 leading-[0.9]"
                        >
                            Explora USA <br />
                            <span className="text-white">con total confianza</span>
                        </motion.h1>

                        {/* H2: The How/Credibility */}
                        <FadeIn delay={0.4}>
                            <p className="text-white text-sm md:text-base max-w-2xl drop-shadow-md leading-relaxed font-medium">
                                Gestionamos tu visa de turista y planificamos tu viaje a Estados Unidos.
                            </p>
                        </FadeIn>
                    </div>

                    <div className="pointer-events-auto shrink-0 mb-2 flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4">
                        <Button
                            className="bg-transparent border border-white/40 hover:bg-gradient-to-r hover:from-[#2d1b4e] hover:to-[#9b4dca] hover:border-[#2d1b4e] hover:[transition-property:transform,box-shadow] text-white text-sm px-6 py-3 h-auto rounded-full transition-all hover:scale-105 font-medium uppercase tracking-tight group backdrop-blur-sm shadow-lg pointer-events-auto"
                            onClick={() => document.getElementById('planes')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            Ver Planes
                            <motion.span
                                animate={{ x: [0, 5, 0] }}
                                transition={{ repeat: Infinity, duration: 1.5 }}
                                className="ml-2"
                            >
                                →
                            </motion.span>
                        </Button>
                        <a
                            href="https://api.whatsapp.com/send/?phone=393342451123&text&type=phone_number&app_absent=0"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => sendMetaEvent('Lead', { source: 'Tourist Hero WhatsApp Button' })}
                            className="group relative inline-flex items-center justify-center px-8 py-3 gap-2 text-sm font-medium uppercase tracking-tight text-white overflow-hidden rounded-full bg-transparent border border-white/40 hover:bg-gradient-to-r hover:from-[#2d1b4e] hover:to-[#9b4dca] hover:text-white hover:border-[#2d1b4e] hover:[transition-property:transform,box-shadow] hover:scale-105 transition-all duration-300 shadow-lg pointer-events-auto"
                        >
                            Tengo preguntas antes de empezar
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>


        </div>
    );
}
