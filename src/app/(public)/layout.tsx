import { switchThemeDuration } from '@/configs/switch-theme-duration';
import '@/styles/globals.css';
import React from 'react';
import fontVariables, {
    SITE_DESCRIPTION_DEFAULT,
    SITE_TITLE_DEFAULT,
    SITE_TITLE_TEMPLATE_DEFAULT,
    SITE_VERIFICATION_GOOGLE_DEFAULT
} from '@/configs/appConfigs';
import MainLayout from '@/components/MainLayout';
import { Metadata } from 'next';
import { SITE_DOMAIN } from '@/configs/env';

export const metadata: Metadata = {
    metadataBase: new URL(SITE_DOMAIN),
    title: {
        default: SITE_TITLE_DEFAULT,
        template: SITE_TITLE_TEMPLATE_DEFAULT
    },
    description: SITE_DESCRIPTION_DEFAULT,
    verification: {
        google: SITE_VERIFICATION_GOOGLE_DEFAULT
    },
    icons: {
        icon: {
            url: '/favicon.svg',
            type: 'images/svg'
        }
    }
};

export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en' className='scroll-smooth'>
            <body className={`${fontVariables} ${switchThemeDuration}`}>
                <MainLayout>{children}</MainLayout>
            </body>
        </html>
    );
}
