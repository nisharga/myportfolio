import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

const GetAll = () => {
    return (
        <motion.div
            className='flex items-center justify-center mt-5 '
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            whileHover={{ scale: 1.01 }}
        >
            <Link
                href='/projects'
                className='!px-5 py-3 text-white rounded-full !animate-bounce bg-gray-900 dark:bg-primary-500'
            >
                All Project Page
            </Link>
        </motion.div>
    );
};

export default GetAll;
