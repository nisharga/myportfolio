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
import { FaReact } from 'react-icons/fa';
import { FaServer } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import { useTheme } from 'next-themes';
import { SchoolIcon, StarIcon, WorkflowIcon } from 'lucide-react';

const Experince = () => {
    const windowWidth = useWindowWidth();
    const md = getBreakpointsWidth('md');
    const DEFAULT_ANIMATION_DELAY = windowWidth <= md ? 0.9 : 1.7;

    const getAnimationDelay = (i: number, increment = 0.15) =>
        DEFAULT_ANIMATION_DELAY + increment * i;

    const experiencesData = [
        {
            title: 'Product Designer',
            location: 'Delhi, India',
            description:
                'Led the product design management for an e-learning Mobile & Web application, overseeing the implementation of various features to enhance user experience.',
            icon: React.createElement(CgWorkAlt),
            date: '2022-2023'
        },
        {
            title: 'Post Graduate in Software Development',
            location: 'Bangalore, India',
            description:
                'I enrolled in software development course with Upgard, also upskilled to the full stack.',
            icon: React.createElement(LuGraduationCap),
            date: '2022 - 2023'
        },
        {
            title: 'Master in Computer Science',
            location: 'London, UK',
            description:
                "I enrolled for master's in Computer Science in Liverpool John Moore's University.",
            icon: React.createElement(LuGraduationCap),
            date: '2023 - 2024'
        },
        {
            title: 'Frontend Developer',
            location: 'Delhi, India',
            description:
                "Developed 10+ Projects in frontend. My stack includes React, Next.js, TypeScript, Tailwind, Sanity and MongoDB. I'm open to full-time opportunities.",
            icon: React.createElement(FaReact),
            date: '2022 - 2024'
        },
        {
            title: 'Full Stack Developer',
            location: 'Delhi, India',
            description:
                "I'm now a up skilling myself to backend developement. Learning MongoDB, MySql and much more in my pipeline.",
            icon: React.createElement(FaServer),
            date: '2024 - present'
        }
    ] as const;

    const { theme } = useTheme();
    console.log('🚀 ~ Experince ~ theme:', theme);

    return (
        <div className='container '>
            <Wrapper
                id='experience'
                className='flex flex-col justify-center h-full min-h-screen gap-6 mt-2 xs:gap-7 xs:mt-0 mx-6 md:mx-8'
            >
                <motion.h2
                    className='text-5xl text-center'
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
                        {experiencesData.map((item, index) => (
                            <React.Fragment key={index}>
                                <VerticalTimelineElement
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
                                    date={item.date}
                                    icon={item.icon}
                                    iconStyle={{
                                        background:
                                            theme === 'light'
                                                ? 'white'
                                                : 'white',
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
                                        {item.title}
                                    </h3>
                                    <p className='font-normal !mt-0  mb-2'>
                                        {item.location}
                                    </p>
                                    <p className='!mt-1 !font-normal text-gray-700  mb-2 dark:text-white/75'>
                                        {item.description}
                                    </p>
                                </VerticalTimelineElement>
                            </React.Fragment>
                        ))}
                    </VerticalTimeline>
                </div>
            </Wrapper>
        </div>
    );
};

export default Experince;
