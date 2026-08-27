"use client";

import React from "react";
import { sendMetaEvent } from "@/lib/meta-events";

export default function DiscountBanner() {
  const whatsappUrl =
    "https://api.whatsapp.com/send/?phone=393342451123&text=Hola!%20Quiero%20reclamar%20mi%20descuento%20del%2035%25%20con%20el%20c%C3%B3digo%20VIVEONLINE35&type=phone_number&app_absent=0";

  return (
    <section className="py-10 md:py-14 bg-white font-sans overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-[1400px]">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() =>
            sendMetaEvent("Lead", {
              source: "Discount Banner VIVEONLINE35",
            })
          }
          className="group block relative w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
        >
          <img
            src="/assets/banner-35off.png"
            alt="35% OFF - No dejes pasar este descuento VIVEONLINE35"
            className="w-full h-auto object-cover block"
          />

          {/* Interactive Overlay glow on hover */}
          <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-300 pointer-events-none" />
        </a>
      </div>
    </section>
  );
}
