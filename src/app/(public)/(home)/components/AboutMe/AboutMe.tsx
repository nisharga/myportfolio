'use client';
import { HERO_AREA } from '@/static/HeroArea';
import React from 'react';
import { useWindowWidth } from '../../hooks';
import { getBreakpointsWidth } from '@/utlis/themeHelper';
import { Wrapper } from '@/components';
import { motion } from 'framer-motion';
import { slideUp } from '@/components/animation';
import Image from 'next/image';
import Button from '@/components/core/buttons/Button';
import Link from 'next/link';
import { Icons } from '@/components/Icons';

const AboutMe = () => {
    const { cta, subtitle, title, tagline, description, specialText } =
        HERO_AREA;

    const windowWidth = useWindowWidth();
    const md = getBreakpointsWidth('md');
    const DEFAULT_ANIMATION_DELAY = windowWidth <= md ? 0.9 : 1.7;

    const getAnimationDelay = (i: number, increment = 0.15) =>
        DEFAULT_ANIMATION_DELAY + increment * i;
    return (
        <div className='container '>
            <Wrapper
                id='about'
                className='flex flex-col justify-center h-full min-h-screen gap-6 mt-2 xs:gap-7 xs:mt-0 mx-6 md:mx-8'
            >
                <motion.h2
                    className='text-5xl text-center'
                    variants={slideUp({ delay: getAnimationDelay(0) })}
                    initial='hidden'
                    animate='show'
                >
                    About Me
                </motion.h2>
                <div className='w-full lg:w-11/12 2xl:w-4/5 mt-2 lg:mt-12 mx-auto flex flex-col md:gap-4 lg:flex-row justify-between items-center'>
                    <div className='p-3 w-56 self-start md:w-2/5 lg:w-72 bg-white dark:bg-grey-800 flex flex-col gap-2 items-center rounded-2xl mx-auto lg:mx-16 hover:-translate-y-2 transition-transform duration-300 lg:-rotate-3'>
                        <Image
                            alt='profile'
                            width={1000}
                            height={1000}
                            loading={'lazy'}
                            className='w-full h-60 md:h-80 rounded-2xl object-cover grayscale hover:grayscale-0 transition-all bg-violet-100'
                            src='/nisharga.jpg'
                        />
                        <span className='font-medium font-sans'>
                            {'< I Build Stuff 🚀 />'}
                        </span>
                    </div>

                    <div className='flex-1 text-left mx-4 mt-4 md:mt-0 md:mx-0 md:p-6'>
                        <div className='flex flex-col gap-2.5'>
                            <motion.p className='text-3xl font-semibold'>
                                Nisharga Kabir
                            </motion.p>
                            <motion.p
                                variants={slideUp({
                                    delay: getAnimationDelay(3)
                                })}
                                initial='hidden'
                                animate='show'
                                className='text-violet-800 w-fit rounded py-1 px-2 text-sm dark:text-violet-600 bg-violet-50 dark:bg-violet-900/10'
                            >
                                {title}
                            </motion.p>
                            <p className='text-base my-2 text-gray-600 dark:text-gray-300'>
                                Ahoy there! 🎉 I am a seasoned Full-Stack
                                developer based in Pune, India, proudly waving
                                my Information Technology undergrad cape from
                                SPPU! 🎓 I have delved into web development
                                since my freshman days. 💻 My focus lies in
                                crafting websites and applications that
                                seamlessly blend functionality. Oh, and did I
                                mention my love for building full-stack clones
                                and side projects. Its kind of my thing! 🚀
                            </p>
                            <motion.div
                                variants={slideUp({
                                    delay: getAnimationDelay(4)
                                })}
                                initial='hidden'
                                animate='show'
                                className='flex items-center gap-4 md:mt-4'
                            >
                                <Link
                                    href={'https://topmate.io/nisharga_kabir'}
                                    target='_blank'
                                    className='text-violet-600 flex items-center gap-1 hover:bg-violet-50 hover:dark:bg-violet-900/10 py-2 px-4 transition-colors rounded-md'
                                >
                                    Book a 1:1 call
                                    <Icons.Headset className='ml-1' />
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </div>
    );
};

export default AboutMe;
