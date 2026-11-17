
'use client';

import { useState } from 'react';
import { FREQUENT_REASONS } from '@/lib/constants';

export default function FrequentReasons() {
  const [activeReason, setActiveReason] = useState<number | null>(null);

  return (
    <section
      id="motivos"
      className="relative overflow-hidden bg-[#fffdfa] py-20 sm:py-24"
    >
      <div className="relative z-10 mx-auto w-11/12 max-w-6xl">

        {/* Encabezado */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <span className="mb-3 block font-display text-base italic text-[#829c64] sm:text-lg">
            Cada proceso comienza de una manera diferente
          </span>

          <h2 className="mb-5 font-display text-3xl font-semibold text-[#183b2b] sm:text-4xl xl:text-5xl">
            ¿Qué te gustaría trabajar?
          </h2>

          <div className="mx-auto mb-5 h-1.5 w-20 rounded-full bg-[#af4c0f]/70" />

          <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#555] sm:text-lg">
            Si te identificás con alguno de estos motivos, podemos trabajarlo
            en un espacio de{' '}
            <span className="font-display font-semibold italic text-[#183b2b]">
              escucha y acompañamiento.
            </span>
          </p>
        </div>

        {/* Motivos */}
        <div className="grid grid-cols-1 gap-x-12 md:grid-cols-2 lg:gap-x-20">
          {FREQUENT_REASONS.map((reason, index) => {
            const isActive = activeReason === reason.id;
            const isOrange = index % 4 === 1 || index % 4 === 3;

            return (
              <article
                key={reason.id}
                className={`border-b border-[#e9e5df] ${
                  index % 2 === 0 ? 'md:pr-5' : 'md:pl-5'
                }`}
              >
                <button
                  type="button"
                  onClick={() =>
                    setActiveReason(isActive ? null : reason.id)
                  }
                  aria-expanded={isActive}
                  aria-controls={`reason-description-${reason.id}`}
                  className="group flex w-full items-center justify-between gap-4 py-6 text-left sm:py-7"
                >
                  <span className="flex items-center gap-4 sm:gap-5">
                    <span
                      className={`h-2 w-2 shrink-0 rounded-full transition-all duration-300 ${
                        isOrange ? 'bg-[#af4c0f]' : 'bg-[#829c64]'
                      } ${isActive ? 'scale-150' : ''}`}
                    />

                    <span
                      className={`font-display text-xl font-semibold transition-colors duration-300 sm:text-2xl ${
                        isOrange
                          ? 'text-[#af4c0f] group-hover:text-[#923f0c]'
                          : 'text-[#183b2b] group-hover:text-[#829c64]'
                      }`}
                    >
                      {reason.title}
                    </span>
                  </span>

                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isActive
                        ? 'rotate-180 bg-[#183b2b] text-white'
                        : 'bg-[#f8eee7] text-[#183b2b] group-hover:bg-[#829c64] group-hover:text-white'
                    }`}
                  >
                    {isActive ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 5v14" />
                        <path d="M5 12h14" />
                      </svg>
                    )}
                  </span>
                </button>

                <div
                  id={`reason-description-${reason.id}`}
                  hidden={!isActive}
                  className="pb-6 pl-6 sm:pl-7"
                >
                  <div
                    className={`border-l-2 pl-4 ${
                      isOrange
                        ? 'border-[#af4c0f]'
                        : 'border-[#829c64]'
                    }`}
                  >
                    <p className="font-sans text-base leading-relaxed text-[#555] sm:text-lg">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Cierre */}
        <div className="mt-12 text-center sm:mt-16">
          <p className="font-display text-lg italic text-[#183b2b] sm:text-xl">
            Dar el primer paso también es una forma de cuidarte.
          </p>
        </div>

      </div>
    </section>
  );
}
