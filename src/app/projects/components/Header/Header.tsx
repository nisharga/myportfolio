'use client';
import { useWindowWidth } from '@/app/(public)/(home)/hooks';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import { hideNavWhileScrolling } from '@/utlis/navHideWhileScrool';
import { getBreakpointsWidth } from '@/utlis/themeHelper';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/components/animation';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const Header = () => {
    const params = useParams<{
        tag: string;
        item: string;
        slug: any;
        id: any;
    }>();
    const [navbarCollapsed, setNavbarCollapsed] = useState(false);
    const windowWidth = useWindowWidth();
    const md = getBreakpointsWidth('md');
    const ANIMATION_DELAY = windowWidth <= md ? 0 : 0.8;

    useEffect(() => {
        hideNavWhileScrolling({ when: !navbarCollapsed });
    }, [navbarCollapsed]);
    return (
        <header className='fixed inset-x-0 top-0 right-0 z-50 flex items-end justify-between px-8 py-4 duration-500 md:px-6 xl:px-12 backdrop-blur-lg'>
            <div className='flex items-center gap-4 justify-center w-full'>
                <div className=''>
                    <Link
                        href='/'
                        className='w-full flex items-center justify-center px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700'
                    >
                        <svg
                            className='w-5 h-5 rtl:rotate-180'
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth='1.5'
                            stroke='currentColor'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18'
                            />
                        </svg>
                        <span>Back to Home</span>
                    </Link>
                </div>
                {params?.id && (
                    <div className=''>
                        <Link
                            href='/projects'
                            className='w-full flex items-center justify-center px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700'
                        >
                            <svg
                                className='w-5 h-5 rtl:rotate-180'
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                strokeWidth='1.5'
                                stroke='currentColor'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    d='M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18'
                                />
                            </svg>
                            <span>Back to Project Page</span>
                        </Link>
                    </div>
                )}
                <div className=''>
                    <ThemeSwitcher />
                </div>
            </div>
        </header>
    );
};

export default Header;
