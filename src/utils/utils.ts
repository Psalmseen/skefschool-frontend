import Dompurify from 'dompurify';

export const sanitizeHTML = (html: string) =>
  Dompurify.sanitize(html, { USE_PROFILES: { html: true } });

export const backendHost = 'http://localhost:5000';
export const backendAuthHost = 'http://localhost:5050';
