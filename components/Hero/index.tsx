'use client';

import { PSYCHOLOGIST } from '@/lib/constants';

export default function Hero() {
  const scrollToContact = () => {
    const contactElement = document.getElementById('contacto');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-gradient-to-r from-accent to-neutral py-20 text-center text-dark">
      <div className="w-11/12 max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold mb-4">{PSYCHOLOGIST.name}</h1>
        <p className="text-xl mb-6">{PSYCHOLOGIST.title}</p>
        <button
          onClick={scrollToContact}
          className="inline-block bg-primary hover:bg-secondary text-white font-bold py-4 px-6 rounded transition-colors"
        >
          Solicitar turno
        </button>
      </div>
    </header>
  );
}
