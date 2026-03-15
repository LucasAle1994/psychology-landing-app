/**
 * Utilidades para integración con WhatsApp
 */

interface WhatsAppMessageParams {
  name: string;
  email: string;
  message: string;
}

/**
 * Genera un enlace de WhatsApp con mensaje pre-rellenado
 * @param params Parámetros del mensaje
 * @returns URL de WhatsApp
 */
export const generateWhatsAppLink = (params: WhatsAppMessageParams): string => {
  const { name, email, message } = params;

  const whatsappPhone = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || '5493426000000';

  // Formato del mensaje
  const fullMessage = `Hola, soy ${name}.
Email: ${email}

Me gustaría solicitar información sobre terapia.

Mensaje: ${message}`;

  // Codificar el mensaje para URL
  const encodedMessage = encodeURIComponent(fullMessage);

  // Generar URL de WhatsApp
  const whatsappUrl = `https://wa.me/${whatsappPhone}?text=${encodedMessage}`;

  return whatsappUrl;
};

/**
 * Abre WhatsApp en nueva ventana/tab
 * @param url URL generada por generateWhatsAppLink
 */
export const openWhatsApp = (url: string): void => {
  if (typeof window !== 'undefined') {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
};

/**
 * Valida los datos del formulario
 * @param data Datos del formulario
 * @returns { isValid: boolean, errors: Record<string, string> }
 */
export const validateFormData = (
  data: Partial<WhatsAppMessageParams>
): { isValid: boolean; errors: Record<string, string> } => {
  const errors: Record<string, string> = {};

  if (!data.name || data.name.trim().length < 2) {
    errors.name = 'El nombre debe tener al menos 2 caracteres';
  }

  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Por favor ingresa un email válido';
  }

  if (!data.message || data.message.trim().length < 10) {
    errors.message = 'El mensaje debe tener al menos 10 caracteres';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

/**
 * Formatea un número de teléfono
 * @param phone Número de teléfono sin formato
 * @returns Teléfono formateado
 */
export const formatPhoneNumber = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.length === 10) {
    return `+54 9 ${cleaned.slice(0, 3)} ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
  }
  return phone;
};
