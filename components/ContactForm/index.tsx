'use client';

import { useState } from 'react';
import { generateWhatsAppLink, openWhatsApp } from '@/lib/whatsapp';

interface FormData {
  nombre: string;
  email: string;
  mensaje: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    email: '',
    mensaje: '',
  });

  const [formMsg, setFormMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const nombre = formData.nombre.trim();
    const email = formData.email.trim();
    const mensaje = formData.mensaje.trim();

    if (nombre && email && mensaje) {
      const whatsappLink = generateWhatsAppLink({
        name: nombre,
        email: email,
        message: mensaje,
      });

      openWhatsApp(whatsappLink);
      setFormMsg('');
      setFormData({ nombre: '', email: '', mensaje: '' });
    } else {
      setFormMsg('Por favor completá todos los campos.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="nombre"
        placeholder="Tu nombre"
        value={formData.nombre}
        onChange={handleChange}
        required
        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-primary"
      />
      <input
        type="email"
        name="email"
        placeholder="Tu email"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-primary"
      />
      <textarea
        name="mensaje"
        placeholder="Tu mensaje"
        value={formData.mensaje}
        onChange={handleChange}
        required
        rows={5}
        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-primary resize-none"
      />
      <button
        type="submit"
        className="w-full bg-primary hover:bg-secondary text-white font-bold py-3 px-6 rounded transition-colors"
      >
        Enviar mensaje
      </button>
      {formMsg && (
        <p className="text-red-600 font-bold text-center">{formMsg}</p>
      )}
    </form>
  );
}
