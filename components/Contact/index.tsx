'use client';

import ContactForm from '@/components/ContactForm';

export default function Contact() {
  return (
    <section id="contacto" className="py-16 bg-white">
      <div className="w-11/12 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-dark">Contacto</h2>
        <div className="max-w-2xl mx-auto">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
