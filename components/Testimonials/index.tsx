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
              <span className="text-right block text-lightBlue italic">
                - {testimonial.author}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
