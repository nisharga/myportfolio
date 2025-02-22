'use client';
import { Wrapper } from '@/components';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { slideUp } from '@/components/animation';
import { useWindowWidth } from '../../hooks';
import { getBreakpointsWidth } from '@/utlis/themeHelper';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import PaginationList from './pagination/PaginationList';
import Search from './Search/Search';
import Link from 'next/link';
import { PROJECT_TYPE } from '../../static';
import { All, Frontend, FullStack, MobileApp } from './components';

const Projects = () => {
    const windowWidth = useWindowWidth();
    const md = getBreakpointsWidth('md');
    const DEFAULT_ANIMATION_DELAY = windowWidth <= md ? 0.9 : 1.7;

    const getAnimationDelay = (i: number, increment = 0.15) =>
        DEFAULT_ANIMATION_DELAY + increment * i;

    const [searchValue, setSearchValue] = useState('');
    console.log('🚀 ~ Projects ~ searchValue:', searchValue);

    return (
        <div className='container'>
            <Wrapper
                id='projects'
                className='flex flex-col justify-center h-full min-h-screen gap-6 mt-2 xs:gap-7 xs:mt-0 mx-0 sm:mx-6 md:mx-8'
            >
                <motion.h2
                    className='text-4xl md:text-5xl text-center -mt-12'
                    variants={slideUp({ delay: getAnimationDelay(0.2) })}
                    initial='hidden'
                    animate='show'
                >
                    Projects
                </motion.h2>
                <div className='w-full lg:mt-4 mx-auto flex flex-col md:gap-4 lg:flex-row justify-between items-center'>
                    <Tabs defaultValue='all' className='!w-full'>
                        <TabsList className='w-full mb-5 flex flex-row py-20 md:py-0 !justify-center items-center md:mb-12'>
                            {PROJECT_TYPE?.map(({ id, title, value }) => {
                                return (
                                    <TabsTrigger
                                        value={value}
                                        className='rounded'
                                        key={id}
                                    >
                                        {title}
                                    </TabsTrigger>
                                );
                            })}
                        </TabsList>
                        <div className='grid grid-cols-12 mb-7'>
                            <div className='col-span-12 lg:col-span-4 mb-5 lg:mb-0'>
                                <Search
                                    setSearchValue={setSearchValue}
                                    searchValue={searchValue}
                                />
                            </div>

                            <div className='lg:col-span-4'></div>

                            <div
                                className='col-span-12 lg:col-span-4 flex gap-4 justify-center 
                            lg:justify-end items-center'
                            >
                                hi
                            </div>
                        </div>
                        <TabsContent value='all'>
                            <All />
                        </TabsContent>
                        <TabsContent value='frontend'>
                            <Frontend />
                        </TabsContent>
                        <TabsContent value='full_stack'>
                            <FullStack />
                        </TabsContent>
                        <TabsContent value='mobile_app'>
                            <MobileApp />
                        </TabsContent>

                        <div className=''>
                            <PaginationList />
                        </div>
                    </Tabs>
                </div>
                <div className='-mt-10'>
                    <GetAllButton />
                </div>
            </Wrapper>
        </div>
    );
};

export default Projects;

const GetAllButton = () => {
    return (
        <motion.div
            className='flex items-center justify-center mt-5 '
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            whileHover={{ scale: 1.01 }}
        >
            <Link
                href='/projects'
                className='!px-5 py-3 text-white rounded-full !animate-bounce bg-gray-900 dark:bg-primary-500'
            >
                All Project Page
            </Link>
        </motion.div>
    );
};
