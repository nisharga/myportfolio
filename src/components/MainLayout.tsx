'use client';
import { TheFooter, TheHeader } from '@/app/(public)/components';
import PreLoader from '@/preloader/preloader';
import ReduxProviders from '@/providers/reduxProviders';
import { ThemeProvider } from '@/providers/theme-provider';
import React from 'react';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <ReduxProviders>
            <PreLoader />
            <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
                <TheHeader />
                <main>{children}</main>
                <TheFooter />
            </ThemeProvider>
        </ReduxProviders>
    );
};

export default MainLayout;
