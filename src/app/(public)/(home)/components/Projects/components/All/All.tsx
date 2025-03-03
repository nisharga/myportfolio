import React from 'react';
import ProjectCard from '../../ProjectCard';
import { projectVariants } from '@/components/animation';

interface IProps {
    category: string;
    createdAt: string;
    id: string;
    image: string;
    liveSiteLink: string;
    order: number;
    projectDetailsId: string;
    projectName: string;
    projectStack: [];
}

interface IData {
    data: IProps[];
    loading: boolean;
}

const SkeletonCard = () => (
    <div className='bg-gray-300 animate-pulse h-64 w-full rounded-xl' />
);

const All = ({ data, loading }: IData) => {
    return (
        <div className='grid grid-cols-12 gap-6'>
            {loading
                ? Array(3)
                      .fill(null)
                      .map((_, index) => (
                          <div
                              key={index}
                              className='col-span-12 md:col-span-6 lg:col-span-4'
                          >
                              <SkeletonCard />
                          </div>
                      ))
                : data?.map(
                      ({
                          id,
                          image,
                          projectStack,
                          projectName,
                          category,
                          liveSiteLink
                      }: IProps) => (
                          <ProjectCard
                              id={id}
                              key={id}
                              img={image}
                              tags={projectStack}
                              name={projectName}
                              category={category}
                              liveSiteLink={liveSiteLink}
                              variants={projectVariants}
                              initial='hidden'
                              animate='show'
                              custom={1 - 3}
                          />
                      )
                  )}
        </div>
    );
};

export default All;
