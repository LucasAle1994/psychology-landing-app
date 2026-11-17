'use client';

import { PSYCHOLOGIST } from '@/lib/constants';

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <section
      id="inicio"
      className="relative z-0 isolate overflow-hidden bg-[#fffdfa] min-h-[680px] sm:min-h-[700px] md:min-h-[650px] xl:min-h-[570px]"
    >
      {/* FONDO VERDE ORIGINAL */}
      <div
        className="absolute top-0 left-0 hidden md:block w-full h-[270px] xl:h-[700px] bg-[#829c64]"
        style={{
          backgroundImage: "url('/assets/ana-ig-2.png')",
          backgroundSize: '100% auto',
          backgroundPosition: 'top center',
          backgroundRepeat: 'repeat-y',
        }}
      />

      {/* FONDO VERDE - MOBILE */}
      <div
        className="absolute top-0 left-0 md:hidden w-full h-[270px] bg-[#829c64]"
        style={{
          backgroundImage: "url('/assets/ana-ig-2.png')",
          backgroundSize: 'auto 100%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      {/* Oscurecimiento */}
      <div className="absolute top-0 left-0 w-full h-[270px] xl:h-[700px] bg-[#183b2b]/35" />

      {/* =====================================
          DESKTOP: 1280px EN ADELANTE
      ===================================== */}

      {/* Onda derecha */}
      <svg
        className="absolute top-0 left-0 hidden xl:block w-full h-[700px] pointer-events-none z-0"
        viewBox="0 0 1440 700"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          transform="translate(0 -30)"
          d="
            M 0,610
            C 75,570 165,535 275,505
            C 385,475 490,450 615,465
            C 680,475 730,490 790,480
            C 850,470 930,420 1030,405
            C 1150,390 1270,400 1440,335
            L 1440,700
            L 0,700
            Z
          "
          fill="#fffdfa"
        />
      </svg>

      {/* Panel crema izquierdo */}
      <svg
        className="absolute top-0 left-0 hidden xl:block w-full h-[700px] pointer-events-none z-10"
        viewBox="0 0 1440 700"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          transform="translate(-40 0) scale(0.88)"
          d="
            M 11,133
            C 108,66 223,25 353,39
            C 468,49 547,102 670,102
            C 792,102 914,133 1001,210
            C 1073,273 1102,340 1091,399
            C 1080,473 1022,529 929,553
            C 828,581 756,553 670,553
            C 569,553 504,599 403,609
            C 252,627 115,630 11,662
            Z
          "
          fill="#f8eee7"
        />
      </svg>

      {/* Decoración botánica del Hero */}
      <svg
        className="absolute left-0 top-[145px] hidden xl:block w-[135px] h-[165px] pointer-events-none z-20"
        viewBox="0 0 135 165"
        fill="none"
        stroke="#829c64"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M -5,158 C 25,120 48,65 105,15" />
        <path d="M 28,112 C 2,95 1,65 8,45 C 30,60 37,85 28,112 Z" />
        <path d="M 45,83 C 30,53 43,28 59,13 C 71,37 65,64 45,83 Z" />
        <path d="M 61,60 C 64,29 91,10 113,8 C 108,34 87,54 61,60 Z" />
        <path d="M 17,130 C 35,105 65,103 83,111 C 64,131 39,139 17,130 Z" />
        <path d="M 38,97 C 57,75 82,73 100,82 C 83,101 59,108 38,97 Z" />
      </svg>

      {/* =====================================
          TABLET / LAPTOP: 768–1279px
      ===================================== */}

      {/* Transición blanca ondulada */}
      <svg
        className="absolute top-0 left-0 hidden md:block xl:hidden w-full h-[300px] pointer-events-none z-10"
        viewBox="0 0 1024 300"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="
            M 0,195
            C 120,155 230,155 355,185
            C 485,215 590,215 705,190
            C 825,165 930,175 1024,140
            L 1024,300
            L 0,300
            Z
          "
          fill="#fffdfa"
        />
      </svg>

      {/* =====================================
          MOBILE: HASTA 767px
      ===================================== */}

      {/* Transición blanca ondulada móvil */}
      <svg
        className="absolute top-0 left-0 w-full h-[700px] md:hidden pointer-events-none z-10"
        viewBox="0 0 390 700"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="
            M 0,158
            C 55,133 105,133 160,148
            C 220,163 270,163 320,143
            C 350,131 375,118 390,108
            L 390,700
            L 0,700
            Z
          "
          fill="#fffdfa"
        />
      </svg>

      {/* =====================================
          CONTENIDO DEL HERO
      ===================================== */}

      <div
        className="
          relative z-30
          flex items-start xl:items-center
          min-h-[680px] sm:min-h-[700px] md:min-h-[650px] xl:min-h-[570px]
        "
      >
        <div
          className="
            w-full max-w-7xl mx-auto
            px-6 sm:px-8 md:px-12 lg:px-14 xl:px-16
            pt-[190px] pb-12
            md:pt-[230px] md:pb-16
            xl:py-16 xl:-translate-y-5
          "
        >
          <div
            className="
              max-w-[700px] mx-auto
              flex flex-col items-center text-center
              xl:mx-0 xl:items-start xl:text-left xl:max-w-[680px]
            "
          >
            <h1
              className="
  font-display font-semibold
  text-[2rem] leading-tight
  sm:text-4xl
  md:text-[2.6rem]
  xl:text-6xl
  text-[#183b2b]
  mb-4 md:mb-5
"
            >
              {PSYCHOLOGIST.name}
            </h1>

            <div className="w-32 h-1.5 bg-[#df7c22]/40 rounded-full mb-5 md:mb-6" />

            <p
              className="
  font-display
  text-lg sm:text-xl
  md:text-lg lg:text-xl
  xl:text-2xl
  text-[#444] mb-6 md:mb-8
"
            >
              {PSYCHOLOGIST.title}
            </p>

            <button
              onClick={scrollToContact}
              className="
                inline-flex items-center justify-center gap-2
                rounded-full bg-[#af4c0f]
                hover:bg-[#923f0c]
                text-white font-semibold
                px-7 py-3.5 md:px-8 md:py-4
                transition-colors
              "
            >
              <svg
                width="20"
                height="20"
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
              Solicitar turno
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
