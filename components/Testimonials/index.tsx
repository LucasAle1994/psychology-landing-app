
'use client';

import { useEffect, useRef, useState } from 'react';
import { TESTIMONIALS } from '@/lib/constants';

export default function Testimonials() {
  const featuredTestimonial = TESTIMONIALS[0];
  const secondaryTestimonials = TESTIMONIALS.slice(1);

  const [featuredExpanded, setFeaturedExpanded] = useState(false);
  const [featuredNeedsExpand, setFeaturedNeedsExpand] = useState(false);

  const [expandedTestimonials, setExpandedTestimonials] = useState<number[]>([]);
  const [secondaryNeedsExpand, setSecondaryNeedsExpand] = useState<number[]>([]);

  const featuredTextRef = useRef<HTMLParagraphElement>(null);

  const toggleSecondary = (id: number) => {
    setExpandedTestimonials((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  };

  useEffect(() => {
    const element = featuredTextRef.current;
    if (!element) return;

    const checkHeight = () => {
      setFeaturedNeedsExpand(
        element.scrollHeight > element.clientHeight + 1
      );
    };

    checkHeight();

    const observer = new ResizeObserver(checkHeight);
    observer.observe(element);

    return () => observer.disconnect();
  }, [featuredTestimonial?.text, featuredExpanded]);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(
      '[data-testimonial-text]'
    );

    const checkHeights = () => {
      const overflowingIds: number[] = [];

      elements.forEach((element) => {
        const id = Number(element.dataset.testimonialText);

        if (element.scrollHeight > element.clientHeight + 1) {
          overflowingIds.push(id);
        }
      });

      setSecondaryNeedsExpand(overflowingIds);
    };

    checkHeights();

    const observer = new ResizeObserver(checkHeights);

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [secondaryTestimonials.length, expandedTestimonials]);

  if (!TESTIMONIALS.length) return null;

  return (
    <section
      id="testimonios"
      className="bg-[#f8eee7] py-20 sm:py-24"
    >
      <div className="mx-auto w-11/12 max-w-6xl">

        {/* Encabezado */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-14">
          <span className="mb-3 block font-display text-base italic text-[#829c64] sm:text-lg">
            Voces de quienes confiaron
          </span>

          <h2 className="mb-5 font-display text-3xl font-semibold text-[#183b2b] sm:text-4xl xl:text-5xl">
            Un camino que no se recorre en soledad
          </h2>

          <div className="mx-auto h-1.5 w-20 rounded-full bg-[#af4c0f]/70" />
        </div>

        {/* Testimonio protagonista */}
        {featuredTestimonial && (
          <article className="relative mx-auto mb-12 max-w-5xl overflow-hidden rounded-2xl bg-[#829c64] p-6 sm:p-8 lg:p-10">
            <span
              aria-hidden="true"
              className="absolute -right-2 -top-10 font-display text-[150px] leading-none text-white/10 sm:text-[180px]"
            >
              “
            </span>

            <div className="relative z-10">
              <span
                aria-hidden="true"
                className="mb-2 block font-display text-5xl leading-none text-[#f8eee7] sm:text-6xl"
              >
                “
              </span>

              <p
                ref={featuredTextRef}
                className={`max-w-4xl font-display text-lg font-medium leading-relaxed text-[#fffdfa] sm:text-xl lg:text-2xl ${
                  featuredExpanded ? '' : 'line-clamp-4'
                }`}
              >
                {featuredTestimonial.text}
              </p>

              {featuredNeedsExpand && (
                <button
                  type="button"
                  onClick={() => setFeaturedExpanded(!featuredExpanded)}
                  aria-expanded={featuredExpanded}
                  className="mt-4 inline-flex items-center gap-2 font-sans text-sm font-bold text-white underline decoration-white/60 underline-offset-4 transition-colors hover:text-[#f8eee7]"
                >
                  {featuredExpanded
                    ? 'Leer menos'
                    : 'Leer testimonio completo'}

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-4 w-4 transition-transform duration-300 ${
                      featuredExpanded ? 'rotate-180' : ''
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
              )}

              <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-white/30 pt-4">
                <span className="font-sans text-sm font-bold text-white">
                  — {featuredTestimonial.author}
                </span>

                <span className="font-sans text-sm text-[#f8eee7]">
                  {featuredTestimonial.location}
                </span>
              </div>
            </div>
          </article>
        )}

        {/* Testimonios secundarios */}
        {secondaryTestimonials.length > 0 && (
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2 lg:gap-x-20">
            {secondaryTestimonials.map((testimonial, index) => {
              const isOrange = index % 2 === 1;
              const isExpanded = expandedTestimonials.includes(testimonial.id);
              const needsExpand = secondaryNeedsExpand.includes(testimonial.id);

              return (
                <article
                  key={testimonial.id}
                  className="border-t border-[#d9d0c5] pt-6"
                >
                  <span
                    aria-hidden="true"
                    className={`mb-2 block font-display text-5xl leading-none ${
                      isOrange ? 'text-[#af4c0f]' : 'text-[#829c64]'
                    }`}
                  >
                    “
                  </span>

                  <p
                    data-testimonial-text={testimonial.id}
                    className={`font-display text-lg font-medium leading-relaxed text-[#183b2b] sm:text-xl ${
                      isExpanded ? '' : 'line-clamp-4'
                    }`}
                  >
                    {testimonial.text}
                  </p>

                  {needsExpand && (
                    <button
                      type="button"
                      onClick={() => toggleSecondary(testimonial.id)}
                      aria-expanded={isExpanded}
                      className="mt-3 font-sans text-sm font-bold text-[#af4c0f] underline decoration-[#af4c0f]/50 underline-offset-4 transition-colors hover:text-[#923f0c]"
                    >
                      {isExpanded ? 'Leer menos' : 'Leer más'}
                    </button>
                  )}

                  <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                    <span className="font-sans text-sm font-bold text-[#183b2b]">
                      — {testimonial.author}
                    </span>

                    <span className="font-sans text-sm text-[#829c64]">
                      {testimonial.location}
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {/* Cierre */}
        <div className="mt-14 text-center sm:mt-16">
          <p className="font-display text-lg italic text-[#183b2b] sm:text-xl">
            Cada historia merece ser escuchada.
          </p>
        </div>

      </div>
    </section>
  );
}
