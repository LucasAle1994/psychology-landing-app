'use client';

import { TESTIMONIALS } from '@/lib/constants';

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-16 bg-background">
      <div className="w-11/12 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-dark">Testimonios</h2>
        <div className="space-y-6">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white border-l-4 border-secondary p-6 rounded"
            >
              <p className="text-gray-700 mb-3">&quot;{testimonial.text}&quot;</p>
              <div className="flex items-center justify-between">
                <span className="text-lightBlue italic">- {testimonial.author}</span>
                <div className="flex items-center gap-1 text-sm text-gray-600">
                  <img src="/assets/pin.png" alt="Ubicación" className="w-4 h-4" />
                  {testimonial.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
