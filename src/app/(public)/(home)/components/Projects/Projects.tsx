'use client';
import { Wrapper } from '@/components';
import React from 'react';
import { motion } from 'framer-motion';
import { projectVariants, slideUp } from '@/components/animation';
import { useWindowWidth } from '../../hooks';
import { getBreakpointsWidth } from '@/utlis/themeHelper';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ProjectCard from './ProjectCard';
import PaginationList from './pagination/PaginationList';
import Search from './Search/Search';
import { Filter } from './Filter';
import { Sorting } from './Sorting';

const Projects = () => {
    const windowWidth = useWindowWidth();
    const md = getBreakpointsWidth('md');
    const DEFAULT_ANIMATION_DELAY = windowWidth <= md ? 0.9 : 1.7;

    const getAnimationDelay = (i: number, increment = 0.15) =>
        DEFAULT_ANIMATION_DELAY + increment * i;

    const projects = [
        {
            id: '1',
            name: 'beautiful animations',
            url: 'https://beautiful-animations-kv.vercel.app/',
            repo: 'https://github.com/vatsalsinghkv/beautiful-animations',
            img: 'https://user-images.githubusercontent.com/68834718/265277125-da2a6e07-7cf6-411c-b55f-94e372aa6dc8.png',
            year: 2023,
            tags: ['CSS Animations', 'Sass']
        },
        {
            id: '2',
            name: 'easy fix',
            url: 'https://easy-fix.vercel.app/',
            repo: 'https://github.com/vatsalsinghkv/easy-fix',
            img: 'https://user-images.githubusercontent.com/68834718/258852895-df5c6da7-a698-40fb-97c3-a5474314cb85.png',
            year: 2023,
            tags: ['React', 'Tailwind']
        },
        {
            id: '3',
            name: 'image animations',
            url: 'https://image-animations.vercel.app/',
            repo: 'https://github.com/vatsalsinghkv/image-animations',
            img: 'https://github-production-user-asset-6210df.s3.amazonaws.com/68834718/252267106-857c5341-1106-4e84-b7e6-80a668a20ba8.png',
            year: 2023,
            tags: ['CSS Animations', 'Sass']
        }
    ];

    return (
        <div className='container'>
            <Wrapper
                id='projects'
                className='flex flex-col justify-center h-full min-h-screen gap-6 mt-2 xs:gap-7 xs:mt-0 mx-6 md:mx-8'
            >
                <motion.h2
                    className='text-5xl text-center -mt-8'
                    variants={slideUp({ delay: getAnimationDelay(0.2) })}
                    initial='hidden'
                    animate='show'
                >
                    Projects
                </motion.h2>
                <div className='w-full mt-2 lg:mt-8 mx-auto flex flex-col md:gap-4 lg:flex-row justify-between items-center'>
                    <Tabs defaultValue='all' className='!w-full'>
                        <TabsList className='w-full mb-5 flex flex-col md:flex-row py-20 md:py-0 !justify-center items-center md:mb-12'>
                            <TabsTrigger value='all' className=''>
                                All Project
                            </TabsTrigger>
                            <TabsTrigger value='frontend' className=''>
                                Frontend
                            </TabsTrigger>
                            <TabsTrigger value='full_stack' className=''>
                                Full Stack
                            </TabsTrigger>
                        </TabsList>
                        <TabsContent value='all'>
                            <div className='grid grid-cols-12 mb-7'>
                                <div className='col-span-12 lg:col-span-4 mb-5 lg:mb-0'>
                                    <Search />
                                </div>

                                <div className='lg:col-span-4'></div>

                                <div className='col-span-12 lg:col-span-4 flex gap-4 justify-center lg:justify-end items-center'>
                                    <Filter />
                                    <Sorting />
                                </div>
                            </div>
                            <div className='grid grid-cols-12 gap-6'>
                                {projects.map((project) => (
                                    <ProjectCard
                                        {...project}
                                        key={project.id}
                                        variants={projectVariants}
                                        initial='hidden'
                                        animate='show'
                                        custom={1 - 3}
                                    />
                                ))}
                            </div>
                            <div className=''>
                                <PaginationList />
                            </div>
                        </TabsContent>
                        <TabsContent value='frontend'>frontend</TabsContent>
                        <TabsContent value='full_stack'>full_stack</TabsContent>
                    </Tabs>
                </div>
            </Wrapper>
        </div>
    );
};

export default Projects;
