'use client';
import React from 'react';
import { Wrapper } from '@/components';
import { motion } from 'framer-motion';
import { slideUp } from '@/components/animation';
import { useWindowWidth } from '../../hooks';
import { getBreakpointsWidth } from '@/utlis/themeHelper';
import Languages from './SkillList';
import SkillList from './SkillList';

const Skills = () => {
    const windowWidth = useWindowWidth();
    const md = getBreakpointsWidth('md');
    const DEFAULT_ANIMATION_DELAY = windowWidth <= md ? 0.9 : 1.7;

    const getAnimationDelay = (i: number, increment = 0.15) =>
        DEFAULT_ANIMATION_DELAY + increment * i;

    const languageData = [
        'HTML',
        'CSS',
        'JavaScript',
        'TypeScript',
        'React'
    ] as const;

    const freamworkData = [
        'React Native',
        'Nextjs',
        'Nodejs',
        'Git',
        'TailwindCSS',
        'Sanity',
        'MongoDB'
    ] as const;

    const toolsAndTechnologyData = [
        'React Native',
        'Nextjs',
        'Nodejs',
        'Git',
        'TailwindCSS',
        'Sanity',
        'MongoDB',
        'MySql',
        'Redux',
        'Framer Motion',
        'GSAP',
        'LocomotiveScroll',
        'Java',
        'p5',
        'matter.js',
        'Three js',
        'Prismic',
        'Git',
        'Github',
        'Postman',
        'AWS'
    ] as const;
    return (
        <div className='container '>
            <Wrapper
                id='skills'
                className='flex flex-col justify-center h-full min-h-screen gap-6 mt-2 xs:gap-7 xs:mt-0 mx-6 md:mx-8'
            >
                <motion.h2
                    className='text-5xl text-center'
                    variants={slideUp({ delay: getAnimationDelay(0) })}
                    initial='hidden'
                    animate='show'
                >
                    Skills and Expertise
                </motion.h2>
                <div className='w-full mt-2 lg:mt-8 mx-auto flex flex-col md:gap-4 lg:flex-row justify-between items-center'>
                    <SkillList title='Languages' skillsData={languageData} />
                </div>
                <div className='w-full mt-2 lg:mt-8 mx-auto flex flex-col md:gap-4 lg:flex-row justify-between items-center'>
                    <SkillList title='Freamwork' skillsData={freamworkData} />
                </div>
                <div className='w-full mt-2 lg:mt-8 mx-auto flex flex-col md:gap-4 lg:flex-row justify-between items-center'>
                    <SkillList
                        title='Tools Technology'
                        skillsData={toolsAndTechnologyData}
                    />
                </div>
            </Wrapper>
        </div>
    );
};

export default Skills;
