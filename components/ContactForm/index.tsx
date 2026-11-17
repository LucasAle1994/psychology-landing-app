'use client';

import { useState, type ChangeEvent, type FormEvent } from 'react';
import {
  generateWhatsAppLink,
  openWhatsApp,
  validateFormData,
} from '@/lib/whatsapp';

interface FormData {
  nombre: string;
  email: string;
  mensaje: string;
}

interface FormErrors {
  name?: string;
  email?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    email: '',
    mensaje: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [formMsg, setFormMsg] = useState('');

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === 'nombre' || name === 'email') {
      const errorKey = name === 'nombre' ? 'name' : 'email';

      setErrors((prev) => ({
        ...prev,
        [errorKey]: undefined,
      }));
    }

    setFormMsg('');
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const nombre = formData.nombre.trim();
    const email = formData.email.trim();
    const mensaje = formData.mensaje.trim();

    const validation = validateFormData({
      name: nombre,
      email,
      message: mensaje,
    });

    if (!validation.isValid) {
      setErrors(validation.errors);
      setFormMsg('Revisá los datos ingresados.');
      return;
    }

    setErrors({});

    const whatsappLink = generateWhatsAppLink({
      name: nombre,
      email,
      message: mensaje,
    });

    openWhatsApp(whatsappLink);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label
          htmlFor="nombre"
          className="mb-2 block text-sm font-semibold text-[#183b2b]"
        >
          Nombre
        </label>

        <input
          id="nombre"
          type="text"
          name="nombre"
          placeholder="¿Cómo te llamás?"
          value={formData.nombre}
          onChange={handleChange}
          autoComplete="name"
          required
          minLength={2}
          className="w-full rounded-xl border border-[#e5d8cd] bg-white px-4 py-3 text-[#183b2b] placeholder:text-gray-400 outline-none transition-colors focus:border-[#829c64]"
        />

        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-semibold text-[#183b2b]"
        >
          Correo electrónico
        </label>

        <input
          id="email"
          type="email"
          name="email"
          placeholder="tunombre@ejemplo.com"
          value={formData.email}
          onChange={handleChange}
          autoComplete="email"
          required
          className="w-full rounded-xl border border-[#e5d8cd] bg-white px-4 py-3 text-[#183b2b] placeholder:text-gray-400 outline-none transition-colors focus:border-[#829c64]"
        />

        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="mensaje"
          className="mb-2 block text-sm font-semibold text-[#183b2b]"
        >
          Mensaje <span className="font-normal text-gray-500">(opcional)</span>
        </label>

        <textarea
          id="mensaje"
          name="mensaje"
          placeholder="Contame brevemente en qué puedo ayudarte..."
          value={formData.mensaje}
          onChange={handleChange}
          rows={4}
          className="w-full resize-none rounded-xl border border-[#e5d8cd] bg-white px-4 py-3 text-[#183b2b] placeholder:text-gray-400 outline-none transition-colors focus:border-[#829c64]"
        />
      </div>

      <p className="text-xs leading-relaxed text-[#6b756c]">
        Este formulario es únicamente para realizar una consulta inicial.
        Evitá incluir información personal o detalles clínicos sensibles.
      </p>

      {formMsg && (
        <p className="text-sm font-medium text-red-600">{formMsg}</p>
      )}

      <button
        type="submit"
        className="flex w-full items-center justify-center gap-3 rounded-full bg-[#af4c0f] px-6 py-4 font-semibold text-white transition-colors hover:bg-[#923f0c]"
      >
        Continuar por WhatsApp

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M7 17 17 7" />
          <path d="M7 7h10v10" />
        </svg>
      </button>

      <p className="text-center text-xs text-[#6b756c]">
        Se abrirá WhatsApp para que puedas revisar y enviar tu mensaje.
      </p>
    </form>
  );
}