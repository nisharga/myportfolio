import React from 'react';
import ProjectCard from '../../ProjectCard';
import { projectVariants } from '@/components/animation';

interface IProps {
    map: any;
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
    data: IProps;
}

const Frontend = ({ data }: IData) => {
    return (
        <div className='grid grid-cols-12 gap-6'>
            {data?.map(
                ({
                    id,
                    image,
                    projectStack,
                    projectName,
                    category,
                    liveSiteLink
                }: IProps) => (
                    <ProjectCard
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

export default Frontend;
