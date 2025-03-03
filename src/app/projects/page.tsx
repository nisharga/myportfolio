'use client';
import { Wrapper } from '@/components';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { slideUp } from '@/components/animation';
import { getBreakpointsWidth } from '@/utlis/themeHelper';
import { API_BASE_URL } from '@/configs/env';
import { useWindowWidth } from '../(public)/(home)/hooks';
import { Search } from '../(public)/(home)/components';
import { SortOrder } from '../(public)/(home)/components/Projects/SortOrder';
import { All } from '../(public)/(home)/components/Projects/components';

const Projects = () => {
    const windowWidth = useWindowWidth();
    const md = getBreakpointsWidth('md');
    const DEFAULT_ANIMATION_DELAY = windowWidth <= md ? 0.9 : 1.7;

    const getAnimationDelay = (i: number, increment = 0.15) =>
        DEFAULT_ANIMATION_DELAY + increment * i;

    const [searchValue, setSearchValue] = useState('');
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
    const [fetchData, setFetchData] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const BASE_URL = `${API_BASE_URL}/project`;
    useEffect(() => {
        const fetchProjects = async () => {
            try {
                setLoading(true);
                const params = new URLSearchParams({
                    sortBy: 'order',
                    sortOrder: sortOrder,
                    ...(searchValue && { searchTerm: searchValue })
                });

                const response = await fetch(
                    `${BASE_URL}?${params.toString()}`
                );
                const data = await response.json();
                setFetchData(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchProjects();
    }, [searchValue, sortOrder, BASE_URL]);

    return (
        <div className='container'>
            <Wrapper
                id='projects'
                className='flex flex-col justify-center h-full min-h-screen gap-6 mt-2 xs:gap-7 xs:mt-0 mx-0 sm:mx-6 md:mx-8'
            >
                <motion.h2
                    className='text-4xl md:text-5xl text-center'
                    variants={slideUp({ delay: getAnimationDelay(0.2) })}
                    initial='hidden'
                    animate='show'
                >
                    All Projects
                </motion.h2>
                <div className='w-full lg:mt-4 mx-auto flex flex-col md:gap-4 lg:flex-row justify-between items-center'>
                    <div className='grid grid-cols-12 mb-7 lg:mt-12 md:mt-0 w-full'>
                        <div className='col-span-12 lg:col-span-4 mb-5 lg:mb-0'>
                            <Search
                                setSearchValue={setSearchValue}
                                searchValue={searchValue}
                            />
                        </div>
                        <div className='col-span-12 lg:col-span-4'></div>
                        <div className='col-span-12 lg:col-span-4'>
                            <SortOrder
                                sortOrder={sortOrder}
                                setSortOrder={setSortOrder}
                            />
                        </div>
                    </div>
                </div>
                <div className=''>
                    <All data={fetchData?.data} loading={loading} />
                </div>
            </Wrapper>
        </div>
    );
};

export default Projects;
