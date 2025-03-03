'use client';
import { switchThemeDuration } from '@/configs/switch-theme-duration';
import { ThemeProvider } from '@/providers/theme-provider';
import '@/styles/globals.css';
import React from 'react';
import fontVariables from '@/configs/appConfigs';
import MainLayout from '@/components/MainLayout';

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
