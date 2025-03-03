export const API_BASE_URL =
    process.env.NEXT_PUBLIC_API_BASE_URL ||
    'https://portfoio-backend.vercel.app/api/v1';
export const SITE_DOMAIN =
    process.env.NEXT_PUBLIC_SITE_DOMAIN || 'http://localhost:3000/';

export const getBaseUrl = (): string => {
    return process.env.NEXT_PUBLIC_API_BASE_URL || '';
};
