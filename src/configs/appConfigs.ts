import { Inter, Roboto_Mono } from 'next/font/google';

export const SITE_TITLE_DEFAULT = 'Nisharga Kabir | A Full Stack Developer.';
export const SITE_TITLE_TEMPLATE_DEFAULT = `%s - NISHARGA`;
export const SITE_DESCRIPTION_DEFAULT = 'Nisharga Description';
export const SITE_VERIFICATION_GOOGLE_DEFAULT =
    'google-site-verification=adwdawdaw';

const inter = Inter({
    variable: '--font-inter',
    subsets: ['latin'],
    weight: [
        '400', // Regular
        '500', // Medium
        '700' // Bold
    ]
});

const robotoMono = Roboto_Mono({
    variable: '--font-roboto-mono',
    subsets: ['latin'],
    display: 'swap',
    weight: [
        '400', // Regular
        '500', // Medium
        '600', // Semibold
        '700' // Bold
    ]
});

const fontVariables = `${inter.variable} ${robotoMono.variable}`;

export default fontVariables;
