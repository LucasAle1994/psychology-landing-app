'use client';

import { FREQUENT_REASONS } from '@/lib/constants';

export default function FrequentReasons() {
  return (
    <section id="motivos" className="py-16 bg-white">
      <div className="w-11/12 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-dark">Motivos más frecuentes de consulta</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Si te sentís identificado con alguna de estas características agenda tu entrevista
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FREQUENT_REASONS.map((reason, index) => (
            <article
              key={reason.id}
              className={`group rounded-xl p-6 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer h-full flex flex-col justify-between ${
                index % 2 === 0
                  ? 'bg-background text-dark border border-background/50'
                  : 'bg-accent text-white border border-primary/50'
              }`}
              role="article"
              aria-labelledby={`reason-title-${reason.id}`}
            >
              <div>
                <h3
                  id={`reason-title-${reason.id}`}
                  className="text-xl font-bold mb-3 text-center border-b-2 pb-2 border-current"
                >
                  {reason.title}
                </h3>
                <p className="text-base leading-relaxed">{reason.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
