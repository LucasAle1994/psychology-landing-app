
'use client';

import Image from 'next/image';
import { PSYCHOLOGIST } from '@/lib/constants';

function HighlightedText({ text }: { text: string }) {
  const phrases =
    /(Licenciada en Psicología|promover mayor bienestar y equilibrio emocional|sentirte mejor)/gi;

  return (
    <>
      {text.split(phrases).map((part, index) => {
        const normalized = part.toLowerCase();

        if (normalized === 'licenciada en psicología') {
          return (
            <span
              key={index}
              className="font-bold text-[#183b2b]"
            >
              {part}
            </span>
          );
        }

        if (
          normalized === 'promover mayor bienestar y equilibrio emocional' ||
          normalized === 'sentirte mejor'
        ) {
          return (
            <span
              key={index}
              className="font-display italic font-bold text-[#183b2b]"
            >
              {part}
            </span>
          );
        }

        return <span key={index}>{part}</span>;
      })}
    </>
  );
}

export default function About() {
  return (
    <section
  id="sobremi"
  className="relative z-10 -mt-28 bg-transparent pt-0 pb-0"
>
  {/* Fondo blanco: comienza después de la zona de superposición con Hero */}
  <div
    aria-hidden="true"
    className="absolute inset-x-0 top-28 bottom-0 bg-[#fffdfa]"
  />

  <div className="relative z-10 w-11/12 max-w-6xl mx-auto -translate-y-10 pb-0">
        <div
          className="
            grid grid-cols-1
            md:grid-cols-2
            gap-8 sm:gap-10
            lg:gap-14 xl:gap-16
            items-center
          "
        >
          {/* Fotografía */}
          <div className="relative flex justify-center items-end min-h-[300px] sm:min-h-[340px] md:min-h-[360px] lg:min-h-[380px] xl:min-h-[400px] -translate-y-4 md:-translate-y-2 xl:-translate-y-8">
            {/* Forma decorativa */}
            <div
              className="
                absolute
                w-[78%] sm:w-[75%] md:w-[88%] lg:w-[82%]
                h-[72%]
                left-1/2 top-[14%]
                -translate-x-1/2
                rounded-[50%]
                bg-[#f8eee7]
              "
            />

            <Image
              src="/assets/3029e64c-b847-4db6-be1d-dbc3e663bb56.png"
              alt="Lic. Ana Luz Querencio"
              width={460}
              height={600}
              priority
              className="
                relative z-10
                w-full
                max-w-[280px] sm:max-w-[330px]
                md:max-w-[310px] lg:max-w-[350px]
                xl:max-w-[390px]
                h-auto object-contain
              "
              style={{
                maskImage: 'linear-gradient(to bottom, black 72%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 72%, transparent 100%)',
              }}
            />
          </div>

          {/* Presentación */}
          <div
            className="
              relative
              w-full max-w-xl
              mx-auto md:mx-0
              py-4 sm:py-6 xl:py-10
              text-center md:text-left
            "
          >
            <div className="flex items-center justify-center md:justify-start gap-3 sm:gap-4 mb-6 sm:mb-7">
              <span className="w-1.5 h-10 sm:h-12 rounded-full bg-[#df7c22] shrink-0" />

              <h2 className="font-display text-3xl sm:text-4xl xl:text-5xl font-semibold text-[#183b2b] whitespace-nowrap">
                Sobre mí
              </h2>

              <svg
                className="w-[55px] h-[52px] sm:w-[65px] sm:h-[60px] xl:w-[75px] xl:h-[65px] shrink-0"
                viewBox="0 0 105 102"
                fill="none"
                stroke="#829c64"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M 12,88 C 27,65 43,43 55,12" />
                <path d="M 30,58 C 28,34 43,15 55,12 C 55,34 43,51 30,58 Z" />
                <path d="M 30,58 C 48,46 68,38 91,38" />
                <path d="M 48,48 C 61,30 78,28 91,38 C 78,51 61,53 48,48 Z" />
                <path d="M 30,58 C 49,58 69,65 88,77" />
                <path d="M 30,58 C 51,51 75,59 88,77 C 69,88 46,78 30,58 Z" />
              </svg>
            </div>

            {/* Texto de presentación */}
            <div
              className="
                space-y-5 sm:space-y-6
                text-base sm:text-lg xl:text-xl
                text-[#444] leading-relaxed
                whitespace-pre-line
              "
            >
              <HighlightedText text={PSYCHOLOGIST.bio1} />
              <br />
              <br />
              <HighlightedText text={PSYCHOLOGIST.bio2} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
