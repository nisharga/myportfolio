'use client';
import { switchThemeDuration } from '@/configs/switch-theme-duration';
import { ThemeProvider } from '@/providers/theme-provider';
import '@/styles/globals.css';
import React from 'react';
import { TheFooter, TheHeader } from './components';
import fontVariables from '@/configs/appConfigs';
import ReduxProviders from '@/providers/reduxProviders';
import PreLoader from '@/preloader/preloader';

export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en' className='scroll-smooth'>
            <body className={`${fontVariables} ${switchThemeDuration}`}>
                <PreLoader />
                <ReduxProviders>
                    <ThemeProvider
                        attribute='class'
                        defaultTheme='system'
                        enableSystem
                    >
                        <TheHeader />
                        <main>{children}</main>
                        <TheFooter />
                    </ThemeProvider>
                </ReduxProviders>
            </body>
        </html>
    );
}
