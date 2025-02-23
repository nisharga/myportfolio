'use client';
import { Icons } from '@/components/Icons';
import { getBaseUrl } from '@/configs/env';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const TheFooter = () => {
    const [views, setViews] = useState(0);

    useEffect(() => {
        const fetchViews = async () => {
            try {
                const response = await fetch(
                    `${getBaseUrl()}/resume/view-count`,
                    {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' }
                    }
                );

                const data = await response.json();
                console.log('🚀 ~ fetchViews ~ data:', data);

                if (data.success && data.data?.visit) {
                    setViews(data.data?.visit);
                }
            } catch (error) {
                console.error('Failed to fetch views:', error);
            }
        };

        fetchViews();
    }, []);
    return (
        <footer className='max-w-lg mx-auto mb-5 font-mono text-xs text-center flex gap-2 items-center justify-center'>
            <Link
                href='https://github.com/nisharga'
                target='_blank'
                rel='noopener noreferrer'
                className='transition hover:text-accent'
            >
                Design & Built by
                <b className='text-sm font-bold pl-1'>Nisharga Kabir</b>
            </Link>
            <div className='flex gap-1'>
                <Icons.Eye className='w-4 h-4' />
                <p>{views}</p>
            </div>
        </footer>
    );
};

export default TheFooter;
