export const BACKEND_URL =
  process.env.ENV === 'PROD'
    ? process.env.NEXT_PUBLIC_BACKEND_URL
    : 'http://localhost:5005/api';
