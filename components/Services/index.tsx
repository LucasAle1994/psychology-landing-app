'use client';

import Image from 'next/image';
import { SERVICES } from '@/lib/constants';

export default function Services() {
  return (
    <section id="servicios" className="py-16 bg-white">
      <div className="w-11/12 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-dark">Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div key={service.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
              <Image
                src={service.image}
                alt={service.title}
                width={400}
                height={300}
                className="w-full h-56 object-contain bg-white-100"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-secondary mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
