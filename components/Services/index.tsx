
'use client';

import Image from 'next/image';
import { SERVICES } from '@/lib/constants';

export default function Services() {
  return (
    <section id="servicios" className="pt-6 pb-20 sm:pt-8 sm:pb-24 bg-white">
      <div className="w-11/12 max-w-7xl mx-auto">

        {/* Encabezado */}
        <div className="mb-12 sm:mb-16 flex flex-col items-center text-center">
          <span className="block font-display italic text-base sm:text-lg text-[#829c64] mb-3">
            Acompañamiento profesional
          </span>

          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-[#183b2b] mb-4">
            Servicios
          </h2>

          <div className="w-20 h-1.5 rounded-full bg-[#df7c22]/50 mb-5" />

         
<p className="max-w-2xl text-base sm:text-lg text-[#555] leading-relaxed">
  Cada proceso es diferente. Un espacio de acompañamiento pensado{' '}
  <span className="font-display italic font-bold text-[#183b2b]">
  para cada necesidad.
</span>
</p>

        </div>

        {/* Servicios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0">
          {SERVICES.map((service, index) => (
            <article
              key={service.id}
              className={`
                group flex flex-col
                md:px-7 lg:px-9
                ${index === 0 ? 'md:pl-0' : ''}
                ${index === 2 ? 'md:pr-0' : ''}
                ${index !== 0 ? 'border-t md:border-t-0 md:border-l border-[#e9e5df] pt-9 md:pt-0' : ''}
              `}
            >
              {/* Numeración */}
              <span className="text-sm font-semibold tracking-wider text-[#829c64] mb-3">
                0{index + 1} /
              </span>

              {/* Ilustración */}
              <div className="relative flex items-center justify-center h-[210px] sm:h-[240px] mb-6 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={300}
                  className="
                    w-full h-full
                    object-contain
                    transition-transform duration-500
                    group-hover:scale-[1.04]
                  "
                />
              </div>

              {/* Contenido */}
              <div className="flex flex-col items-start">
                <div className="w-10 h-1 rounded-full bg-[#df7c22] mb-4 transition-all duration-300 group-hover:w-16" />

                <h3 className="font-display text-xl sm:text-2xl font-semibold text-[#183b2b] mb-3">
                  {service.title}
                </h3>

                <p className="text-base sm:text-lg text-[#555] leading-relaxed">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
