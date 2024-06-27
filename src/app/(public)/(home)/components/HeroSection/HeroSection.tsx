'use client';
import { getBreakpointsWidth } from '@/utlis/themeHelper';
import { useWindowWidth } from '../../hooks';
import { HERO_AREA, TYPE_WRITTER_WORDS } from '@/static/HeroArea';
import { Wrapper } from '@/components';
import { motion } from 'framer-motion';
import { slideIn, slideUp } from '@/components/animation';
import Button from '@/components/core/buttons/Button';
import { Typewriter } from 'react-simple-typewriter';
import Image from 'next/image';

const HeroSection = () => {
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
                id='hero'
                className='flex flex-col justify-center h-full min-h-screen gap-6 mt-12 xs:gap-7 xs:mt-0 mx-6 md:mx-10 '
            >
                <div className='grid grid-cols-12'>
                    <div className='col-span-12 lg:col-span-8 flex flex-col justify-center gap-6 xs:gap-7'>
                        <motion.p
                            variants={slideUp({ delay: getAnimationDelay(0) })}
                            initial='hidden'
                            animate='show'
                            className='font-mono text-sm md:text-base text-accent'
                        >
                            {subtitle}
                        </motion.p>

                        <div className='max-w-5xl text-4xl font-bold tracking-tighter md:text-7xl  '>
                            <motion.h1
                                variants={slideUp({
                                    delay: getAnimationDelay(1)
                                })}
                                initial='hidden'
                                animate='show'
                                className='text-slate-900 dark:text-slate-200 capitalize mb-2 leading-[1.1]'
                            >
                                {title}
                            </motion.h1>
                            <motion.h1
                                variants={slideUp({
                                    delay: getAnimationDelay(2)
                                })}
                                initial='hidden'
                                animate='show'
                                className='leading-[1.2]'
                            >
                                I am a{' '}
                                <Typewriter
                                    words={TYPE_WRITTER_WORDS}
                                    loop={5}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </motion.h1>
                        </div>

                        <motion.p
                            variants={slideUp({ delay: getAnimationDelay(3) })}
                            initial='hidden'
                            animate='show'
                            className='max-w-xl text-base md:text-lg'
                        ></motion.p>

                        <motion.p
                            variants={slideUp({ delay: getAnimationDelay(3) })}
                            initial='hidden'
                            animate='show'
                            className='max-w-xl text-base md:text-lg'
                        >
                            {description}
                        </motion.p>

                        <motion.p
                            variants={slideUp({ delay: getAnimationDelay(4) })}
                            initial='hidden'
                            animate='show'
                            className='font-mono text-xs md:text-sm text-accent'
                        >
                            {specialText}
                        </motion.p>

                        <Button
                            size='lg'
                            type='link'
                            variants={slideUp({ delay: getAnimationDelay(5) })}
                            initial='hidden'
                            animate='show'
                            href={cta?.url ?? '#'}
                            className={`mt-5 xs:mt-8 md:mt-10 ${
                                cta.hideInDesktop ? 'md:hidden' : ''
                            }`}
                        >
                            {cta.title}
                        </Button>
                    </div>
                    <motion.div
                        className='hidden lg:block lg:col-span-4'
                        variants={slideIn({
                            delay: getAnimationDelay(3)
                        })}
                        initial='hidden'
                        animate='show'
                    >
                        <Image
                            alt='profile'
                            width={1000}
                            height={1000}
                            loading={'lazy'}
                            className='w-full object-cover transition-all  '
                            src='/walking-troll.svg'
                        />
                    </motion.div>
                </div>
            </Wrapper>
        </div>
    );
};

export default HeroSection;
