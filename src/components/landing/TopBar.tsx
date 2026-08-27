"use client";

import React from "react";
import { Mail, Phone } from "lucide-react";

export default function TopBar() {
  return (
    <div className="bg-[#ff5722] text-white py-1.5 px-4 md:px-8 lg:px-12 w-full text-xs font-normal border-b border-orange-600/30 shadow-sm relative z-50">
      <div className="w-full flex items-center justify-between gap-3">
        {/* LADO IZQUIERDO: EMAIL + TELEFONO */}
        <div className="flex items-center gap-3 sm:gap-6 flex-wrap sm:flex-nowrap">
          {/* Correo */}
          <a
            href="mailto:ventas@viveonline.travel"
            className="flex items-center gap-2 hover:opacity-90 transition-opacity text-white font-normal tracking-tight group"
          >
            <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
              <Mail className="w-3.5 h-3.5 text-[#ff5722]" strokeWidth={2} />
            </div>
            <span className="text-[11px] sm:text-xs md:text-sm font-normal tracking-wide">
              ventas@viveonline.travel
            </span>
          </a>

          {/* Teléfono */}
          <a
            href="https://wa.me/393342451123"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:opacity-90 transition-opacity text-white font-normal tracking-tight group"
          >
            <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
              <Phone className="w-3.5 h-3.5 text-[#ff5722]" strokeWidth={2} />
            </div>
            <span className="text-[11px] sm:text-xs md:text-sm font-normal tracking-wide">
              +39 334 245 1123
            </span>
          </a>
        </div>

        {/* LADO DERECHO: REDES SOCIALES */}
        <div className="flex items-center gap-2.5 sm:gap-3.5 shrink-0">
          {/* Facebook */}
          <a
            href="https://www.facebook.com/profile.php?id=61593817282601"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-white hover:opacity-80 transition-all hover:scale-110 flex items-center justify-center p-0.5"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/match_app_/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-white hover:opacity-80 transition-all hover:scale-110 flex items-center justify-center p-0.5"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>

          {/* WhatsApp */}
          <a
            href="https://api.whatsapp.com/send/?phone=393342451123&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="text-white hover:opacity-80 transition-all hover:scale-110 flex items-center justify-center p-0.5"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99 0-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l.235.374-.998 3.648 3.741-.982.361.214zm10.825-6.811c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            </svg>
          </a>

          {/* TikTok */}
          <a
            href="https://api.whatsapp.com/send/?phone=393342451123&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="text-white hover:opacity-80 transition-all hover:scale-110 flex items-center justify-center p-0.5"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.82.56-1.31 1.55-1.32 2.55-.02.83.33 1.66.93 2.22.6.57 1.44.86 2.25.79.88-.04 1.71-.48 2.24-1.18.52-.7.75-1.58.74-2.45.02-4.73.01-9.46.01-14.19z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
