import { Icons } from '@/components/Icons';
import React, { FC } from 'react';
import { motion } from 'framer-motion';
import { slideIn } from '@/components/animation';

interface IProps {
    name: string;
}

const SingleTechnology: FC<IProps> = ({ name }) => {
    const getAnimationDelay = (i: number, increment = 0.15) =>
        1 + increment * i;
    return (
        <motion.div
            variants={slideIn({ delay: getAnimationDelay(0.2) })}
            initial='hidden'
            animate='show'
            className='flex justify-start items-center py-2 leading-tight lg:w-full text-lg'
        >
            <div className='flex justify-center items-center w-5 h-5 rounded-full mr-4 text-sm  '>
                <Icons.CircleCheck className=' ' />
            </div>
            <span className=' text-gray-800 dark:text-gray-100 font-semibold p-1'>
                {name}
            </span>
        </motion.div>
    );
};

export default SingleTechnology;
