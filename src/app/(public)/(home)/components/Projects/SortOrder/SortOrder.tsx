'use client';
import React from 'react';

interface SortOrderProps {
    sortOrder: 'asc' | 'desc';
    setSortOrder: (order: 'asc' | 'desc') => void;
}

const SortOrder = ({ sortOrder, setSortOrder }: SortOrderProps) => {
    return (
        <div className='relative w-full flex items-center lg:justify-end gap-2'>
            <p>Sort By:</p>
            <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value as 'asc' | 'desc')}
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
