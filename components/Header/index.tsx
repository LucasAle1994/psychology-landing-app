
'use client';

import { useState } from 'react';

const NAV_ITEMS = [
  { label: 'Inicio', id: 'inicio' },
  { label: 'Sobre mí', id: 'sobremi' },
  { label: 'Servicios', id: 'servicios' },
  { label: 'Coberturas', id: 'coberturas' },
  { label: 'Motivos de consulta', id: 'motivos' },
  { label: 'Testimonios', id: 'testimonios' },
];

function CalendarIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M16 3v4M8 3v4M3 11h18" />
      <path d="M8 15h.01M12 15h.01M16 15h.01M8 18h.01M12 18h.01" />
    </svg>
  );
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    if (id === 'inicio') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } else {
      const element = document.getElementById(id);

      if (element) {
        const headerOffset = 90;
        const elementPosition =
          element.getBoundingClientRect().top + window.scrollY;

        window.scrollTo({
          top: elementPosition - headerOffset,
          behavior: 'smooth',
        });
      }
    }

    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#fffdfa]/95 backdrop-blur-sm border-b border-[#eae7df]">
      <nav
        className="max-w-7xl mx-auto px-5 sm:px-8"
        aria-label="Navegación principal"
      >
        {/* Barra principal */}
        <div className="min-h-[76px] flex items-center justify-between gap-4">

          {/* Identidad */}
          <div className="flex flex-col items-center leading-tight shrink-0">
            <span className="font-display font-semibold text-base sm:text-xl text-[#183b2b]">
              Lic. Ana Luz Querencio
            </span>

            <span className="font-sans text-xs sm:text-sm text-[#687b58]">
              Psicóloga Clínica
            </span>
          </div>

          {/* Navegación escritorio */}
          <ul className="hidden xl:flex items-center gap-7 xl:gap-9">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="
                    relative
                    font-sans font-semibold
                    text-[15px] text-[#183b2b]
                    hover:text-[#829c64]
                    transition-colors duration-300
                    whitespace-nowrap
                    after:absolute after:left-0 after:-bottom-1
                    after:h-[2px] after:w-0
                    after:bg-[#829c64]
                    after:transition-all after:duration-300
                    hover:after:w-full
                  "
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Botón escritorio */}
          <button
            onClick={() => scrollToSection('contacto')}
            className="
              hidden xl:inline-flex
              items-center justify-center gap-2
              rounded-full
              bg-[#af4c0f]
              hover:bg-[#923f0c]
              text-white font-semibold
              px-6 py-3
              transition-colors duration-300
              whitespace-nowrap
            "
          >
            <CalendarIcon />
            Solicitar turno
          </button>

          {/* Botón hamburguesa */}
          <button
            type="button"
            className="xl:hidden flex items-center justify-center w-10 h-10 shrink-0"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <span className="relative w-6 h-5 flex flex-col justify-between">
              <span
                className={`block w-6 h-0.5 bg-[#183b2b] transition-all duration-300 ${
                  isMenuOpen ? 'translate-y-[9px] rotate-45' : ''
                }`}
              />

              <span
                className={`block w-6 h-0.5 bg-[#183b2b] transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}
              />

              <span
                className={`block w-6 h-0.5 bg-[#183b2b] transition-all duration-300 ${
                  isMenuOpen ? '-translate-y-[9px] -rotate-45' : ''
                }`}
              />
            </span>
          </button>
        </div>

        {/* Menú móvil */}
        {isMenuOpen && (
          <div
            id="mobile-menu"
            className="xl:hidden border-t border-[#eae7df] py-5"
          >
            <ul className="flex flex-col gap-5">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="
                      w-full text-left
                      font-sans font-semibold
                      text-[16px] text-[#183b2b]
                      hover:text-[#829c64]
                      transition-colors duration-300
                    "
                  >
                    {item.label}
                  </button>
                </li>
              ))}

              <li className="pt-2">
                <button
                  onClick={() => scrollToSection('contacto')}
                  className="
                    w-full inline-flex items-center justify-center gap-2
                    rounded-full
                    bg-[#af4c0f]
                    hover:bg-[#923f0c]
                    text-white font-semibold
                    py-3
                    transition-colors duration-300
                  "
                >
                  <CalendarIcon />
                  Solicitar turno
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
