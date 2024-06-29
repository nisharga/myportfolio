/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Wrapper } from '@/components';
import { useWindowWidth } from '../../hooks';
import { getBreakpointsWidth } from '@/utlis/themeHelper';
import { motion } from 'framer-motion';
import { slideUp } from '@/components/animation';

const ContactForm = () => {
    const [state, handleSubmit] = useForm('mpwaaerp');

    const windowWidth = useWindowWidth();
    const md = getBreakpointsWidth('md');
    const DEFAULT_ANIMATION_DELAY = windowWidth <= md ? 0.9 : 1.7;

    const getAnimationDelay = (i: number, increment = 0.15) =>
        DEFAULT_ANIMATION_DELAY + increment * i;

    return (
        <div className='container '>
            <Wrapper
                id='contact'
                className='flex flex-col justify-center h-full min-h-screen gap-6 mt-2 xs:gap-7 xs:mt-0 mx-6 md:mx-8'
            >
                <motion.h2
                    className='text-4xl md:text-5xl text-center -mt-4'
                    variants={slideUp({ delay: getAnimationDelay(0) })}
                    initial='hidden'
                    animate='show'
                >
                    Contact With Me
                </motion.h2>
                <motion.p
                    className='mt-4 text-center'
                    variants={slideUp({ delay: getAnimationDelay(1) })}
                    initial='hidden'
                    animate='show'
                >
                    Please contact me directly at
                    <code className='mx-2'>kabirnisharga@gmail.com</code> or
                    through this form.
                </motion.p>
                <form onSubmit={handleSubmit} className='sm:mx-0 md:mx-48'>
                    {state.succeeded ? (
                        <h2 className='relative text-3xl capitalize font-signature text-accent group top-1 text-center animate-bounce'>
                            Congress!! Message Send Successfully
                        </h2>
                    ) : (
                        <motion.div
                            className='grid grid-cols-12 '
                            variants={slideUp({ delay: getAnimationDelay(2) })}
                            initial='hidden'
                            animate='show'
                        >
                            <div className='col-span-12 mb-4'>
                                <input
                                    id='email'
                                    type='email'
                                    name='email'
                                    placeholder='Write your email for reply (or write N/A for anonymous message send)'
                                    className='py-2 md:py-3 rounded-md w-full pl-3'
                                />
                            </div>
                            <div className='col-span-12'>
                                <ValidationError
                                    prefix='Email'
                                    field='email'
                                    errors={state.errors}
                                />
                                <textarea
                                    id='message'
                                    name='message'
                                    placeholder='Write your Message'
                                    className='py-2 md:py-3 rounded-md w-full pl-3 min-h-[200px]'
                                />
                                <ValidationError
                                    prefix='Message'
                                    field='message'
                                    errors={state.errors}
                                />
                            </div>
                            <div className='col-span-12'>
                                <button
                                    type='submit'
                                    disabled={state.submitting}
                                    className='py-2 md:py-3 rounded-md w-full mt-4 bg-slate-300 dark:bg-gray-800 dark:text-white scale-100 hover:scale-125 delay-75 transition-all font-semibold'
                                >
                                    Submit
                                </button>
                            </div>
                        </motion.div>
                    )}
                </form>
            </Wrapper>
        </div>
    );
};
export default ContactForm;
