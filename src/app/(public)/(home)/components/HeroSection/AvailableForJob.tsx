import { slideUp } from '@/components/animation';
import Button from '@/components/core/buttons/Button';
import { useGetResumeDataQuery } from '@/redux/api/resumeApi';
import { motion } from 'framer-motion';
import Link from 'next/link';

const AvailableForJob = ({ getAnimationDelay }: any) => {
    const { data } = useGetResumeDataQuery('');
    return (
        <>
            <motion.p
                variants={slideUp({
                    delay: getAnimationDelay(4)
                })}
                initial='hidden'
                animate='show'
                className='font-mono text-base md:text-sm text-accent mb-6'
            >
                Currently available for a job & freelance
            </motion.p>

            <Button
                size='lg'
                type='button'
                variants={slideUp({
                    delay: getAnimationDelay(5)
                })}
                initial='hidden'
                animate='show'
            >
                <Link href={`${data?.data?.[0].link}`} target='_blank'>
                    See My Resume
                </Link>
            </Button>
        </>
    );
};

export default AvailableForJob;
