'use client';
import { Icons } from '@/components/Icons';
import React, { useCallback, useEffect, useRef, useState } from 'react';

interface SearchProps {
    setSearchValue: (value: string) => void;
    searchValue: string;
}

const Search = ({ setSearchValue, searchValue }: SearchProps) => {
    const [inputValue, setInputValue] = useState(searchValue);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    // Sync local state with prop changes
    useEffect(() => {
        setInputValue(searchValue);
    }, [searchValue]);

    // Debounce function using ref
    const debouncedSearch = useCallback(
        (value: string) => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }

            timerRef.current = setTimeout(() => {
                setSearchValue(value);
            }, 300);
        },
        [setSearchValue]
    );

    // Cleanup timer
    useEffect(() => {
        return () => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
        };
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInputValue(value);
        debouncedSearch(value);
    };

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <div className='relative text-gray-600 focus-within:text-gray-400'>
                <span className='absolute inset-y-0 left-0 flex items-center pl-2'>
                    <span className='p-1 focus:outline-none focus:shadow-outline'>
                        <Icons.Search />
                    </span>
                </span>
                <input
                    type='search'
                    name='q'
                    className='py-2 text-sm text-gray-600 dark:text-white dark:bg-gray-800 bg-white 
                    rounded-md pl-10 w-full'
                    placeholder='Search...'
                    autoComplete='off'
                    value={inputValue}
                    onChange={handleInputChange}
                />
            </div>
        </form>
    );
};

export default Search;
