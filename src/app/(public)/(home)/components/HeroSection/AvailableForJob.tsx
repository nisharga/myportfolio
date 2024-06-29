import { slideUp } from '@/components/animation';
import Button from '@/components/core/buttons/Button';
import { motion } from 'framer-motion';

const AvailableForJob = ({ getAnimationDelay }: any) => {
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
                See My Resume
            </Button>
        </>
    );
};

export default AvailableForJob;
