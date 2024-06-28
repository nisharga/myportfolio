/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Wrapper } from '@/components';
import { useWindowWidth } from '../../hooks';
import { getBreakpointsWidth } from '@/utlis/themeHelper';
import { motion } from 'framer-motion';
import { slideIn, slideUp } from '@/components/animation';
import TestimonialSection from './TestimonialSection';

const Recommendations = () => {
    const windowWidth = useWindowWidth();
    const md = getBreakpointsWidth('md');
    const DEFAULT_ANIMATION_DELAY = windowWidth <= md ? 0.9 : 1.7;

    const getAnimationDelay = (i: number, increment = 0.15) =>
        DEFAULT_ANIMATION_DELAY + increment * i;

    return (
        <div className='container '>
            <Wrapper
                id='recommendations'
                className='flex flex-col justify-center h-full min-h-screen gap-6 mt-2 xs:gap-7 xs:mt-0 mx-0 sm:mx-6 md:mx-8'
            >
                <motion.h2
                    className='text-4xl md:text-5xl text-center -mt-6 mb-4'
                    variants={slideUp({ delay: getAnimationDelay(0) })}
                    initial='hidden'
                    animate='show'
                >
                    Recommendations
                </motion.h2>
                <motion.div
                    className='grid grid-cols-12 '
                    variants={slideIn({ delay: getAnimationDelay(1) })}
                    initial='hidden'
                    animate='show'
                >
                    <div className='col-span-12 '>
                        <TestimonialSection />
                    </div>
                </motion.div>
            </Wrapper>
        </div>
    );
};
export default Recommendations;
