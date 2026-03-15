'use client';

import Image from 'next/image';
import { PSYCHOLOGIST } from '@/lib/constants';

export default function About() {
  return (
    <section id="sobremi" className="py-16 bg-white">
      <div className="w-11/12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center md:justify-start">
          <div className="flex justify-center md:w-auto">
            <Image
              src="/assets/3029e64c-b847-4db6-be1d-dbc3e663bb56.png"
              alt="Ana Querencio"
              width={400}
              height={500}
              className="max-w-xs md:max-w-sm rounded-lg"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-4xl font-bold mb-4 text-dark">Sobre mí</h2>
            <p className="text-xl text-gray-700 leading-relaxed whitespace-pre-line">
              {PSYCHOLOGIST.bio}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
