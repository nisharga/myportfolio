'use client';
import { Wrapper } from '@/components';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { slideUp } from '@/components/animation';
import { useWindowWidth } from '../../hooks';
import { getBreakpointsWidth } from '@/utlis/themeHelper';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import PaginationList from './pagination/PaginationList';
import Search from './Search/Search';
import { PROJECT_TYPE } from '../../static';
import { All, Frontend, FullStack, GetAll, MobileApp } from './components';
import { SortOrder } from './SortOrder';
import { API_BASE_URL, getBaseUrl } from '@/configs/env';

const Projects = () => {
    const windowWidth = useWindowWidth();
    const md = getBreakpointsWidth('md');
    const DEFAULT_ANIMATION_DELAY = windowWidth <= md ? 0.9 : 1.7;

    const getAnimationDelay = (i: number, increment = 0.15) =>
        DEFAULT_ANIMATION_DELAY + increment * i;

    const [searchValue, setSearchValue] = useState('');
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
    const [filter, setFilter] = useState('');
    const [pageNumber, setPageNumber] = useState<number>(1);

    const [fetchData, setFetchData] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(false);

    if (!fetchData) {
        console.error('Data is null or undefined');
    }

    const [activeTab, setActiveTab] = useState('all');

    const BASE_URL = `${API_BASE_URL}/project`;
    const total_pages =
        Math.ceil(fetchData?.meta?.total / fetchData?.meta?.limit) || 3;
    useEffect(() => {
        const fetchProjects = async () => {
            try {
                setLoading(true);
                const params = new URLSearchParams({
                    sortBy: 'order',
                    sortOrder: sortOrder,
                    ...(searchValue && { searchTerm: searchValue }),
                    ...(filter && filter !== 'all' && { category: filter }),
                    page: pageNumber.toString(),
                    limit: '3'
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
    }, [searchValue, sortOrder, filter, pageNumber, BASE_URL]);

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
                    <Tabs
                        defaultValue={activeTab}
                        value={activeTab}
                        onValueChange={(value) => {
                            setActiveTab(value);
                            setFilter(value);
                        }}
                        className='!w-full'
                    >
                        <TabsList className='w-full mb-5 flex flex-row py-20 md:py-0 !justify-center items-center md:mb-12 flex-wrap gap-4'>
                            {PROJECT_TYPE?.map(({ id, title, value }) => {
                                return (
                                    <TabsTrigger
                                        value={value}
                                        className='rounded'
                                        key={id}
                                        onClick={() => setFilter(value)}
                                    >
                                        {title}
                                    </TabsTrigger>
                                );
                            })}
                        </TabsList>
                        <div className='grid grid-cols-12 mb-7 mt-12 md:mt-0'>
                            <div className='col-span-12 lg:col-span-4 mb-5 lg:mb-0'>
                                <Search
                                    setSearchValue={setSearchValue}
                                    searchValue={searchValue}
                                />
                            </div>
                            <div className='col-span-12 lg:col-span-4'></div>
                            <div
                                className='col-span-12 lg:col-span-4 flex gap-4 justify-center 
                            lg:justify-end items-center'
                            >
                                <SortOrder
                                    sortOrder={sortOrder}
                                    setSortOrder={setSortOrder}
                                />
                            </div>
                        </div>
                        <TabsContent value='all'>
                            <All data={fetchData?.data} loading={loading} />
                        </TabsContent>
                        <TabsContent value='frontend'>
                            <All data={fetchData?.data} loading={loading} />
                        </TabsContent>
                        <TabsContent value='full-stack'>
                            <All data={fetchData?.data} loading={loading} />
                        </TabsContent>
                        <TabsContent value='mobile-app'>
                            <All data={fetchData?.data} loading={loading} />
                        </TabsContent>

                        <div className='pt-4'>
                            <PaginationList
                                pageNumber={pageNumber}
                                setPageNumber={setPageNumber}
                                pageCount={total_pages}
                            />
                        </div>
                    </Tabs>
                </div>
                <div className=''>
                    <GetAll />
                </div>
            </Wrapper>
        </div>
    );
};

export default Projects;
