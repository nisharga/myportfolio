'use client';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { slideUp } from '@/components/animation';
import LiveLinks from './LiveLinks';

const SingleProjectPage = () => {
    const params = useParams<{ tag: string; item: string; slug: any }>();
    const getAnimationDelay = (i: number, increment = 0.15) =>
        1 + increment * i;

    return (
        <div>
            <motion.h2
                className='text-4xl md:text-5xl text-center mb-5'
                variants={slideUp({ delay: getAnimationDelay(0.2) })}
                initial='hidden'
                animate='show'
            >
                Projects
            </motion.h2>
            <div className=''>
                <LiveLinks />
            </div>
            <p className='text-4xl md:text-5xl mb-4 text-primary-500 dark:primary-50 '>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                quos ea exercitationem perspiciatis labore quisquam pariatur,
                totam debitis similique iusto magnam quia quidem cumque
                voluptatibus voluptas impedit veniam nisi, fuga animi! Magnam
                impedit delectus accusan
            </p>
        </div>
    );
};

export default SingleProjectPage;
