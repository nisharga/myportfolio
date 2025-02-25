'use client';
import React, { useState } from 'react';

interface SortOrderProps {
    setSearchOrder: (order: 'asc' | 'desc') => void;
}

const SortOrder = ({ setSearchOrder }: SortOrderProps) => {
    const [order, setOrder] = useState<'asc' | 'desc'>('asc');

    const handleOrderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value as any;
        setOrder(value);
        setSearchOrder(value);
    };

    return (
        <div className='relative w-full flex items-center justify-end gap-2'>
            <p>Sort By:</p>
            <select
                value={order}
                onChange={handleOrderChange}
                className='block w-24 px-4 py-2 text-sm font-mono 
                dark:text-gray-300 border 
                border-gray-300 dark:border-gray-600 rounded-md shadow-sm 
                focus:outline-none focus:ring-2 focus:ring-accent 
                focus:border-accent transition-all bg-gray-900 dark:bg-gray-800 text-white
                font-semibold'
            >
                <option value='asc'>Asc</option>
                <option value='desc'>Desc</option>
            </select>
        </div>
    );
};

export default SortOrder;
