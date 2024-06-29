import Image from 'next/image';

import React, { FC } from 'react';

const SingleOverview = ({ overview, index }: any) => {
    return (
        <div className='grid grid-cols-12 py-12'>
            <div className='col-span-12 md:col-span-6 max-h-[400px] w-auto order-first lg:order-none'>
                <Image
                    src='/nisharga.jpg'
                    alt='single-overview-page'
                    width={300}
                    height={300}
                    className='object-cover w-full h-full transition-all duration-300 group-hover:scale-110 group-focus:scale-110  rounded-2xl '
                />
            </div>
            <div
                className={`col-span-12 md:col-span-6 md:px-6 py-6 md:py-0 flex items-center justify-center ${index % 2 === 0 ? '' : 'md:order-first'}`}
            >
                <p className='text-lg sm:text-xl mb-3 font-mono'>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the indud
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum
                </p>
            </div>
        </div>
    );
};

export default SingleOverview;
