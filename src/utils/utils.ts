import Dompurify from 'dompurify';

export const sanitizeHTML = (html: string) =>
  Dompurify.sanitize(html, { USE_PROFILES: { html: true } });

export const backendHost =
  // 'http://localhost:8888';
  'https://dev-skefschool.netlify.app';
export const backendAuthHost =
  // 'http://localhost:9000';
  'https://auth-skefschool.netlify.app';
