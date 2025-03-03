'use client';
import { Icons } from '@/components/Icons';
import { getBaseUrl } from '@/configs/env';
import { useAppSelector } from '@/redux/hooks';
import { RootState } from '@/redux/store';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const TheFooter = () => {
    const { count } = useAppSelector((state: RootState) => state.count);
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
                <p>{count}</p>
            </div>
        </footer>
    );
};

export default TheFooter;
