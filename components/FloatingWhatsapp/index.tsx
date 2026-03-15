'use client';

import { useState, useEffect } from 'react';
import { PSYCHOLOGIST } from '@/lib/constants';

export default function FloatingWhatsapp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <a
      href={`https://wa.me/${PSYCHOLOGIST.phone}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 animate-bounce hover:scale-110 transition-transform"
      aria-label="Contactar por WhatsApp"
    >
      <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg overflow-hidden">
        <img
          src="/assets/whatsapp.png"
          alt="WhatsApp"
          className="w-10 h-10 object-contain"
        />
      </div>
    </a>
  );
}
