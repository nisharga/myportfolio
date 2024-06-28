import { Icons } from '@/components/Icons';
import { FC } from 'react';

interface IProps {
    id: string;
    title: string;
    name: string;
    comments: string;
}

const TestimmonialCard: FC<IProps> = ({ comments, name, title }) => {
    return (
        <div className='flex flex-col justify-center items-center gap-6 p-4 bg-white dark:bg-gray-800 rounded-xl text-center'>
            <p>{comments}</p>
            <Icons.Quote className='fill-primary-500' />
            <div className=''>
                <h5 className='text-center font-semibold text-gray-900 dark:text-gray-100'>
                    {name}
                </h5>
                <p className='text-gray-600 dark:text-gray-300'>{title}</p>
            </div>
        </div>
    );
};

export default TestimmonialCard;
