'use client';

import { motion, MotionProps } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const ProjectCard = ({
    name,
    url,
    repo,
    year,
    img,
    tags,
    project,
    category,
    liveSiteLink,
    ...rest
}: any) => {
    // To avoid hydration failed error
    const [domLoaded, setDomLoaded] = useState(false);

    useEffect(() => {
        setDomLoaded(true);
    }, []);

    return domLoaded ? (
        <motion.div
            {...rest}
            className='col-span-12 md:col-span-6 lg:col-span-4'
        >
            <Link
                href={`/projects/${project?.id}`}
                className='block w-full overflow-hidden transition-all duration-200 rounded-md shadow-xl group bg-bg-secondary dark:shadow-2xl'
            >
                <div className='overflow-hidden h-[200px]'>
                    <Image
                        src={img || '/nisharga.jpg'}
                        alt={name}
                        width={300}
                        height={300}
                        className='object-cover w-full h-full transition-all duration-300 group-hover:scale-110 group-focus:scale-110'
                    />
                </div>
                <div className='p-4 py-3 space-y-1'>
                    <div className='flex items-center justify-between'>
                        <p className='font-mono text-xs capitalize'>
                            {tags.join(' | ')}
                        </p>
                        <div className='flex flex-col items-center'>
                            <div className='block duration-200 hover:text-accent text-sm'>
                                {category}
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between items-center'>
                        <h4 className='flex justify-between font-medium capitalize duration-200 group-hover:text-accent'>
                            <span>{name}</span>
                        </h4>
                        <Link
                            href={`https://${liveSiteLink}`}
                            target='_blank'
                            rel='noreferrer'
                            className='text-white rounded bg-gray-900 dark:bg-primary-500 px-3 py-1.5'
                        >
                            View
                        </Link>
                    </div>
                </div>
            </Link>
        </motion.div>
    ) : (
        <></>
    );
};

export default ProjectCard;
