'use client';

import { PSYCHOLOGIST, SOCIAL_MEDIA } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-accent text-white">
      <div className="w-11/12 max-w-7xl mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Información */}
          <div>
            <h3 className="text-lg font-bold mb-4">{PSYCHOLOGIST.name}</h3>
            <p className="text-sm text-white/80">{PSYCHOLOGIST.title}</p>
            <p className="text-sm text-white/80">{PSYCHOLOGIST.location}</p>
          </div>

          {/* Contacto y Redes Sociales */}
          <div className="flex flex-col md:flex-row gap-12">
            <div className="flex-1">
              <h4 className="text-lg font-bold mb-4">Contacto</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href={`tel:${PSYCHOLOGIST.phone}`}
                    className="text-white/80 hover:text-white transition-colors flex items-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/assets/phone.png"
                      alt="Teléfono"
                      className="w-4 h-4 object-contain"
                    />
                    Teléfono: +{PSYCHOLOGIST.phone}
                  </a>
                </li>{' '}
                <li>
                  <a
                    href={`mailto:${PSYCHOLOGIST.email}`}
                    className="text-white/80 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <img src="/assets/sobre.png" alt="Email" className="w-4 h-4 object-contain" />
                    Email: {PSYCHOLOGIST.email}
                  </a>
                </li>{' '}
                <li className="text-white/80 flex items-center gap-2">
                  <img src="/assets/pin.png" alt="Ubicación" className="w-4 h-4 object-contain" />
                  {PSYCHOLOGIST.location}
                </li>
              </ul>
            </div>

            {/* Redes Sociales */}
            <div className="flex-1">
              <h4 className="text-lg font-bold mb-4">Síguenos</h4>
              <div className="flex gap-6">
                <a
                  href={SOCIAL_MEDIA.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform"
                  aria-label="Instagram"
                  title="Instagram"
                >
                  <img
                    src="/assets/instagram.png"
                    alt="Instagram"
                    className="w-8 h-8 object-contain"
                  />
                </a>
                <a
                  href={SOCIAL_MEDIA.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform"
                  aria-label="TikTok"
                  title="TikTok"
                >
                  <img src="/assets/tiktok.png" alt="TikTok" className="w-8 h-8 object-contain" />
                </a>
                <a
                  href={SOCIAL_MEDIA.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform"
                  aria-label="Facebook"
                  title="Facebook"
                >
                  <img
                    src="/assets/facebook.png"
                    alt="Facebook"
                    className="w-8 h-8 object-contain"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex justify-center items-center">
            <p className="text-sm text-white/80 text-center">
              © {new Date().getFullYear()} {PSYCHOLOGIST.name}. Todos los derechos reservados.
            </p>
            {/* <div className="flex gap-6 text-sm">
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                Privacidad
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                Términos
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
