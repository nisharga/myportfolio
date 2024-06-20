'use client';
import { NavButtonMobile, NavItem, SiteTitle } from '@/components/headerHelper';
import { useEffect, useState } from 'react';
import { useWindowWidth } from '../(home)/hooks';
import { getBreakpointsWidth } from '@/utlis/themeHelper';
import { HEADER_ITEMS } from '@/static';
import { hideNavWhileScrolling } from '@/utlis/navHideWhileScrool';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import { fadeIn } from '@/components/animation';
import { motion } from 'framer-motion';

const TheHeader = () => {
    const [navbarCollapsed, setNavbarCollapsed] = useState(false);
    const windowWidth = useWindowWidth();
    const md = getBreakpointsWidth('md');
    const ANIMATION_DELAY = windowWidth <= md ? 0 : 0.8;

    useEffect(() => {
        hideNavWhileScrolling({ when: !navbarCollapsed });
    }, [navbarCollapsed]);

    return (
        <motion.header
            variants={fadeIn(0.5)}
            initial='hidden'
            animate='show'
            id='navbar'
            className='fixed inset-x-0 top-0 right-0 z-50 flex items-end justify-between px-8 py-4 duration-500 md:px-6 xl:px-12 backdrop-blur-lg'
        >
            <SiteTitle></SiteTitle>

            <div className='flex items-center gap-4'>
                <div className='md:invisible mt-2'>
                    <ThemeSwitcher />
                </div>
                <NavButtonMobile
                    onClick={() => {
                        setNavbarCollapsed((prev) => !prev);
                    }}
                    navbarCollapsed={navbarCollapsed}
                    className='md:invisible'
                />
            </div>

            {(navbarCollapsed || windowWidth > md) && (
                <nav className='capitalize absolute text-sm duration-200 z-50 w-[90%] left-1/2 -translate-x-1/2 top-full h-max rounded-xl shadow-xl p-6 bg-bg-secondary md:blocks md:static md:w-auto md:left-auto md:transform-none md:top-auto md:rounded-none md:shadow-none md:p-0 md:h-auto bg-gray-900   text-primary-50 md:text-gray-900 dark:text-primary-50 transition-all md:!bg-inherit'>
                    <ul className='flex flex-col items-stretch gap-3 list-style-none lg:gap-5 xl:gap-6 md:flex-row md:items-center'>
                        {HEADER_ITEMS.map(({ name, url }, i) => (
                            <NavItem
                                key={i}
                                href={url}
                                index={i}
                                delay={ANIMATION_DELAY}
                                onClick={() => setNavbarCollapsed(false)}
                            >
                                {name}
                            </NavItem>
                        ))}
                        <div className='hidden md:block mt-2'>
                            <ThemeSwitcher />{' '}
                        </div>
                    </ul>
                </nav>
            )}
        </motion.header>
    );
};

export default TheHeader;
