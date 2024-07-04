import { Icons } from '@/components/Icons';
import Link from 'next/link';
import { FC } from 'react';

const TestimmonialCard: FC<any> = ({ review }) => {
    return (
        <div className='flex flex-col justify-center items-center gap-6 p-4 bg-white dark:bg-gray-800 rounded-xl text-center'>
            <p>{review?.talkAboutMe}</p>
            <Icons.Quote className='fill-primary-500' />
            <div className=''>
                <h5 className='text-center font-semibold text-gray-900 dark:text-gray-100'>
                    <Link
                        href={review?.linkedinId}
                        className='underline'
                        target='_blank'
                    >
                        {review?.name}
                    </Link>
                </h5>
                <p className='text-gray-600 dark:text-gray-300'>
                    {review?.position}
                </p>
            </div>
        </div>
    );
};

export default TestimmonialCard;
