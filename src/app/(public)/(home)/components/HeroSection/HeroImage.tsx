import { HEROIMG, HEROIMG_ACTION } from '@/static/HeroArea';
import Image from 'next/image';
import React from 'react';

const HeroImage = () => {
    return (
        <div className='relative mx-auto lg:mx-0 mt-12 md:mt-16 lg:mt-0'>
            <div className='w-56 h-56 md:w-80 md:h-80 lg:-translate-x-16'>
                <Image
                    alt='avatar'
                    width={1000}
                    height={1000}
                    className='rounded-full w-full h-full object-cover'
                    src={'/public/heroarea/CSS3.png'}
                />
            </div>

            <div className='absolute grid -top-6 -left-12 lg:-top-14 lg:-left-32 w-16 h-16 md:w-20 md:h-20 bg-white dark:bg-grey-800 rounded-full place-items-center hover:shadow-lg transition-shadow'>
                <Image
                    alt='tech-stack'
                    className='h-8 w-8 md:h-10 md:w-10 object-cover'
                    src={HEROIMG_ACTION[0].img}
                    width={100}
                    height={100}
                />
            </div>
            <div className='absolute grid top-0 -right-12 lg:-right-4 w-14 h-14 bg-white dark:bg-grey-800 rounded-full place-items-center hover:shadow-lg transition-shadow'>
                <Image
                    alt='tech-stack'
                    className='h-8 w-8 md:h-10 md:w-10 object-cover'
                    src={HEROIMG_ACTION[1].img}
                    width={100}
                    height={100}
                />
            </div>
            <div className='absolute grid bottom-[4rem] md:bottom-24 -right-16 md:-right-20 lg:bottom-[8.5rem] lg:-right-12 w-12 h-12 md:w-16 md:h-16 bg-white dark:bg-grey-800 rounded-full place-items-center hover:shadow-lg transition-shadow'>
                <Image
                    alt='tech-stack'
                    className='h-6 w-6 md:h-10 md:w-10 object-cover'
                    src={HEROIMG_ACTION[2].img}
                    width={100}
                    height={100}
                />
            </div>
            <div className='absolute grid -bottom-10 -right-8 lg:-bottom-0 lg:right-6 w-14 md:w-16 h-14 md:h-16 bg-white dark:bg-grey-800 rounded-full place-items-center hover:shadow-lg transition-shadow'>
                <Image
                    alt='tech-stack'
                    className='h-10 w-10 object-cover'
                    src={HEROIMG_ACTION[3].img}
                    width={100}
                    height={100}
                />
            </div>
        </div>
    );
};

export default HeroImage;
