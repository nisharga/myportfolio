'use client';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { slideUp } from '@/components/animation';
import Link from 'next/link';
import SingleTechnology from './SingleTechnology';
import SingleOverview from './SingleOverview';

const SingleProjectPage = () => {
    const data = [
        {
            id: 1
        },
        {
            id: 2
        },
        {
            id: 3
        },
        {}
    ];
    const getAnimationDelay = (i: number, increment = 0.15) =>
        1 + increment * i;
    const liveLinkBtnClass =
        'py-3 mx-2 my-2 rounded-full font-bold leading-none translate-hover-2 hover:shadow-lg transition-all ease-in-out duration-150 px-5 bg-primary-500 text-white hover:bg-primary-600 hover:text-white';
    const FrontendCodeBtnClass =
        'py-3 mx-2 my-2 rounded-full font-bold leading-none translate-hover-2 hover:shadow-lg transition-all ease-in-out duration-150 px-5 border border-primary-600 text-primary-600 hover:text-primary-600 dark:border-primary-500 dark:text-primary-500';
    return (
        <div className='mt-10 lg:mt-12'>
            <motion.h2
                className='text-4xl md:text-5xl text-center mb-5'
                variants={slideUp({ delay: getAnimationDelay(0.2) })}
                initial='hidden'
                animate='show'
            >
                Bistro Boss
            </motion.h2>

            <div className='flex items-center justify-center'>
                <Link href='{url}' target='_blank' className={liveLinkBtnClass}>
                    View Live
                </Link>
            </div>

            <section className=' py-4 overflow-hidden'>
                <div className='mx-auto px-5 sm:w-11/12 xl:w-10/12'>
                    <hr />
                </div>
            </section>

            <div className='flex items-center justify-center'>
                <Link
                    href='https://prompt-world-brown.vercel.app/'
                    target='_blank'
                    className={FrontendCodeBtnClass}
                >
                    Frontend Code
                </Link>
                <Link
                    href='https://prompt-world-brown.vercel.app/'
                    target='_blank'
                    className={FrontendCodeBtnClass}
                >
                    Backend Code
                </Link>
            </div>

            <motion.h5
                className='text-2xl md:text-3xl text-left md:text-center my-5 font-semibold'
                variants={slideUp({ delay: getAnimationDelay(0.2) })}
                initial='hidden'
                animate='show'
            >
                Technoloy Use
            </motion.h5>

            <div className=' '>
                <div className='px-0 md:px-24 lg:px-40'>
                    <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4  '>
                        <SingleTechnology name='MongoDB' />
                        <SingleTechnology name='ExpressJs' />
                        <SingleTechnology name='Artificial' />
                        <SingleTechnology name='Nextjs' />
                        <SingleTechnology name='Typescript' />
                        <SingleTechnology name='Tailwind' />
                        <SingleTechnology name='ExpressJs' />
                        <SingleTechnology name='Artificial' />
                        <SingleTechnology name='Nextjs' />
                        <SingleTechnology name='Typescript' />
                    </div>
                </div>
            </div>

            <section className=' py-4 overflow-hidden'>
                <div className='mx-auto px-5 sm:w-11/12 xl:w-10/12'>
                    <hr />
                </div>
            </section>

            <section>
                {data?.map((overview, index) => (
                    <SingleOverview
                        key={index}
                        overview={overview}
                        index={index}
                    />
                ))}
            </section>

            {/*  <p className='text-4xl md:text-5xl mb-4 text-primary-500 dark:primary-50 '>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                quos ea exercitationem perspiciatis labore quisquam pariatur,
                totam debitis similique iusto magnam quia quidem cumque
                voluptatibus voluptas impedit veniam nisi, fuga animi! Magnam
                impedit delectus accusan
            </p> */}
        </div>
    );
};

export default SingleProjectPage;
