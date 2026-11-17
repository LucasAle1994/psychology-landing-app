'use client';

import ContactForm from '@/components/ContactForm';

export default function Contact() {
  return (
    <section id="contacto" className="bg-[#fffdfa] py-20 sm:py-24">
      <div className="mx-auto w-11/12 max-w-6xl">
        {/* Encabezado */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-14">
          <span className="mb-3 block font-display text-base italic text-[#829c64] sm:text-lg">
            Un primer paso puede cambiar mucho
          </span>

          <h2 className="mb-5 font-display text-3xl font-semibold text-[#183b2b] sm:text-4xl xl:text-5xl">
            Hablemos
          </h2>

          <div className="mx-auto mb-5 h-1.5 w-20 rounded-full bg-[#af4c0f]/70" />

          <p className="mx-auto max-w-2xl font-sans text-base leading-relaxed text-[#555] sm:text-lg">
            Si estás pensando en comenzar un proceso terapéutico, estoy acá para escucharte.
          </p>
        </div>

        {/* Formulario */}
        <div className="mx-auto max-w-2xl">
          <div className="rounded-2xl border border-[#eaded3] bg-[#f8eee7] p-6 sm:p-9 lg:p-10">
            <ContactForm />
          </div>
        </div>

        {/* Cierre */}
        <p className="mt-7 text-center font-display text-base italic text-[#829c64] sm:text-lg">
          Cada proceso comienza con un primer paso.
        </p>
      </div>
    </section>
  );
}