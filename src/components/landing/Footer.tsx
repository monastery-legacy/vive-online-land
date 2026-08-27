"use client";

import Link from 'next/link';
import Image from 'next/image';
import { sendMetaEvent } from "@/lib/meta-events";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-8 font-sans">
      <div className="container mx-auto px-6 max-w-[1500px]">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          
          {/* Left Section - Brand */}
          <div className="md:col-span-1">
            <p className="text-white text-2xl font-medium tracking-tight leading-snug">
              Conectando personas de forma auténtica e honesta
            </p>
            <div className="mt-6">
              <img src="/matchapp-logo-circular.png" alt="Match App Logo" className="w-16 h-16 object-cover rounded-full opacity-90 mb-4" />
              <p className="text-gray-400 text-xs leading-relaxed">
                Match App - La plataforma de citas y emparejamiento basada en honestidad, intereses compartidos e intercambio cultural.
              </p>
            </div>
          </div>

          {/* Column 1: Planes de Citas */}
          <div>
            <h4 className="font-medium mb-4 text-sm text-slate-200 uppercase tracking-wider">Planes de Citas</h4>
            <ul className="text-gray-400 space-y-2.5 text-sm">
              <li>
                <Link href="/#planes" className="hover:text-white transition-colors">Match Dating</Link>
              </li>
              <li>
                <Link href="/#planes" className="hover:text-white transition-colors">Match Dating Pro</Link>
              </li>
              <li>
                <Link href="/#faqs" className="hover:text-white transition-colors">Perfiles Verificados</Link>
              </li>
              <li>
                <Link href="/#faqs" className="hover:text-white transition-colors">Algoritmo de Afinidades</Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Confianza y Legal */}
          <div>
            <h4 className="font-medium mb-4 text-sm text-slate-200 uppercase tracking-wider">Confianza y Legal</h4>
            <ul className="text-gray-400 space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">Sobre Match App</Link>
              </li>
              <li>
                <Link href="/privacidad" className="hover:text-white transition-colors">Política de Privacidad</Link>
              </li>
              <li>
                <Link href="/terminos" className="hover:text-white transition-colors">Términos y Condiciones</Link>
              </li>
              <li>
                <Link href="/#faqs" className="hover:text-white transition-colors">Consejos de Citas Seguras</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Comunidad y Soporte */}
          <div>
            <h4 className="font-medium mb-4 text-sm text-slate-200 uppercase tracking-wider">Comunidad y Soporte</h4>
            <ul className="text-gray-400 space-y-2.5 text-sm">
              <li>
                <Link href="/referrals" className="hover:text-white transition-colors">Programa de Referidos</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">Contacto de Soporte</Link>
              </li>
              <li>
                <Link href="/portal" className="hover:text-white font-medium text-white transition-colors">Portal de Usuario</Link>
              </li>
              <li className="pt-3 flex flex-col gap-1 text-xs">
                <span className="text-gray-400 block">
                  💬 WhatsApp Soporte:{' '}
                  <a href="https://api.whatsapp.com/send/?phone=393342451123&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" onClick={() => sendMetaEvent('Lead', { source: 'Footer WhatsApp' })} className="text-blue-400 hover:underline">
                    +39 334 245 1123
                  </a>
                </span>
                <span className="text-gray-400 block mt-1">
                  ✉️ <a href="https://mail.google.com/mail/?view=cm&fs=1&to=services@udreamms.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">services@udreamms.com</a>
                </span>
                <span className="text-gray-400 block">📍 Salt Lake City, Utah, USA</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Redes Sociales */}
          <div>
            <h4 className="font-medium mb-4 text-sm text-slate-200 uppercase tracking-wider">Síguenos</h4>
            <p className="text-gray-400 text-xs mb-4">
              Únete a nuestras comunidades oficiales en redes sociales.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="https://www.facebook.com/profile.php?id=61593817282601" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity"><Image src="/assets/f.jpg" alt="Facebook" width={32} height={32} style={{ height: 'auto' }} className="rounded-md" /></a>
              <a href="https://www.instagram.com/match_app_/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity"><Image src="/assets/i.jpg" alt="Instagram" width={32} height={32} style={{ height: 'auto' }} className="rounded-md" /></a>
              <a href="https://api.whatsapp.com/send/?phone=393342451123&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" onClick={() => sendMetaEvent('Lead', { source: 'Footer Social Icon' })} className="hover:opacity-80 transition-opacity"><Image src="/assets/w.jpg" alt="Whatsapp" width={32} height={32} style={{ height: 'auto' }} className="rounded-md" /></a>
              <a href="https://api.whatsapp.com/send/?phone=393342451123&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity"><Image src="/assets/x.jpg" alt="X" width={32} height={32} style={{ height: 'auto' }} className="rounded-md" /></a>
              <a href="https://api.whatsapp.com/send/?phone=393342451123&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity"><Image src="/assets/y.jpg" alt="YouTube" width={32} height={32} style={{ height: 'auto' }} className="rounded-md" /></a>
              <a href="https://api.whatsapp.com/send/?phone=393342451123&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity"><Image src="/assets/t.jpg" alt="TikTok" width={32} height={32} style={{ height: 'auto' }} className="rounded-md" /></a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="items-center flex mt-16 pt-8 border-t border-white/10 flex-col md:flex-row gap-4">
          <Link href="/" className="text-white text-lg font-medium hover:text-white transition-colors tracking-tight">Match App</Link>
          <div className="flex justify-center space-x-6 w-full flex-wrap">
            <Link href="/about" className="text-gray-400 hover:text-white transition-colors text-xs">Acerca de Match App</Link>
            <Link href="/#planes" className="text-gray-400 hover:text-white transition-colors text-xs">Planes Match Dating</Link>
            <Link href="/privacidad" className="text-gray-400 hover:text-white transition-colors text-xs">Privacidad</Link>
            <Link href="/terminos" className="text-gray-400 hover:text-white transition-colors text-xs">Términos y Condiciones</Link>
          </div>
          <div className="text-gray-500 text-xs w-full text-center md:text-right">
            © {new Date().getFullYear()} Match App LLC. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;