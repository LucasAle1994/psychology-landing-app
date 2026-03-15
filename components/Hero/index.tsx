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
    <header className="py-20 text-center text-white bg-cover bg-center"
  style={{ backgroundImage: "url('/assets/ana-ig-2.png')" }}>
      <div className="w-11/12 max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">{PSYCHOLOGIST.name}</h1>
        <p className="text-xl mb-6 drop-shadow-lg">{PSYCHOLOGIST.title}</p>
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
