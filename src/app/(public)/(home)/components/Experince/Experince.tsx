'use client';
import { Wrapper } from '@/components';
import { slideUp } from '@/components/animation';
import React from 'react';
import { useWindowWidth } from '../../hooks';
import { getBreakpointsWidth } from '@/utlis/themeHelper';
import { motion } from 'framer-motion';
import {
    VerticalTimeline,
    VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { CgWorkAlt } from 'react-icons/cg';
import { useTheme } from 'next-themes';
import { useGetExperinceDataQuery } from '@/redux/api/experinceApi';
import Link from 'next/link';

const Experince = () => {
    const windowWidth = useWindowWidth();
    const md = getBreakpointsWidth('md');
    const DEFAULT_ANIMATION_DELAY = windowWidth <= md ? 0.9 : 1.7;

    const getAnimationDelay = (i: number, increment = 0.15) =>
        DEFAULT_ANIMATION_DELAY + increment * i;

    const { theme } = useTheme();

    const { data } = useGetExperinceDataQuery('');

    return (
        <div className='container '>
            <Wrapper
                id='experience'
                className='flex flex-col justify-center h-full min-h-screen gap-6 mt-2 xs:gap-7 xs:mt-0 mx-0 sm:mx-6 md:mx-8'
            >
                <motion.h2
                    className='text-4xl md:text-5xl text-center'
                    variants={slideUp({ delay: getAnimationDelay(1) })}
                    initial='hidden'
                    animate='show'
                >
                    Experince
                </motion.h2>
                <div className='w-full mt-2 lg:mt-8 mx-auto flex flex-col md:gap-4 lg:flex-row justify-between items-center'>
                    <VerticalTimeline
                        className='my-custom-class line-class'
                        lineColor=''
                    >
                        {data?.data?.map((item: any, index: any) => (
                            // <React.Fragment key={index}>
                            <VerticalTimelineElement
                                key={index}
                                visible={true}
                                contentStyle={{
                                    background:
                                        theme === 'light'
                                            ? '#f3f4f6'
                                            : 'rgba(255, 255, 255, 0.05)',
                                    boxShadow:
                                        '0px 12px 16px -4px rgba(16, 24, 40, 0.08) , 0px 4px 6px -2px rgba(16, 24, 40, 0.03) ',
                                    border:
                                        theme === 'light'
                                            ? '1px solid #e4e4e7'
                                            : 'none',
                                    textAlign: 'left',
                                    borderRadius: '16px',
                                    padding: '1.3rem 2rem'
                                }}
                                contentArrowStyle={{
                                    borderRight:
                                        theme === 'light'
                                            ? '0.4rem solid #9ca3af'
                                            : '0.4rem solid rgba(255, 255, 255, 0.5)'
                                }}
                                date={item?.monthFromTo}
                                icon={<CgWorkAlt />}
                                iconStyle={{
                                    background:
                                        theme === 'light' ? 'white' : 'white',
                                    fontSize: '1.5rem',
                                    color: '#1f2937',
                                    border:
                                        theme === 'light'
                                            ? '1px solid #e4e4e7'
                                            : 'none',
                                    zIndex: theme === 'light' ? '999' : '-1'
                                }}
                            >
                                <h3 className='font-semibold capitalize mb-2'>
                                    {item?.position}
                                </h3>
                                <p className='font-normal !mt-0  mb-2'>
                                    at{' '}
                                    <Link
                                        href={item?.companyLinkedin}
                                        className='font-semibold underline'
                                        target='_blank'
                                    >
                                        {item?.companyName}
                                    </Link>
                                    {', '} {item?.companyLocation}
                                </p>
                                <p className='!mt-1 !font-normal text-gray-700  mb-2 dark:text-white/75'>
                                    {item?.jobResponsibility}
                                </p>
                            </VerticalTimelineElement>
                            // </React.Fragment>
                        ))}
                    </VerticalTimeline>
                </div>
            </Wrapper>
        </div>
    );
};

export default Experince;
