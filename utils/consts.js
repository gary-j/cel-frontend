export const BACKEND_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5005/api';

export const IMAGEKIT_URL_ENDPOINT =
  process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT ||
  'https://ik.imagekit.io/devderev/cel/';

export const IMAGEKIT_PUBLIC_KEY =
  process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY ||
  'public_gP+EV0f27L4KxadJE2kJoWaZgZI=';

export const IMAGEKIT_AUTH_ENDPOINT =
  process.env.NEXT_PUBLIC_IMAGEKIT_AUTH_ENDPOINT ||
  'http://localhost:5005/api/auth/imagekit';

export const MONGODB_URI_DEV = process.env.MONGODB_URI_DEV;
export const MONGODB_URI = process.env.MONGODB_URI;
