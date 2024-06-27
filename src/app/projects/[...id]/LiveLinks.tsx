import React from 'react';
import { Link } from 'lucide-react';
import { Icons } from '@/components/Icons';

const LiveLinks = () => {
    return (
        <div>
            <Link
                href={'/'}
                target='_blank'
                className='w-full flex items-center justify-center px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700'
            >
                {/* <Icons.Github /> */}
                FrontEnd Code
            </Link>
        </div>
    );
};

export default LiveLinks;
