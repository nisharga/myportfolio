'use client';
import React, { FC } from 'react';
import { MotionValue, motion } from 'framer-motion';

interface IProps {
    title: string;
    skillsData: any;
}

const SkillList: FC<IProps> = ({ title, skillsData }) => {
    const fadeInAnimationsVariants = {
        initial: {
            opacity: 0,
            y: 100
        },
        animate: (index: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.08 * index
            }
        })
    };
    return (
        <div className='!w-full'>
            <div className='!text-center !w-full mb-8'>
                <p className='skills_box_container_heading'>{title}</p>
            </div>
            <ul
                className='flex flex-wrap justify-center 
        gap-4 
        text-lg text-gray-800'
            >
                {skillsData.map(
                    (
                        skill:
                            | string
                            | number
                            | boolean
                            | React.ReactElement<
                                  any,
                                  string | React.JSXElementConstructor<any>
                              >
                            | Iterable<React.ReactNode>
                            | React.ReactPortal
                            | Promise<React.AwaitedReactNode>
                            | MotionValue<number>
                            | MotionValue<string>
                            | null
                            | undefined,
                        index: React.Key | null | undefined
                    ) => (
                        <motion.li
                            className='bg-white border border/black[0.1] 
            rounded-xl px-2.5 py-1.5 md:px-5 md:py-3 dark:bg-white/10 dark:text-white/80 
            dark:border-none '
                            key={index}
                            variants={fadeInAnimationsVariants}
                            initial='initial'
                            whileInView='animate'
                            viewport={{
                                once: true
                            }}
                            custom={index}
                        >
                            {skill}
                        </motion.li>
                    )
                )}
            </ul>
        </div>
    );
};

export default SkillList;
