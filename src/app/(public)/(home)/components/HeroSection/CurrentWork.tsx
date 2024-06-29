import { slideUp } from '@/components/animation';
import Button from '@/components/core/buttons/Button';
import { motion } from 'framer-motion';
import Link from 'next/link';

const CurrentWork = ({ companyUrl, workCompany, getAnimationDelay }: any) => {
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
                Currently, I work for
                <Link
                    href={`${companyUrl}`}
                    target={'_blank'}
                    rel={'noreferrer'}
                    className='font-mono text-base md:text-sm text-accent mb-6 underline p-2'
                >
                    {workCompany}
                </Link>
                Company.
                <br />
                However, you can contact me for any consulting or freelance
                tasks.
            </motion.p>
        </>
    );
};

export default CurrentWork;
