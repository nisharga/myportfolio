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
                        src='/nisharga.jpg'
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
                        <div className='flex items-center space-x-1.5'>
                            <a
                                href={repo}
                                className='block duration-200 hover:text-accent'
                                target='_blank'
                            >
                                githubIcon
                            </a>
                            <a
                                href={url}
                                className='block duration-200 hover:text-accent'
                                target='_blank'
                            >
                                LinkIcon
                            </a>
                        </div>
                    </div>
                    <h4 className='flex justify-between font-medium capitalize duration-200 group-hover:text-accent'>
                        <span>{name}</span>
                        <span className='mr-1'>{year}</span>
                    </h4>
                </div>
            </Link>
        </motion.div>
    ) : (
        <></>
    );
};

export default ProjectCard;
