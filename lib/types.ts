/**
 * Tipos comunes para la aplicación
 */

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Testimonial {
  id: number;
  author: string;
  text: string;
  rating: number;
  service: string;
}

export interface Psychologist {
  name: string;
  title: string;
  specialties: string[];
  bio: string;
  location: string;
  phone: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ValidationErrors {
  [key: string]: string;
}

export interface WhatsAppLinkParams {
  name: string;
  email: string;
  message: string;
  phone: string;
}
