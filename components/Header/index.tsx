'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 70;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white shadow-soft">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold text-primary hover:text-secondary transition-colors"
          >
            ❤️ Psicología
          </Link>

          {/* Menu Desktop */}
          <ul className="hidden md:flex gap-8 items-center">
            <li>
              <button
                onClick={() => scrollToSection('sobremi')}
                className="text-text hover:text-primary transition-colors font-medium"
              >
                Sobre mí
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('servicios')}
                className="text-text hover:text-primary transition-colors font-medium"
              >
                Servicios
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('motivos')}
                className="text-text hover:text-primary transition-colors font-medium"
              >
                Motivos
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('testimonios')}
                className="text-text hover:text-primary transition-colors font-medium"
              >
                Testimonios
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('contacto')}
                className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-secondary transition-colors font-medium"
              >
                Contacto
              </button>
            </li>
          </ul>

          {/* Hamburger Menu */}
          <button
            className="md:hidden flex flex-col gap-1 cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 bg-text transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
            />
            <span className={`w-6 h-0.5 bg-text transition-all ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span
              className={`w-6 h-0.5 bg-text transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <ul className="flex flex-col gap-4 mt-4">
              <li>
                <button
                  onClick={() => scrollToSection('sobremi')}
                  className="text-text hover:text-primary transition-colors font-medium block w-full text-left"
                >
                  Sobre mí
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('servicios')}
                  className="text-text hover:text-primary transition-colors font-medium block w-full text-left"
                >
                  Servicios
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('motivos')}
                  className="text-text hover:text-primary transition-colors font-medium block w-full text-left"
                >
                  Motivos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('testimonios')}
                  className="text-text hover:text-primary transition-colors font-medium block w-full text-left"
                >
                  Testimonios
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contacto')}
                  className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary transition-colors font-medium w-full"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
