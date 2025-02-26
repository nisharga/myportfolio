'use client';
import { motion } from 'framer-motion';
import { slideUp } from '@/components/animation';
import Link from 'next/link';
import SingleTechnology from './SingleTechnology';
import SingleOverview from './SingleOverview';
import { LoadingSingleProject, SingleProjectNotFound } from './PageParts';

const SingleProjectPage = ({ project, loading }: any) => {
    if (loading) {
        return <LoadingSingleProject />;
    }

    if (!project) {
        return <SingleProjectNotFound />;
    }

    const { projectName, liveSiteLink } = project;
    const {
        frontendGitHub,
        backendGitHub,
        technologyUse,
        image1,
        image2,
        image3,
        image4,
        image5,
        image6,
        moreInfo1,
        moreInfo2,
        moreInfo3,
        moreInfo4,
        moreInfo5,
        moreInfo6
    } = project?.projectdetails;
    console.log('🚀 ~ SingleProjectPage ~ liveLink:', project);

    return (
        <div className='mt-10 lg:mt-12'>
            <motion.h2
                className='text-4xl md:text-5xl text-center mb-5'
                variants={slideUp({ delay: 0.2 })}
                initial='hidden'
                animate='show'
            >
                {projectName}
            </motion.h2>

            <div className='flex items-center justify-center'>
                {liveSiteLink && (
                    <Link
                        href={liveSiteLink}
                        target='_blank'
                        className='py-3 mx-2 my-2 rounded-full font-bold px-5 bg-gray-900 text-white hover:bg-gray-800'
                    >
                        View Live
                    </Link>
                )}
            </div>

            <section className='py-4 overflow-hidden'>
                <div className='mx-auto px-5 sm:w-11/12 xl:w-10/12'>
                    <hr />
                </div>
            </section>

            <div className='flex flex-col sm:flex-row items-center justify-center'>
                {frontendGitHub && (
                    <Link
                        href={frontendGitHub}
                        target='_blank'
                        className='py-3 mx-2 my-2 rounded-full font-bold px-5 border border-success text-success hover:text-success'
                    >
                        Frontend Code
                    </Link>
                )}
                {backendGitHub && (
                    <Link
                        href={backendGitHub}
                        target='_blank'
                        className='py-3 mx-2 my-2 rounded-full font-bold px-5 border border-success text-success hover:text-success'
                    >
                        Backend Code
                    </Link>
                )}
            </div>

            <motion.h5
                className='text-2xl md:text-3xl text-left md:text-center my-5 font-semibold'
                variants={slideUp({ delay: 0.2 })}
                initial='hidden'
                animate='show'
            >
                Technology Used
            </motion.h5>

            <div className='px-0 md:px-24 lg:px-40'>
                <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4'>
                    {technologyUse?.map((tech: string, index: number) => (
                        <SingleTechnology key={index} name={tech} />
                    ))}
                </div>
            </div>

            <section className='py-4 overflow-hidden'>
                <div className='mx-auto px-5 sm:w-11/12 xl:w-10/12'>
                    <hr />
                </div>
            </section>

            <section>
                {image1 && moreInfo1 && (
                    <SingleOverview
                        index={1}
                        image={image1}
                        content={moreInfo1}
                    />
                )}
                {image2 && moreInfo2 && (
                    <SingleOverview
                        index={2}
                        image={image2}
                        content={moreInfo2}
                    />
                )}
                {image3 && moreInfo3 && (
                    <SingleOverview
                        index={3}
                        image={image3}
                        content={moreInfo3}
                    />
                )}
                {image4 && moreInfo4 && (
                    <SingleOverview
                        index={4}
                        image={image4}
                        content={moreInfo4}
                    />
                )}
                {image5 && moreInfo5 && (
                    <SingleOverview
                        index={5}
                        image={image5}
                        content={moreInfo5}
                    />
                )}
                {image6 && moreInfo6 && (
                    <SingleOverview
                        index={6}
                        image={image6}
                        content={moreInfo6}
                    />
                )}
            </section>
        </div>
    );
};

export default SingleProjectPage;
