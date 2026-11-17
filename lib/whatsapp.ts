/**
 * Utilidades para integración con WhatsApp
 */

import { PSYCHOLOGIST } from '@/lib/constants';

interface WhatsAppMessageParams {
  name: string;
  email: string;
  message?: string;
}

/**
 * Genera un enlace de WhatsApp con mensaje pre-rellenado.
 */
export const generateWhatsAppLink = (
  params: WhatsAppMessageParams
): string => {
  const { name, email, message } = params;

  const whatsappPhone = PSYCHOLOGIST.phone.replace(/\D/g, '');

  const userMessage = message?.trim()
    ? message.trim()
    : 'Quisiera recibir información sobre las consultas.';

  const fullMessage = `Hola, Ana Luz. Me comunico a través de tu página web.

Nombre: ${name}
Email: ${email}

Mensaje: ${userMessage}

Muchas gracias.`;

  const encodedMessage = encodeURIComponent(fullMessage);

  return `https://wa.me/${whatsappPhone}?text=${encodedMessage}`;
};

/**
 * Abre WhatsApp en una nueva pestaña.
 */
export const openWhatsApp = (url: string): void => {
  if (typeof window !== 'undefined') {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
};

/**
 * Valida los datos del formulario.
 */
export const validateFormData = (
  data: Partial<WhatsAppMessageParams>
): { isValid: boolean; errors: Record<string, string> } => {
  const errors: Record<string, string> = {};

  if (!data.name || data.name.trim().length < 2) {
    errors.name = 'Ingresá tu nombre (al menos 2 caracteres).';
  }

  if (
    !data.email ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())
  ) {
    errors.email = 'Ingresá un correo electrónico válido.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

/**
 * Formatea un número de teléfono.
 */
export const formatPhoneNumber = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, '');

  if (cleaned.length === 10) {
    return `+54 9 ${cleaned.slice(0, 3)} ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
  }

  return phone;
};