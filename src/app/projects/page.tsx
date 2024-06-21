'use client';
import React from 'react';
import {
    Filter,
    PaginationList,
    ProjectCard,
    Search,
    Sorting
} from '../(public)/(home)/components';
import { projectVariants } from '@/components/animation';

const page = () => {
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
        <div className='mt-24 container'>
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
                        project={project}
                        custom={1 - 3}
                    />
                ))}
            </div>
            <div className=''>
                <PaginationList />
            </div>
        </div>
    );
};

export default page;
