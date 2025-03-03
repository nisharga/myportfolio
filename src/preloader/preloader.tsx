'use client';
import React, { useEffect } from 'react';
import { preLoaderAnim } from './animation';
import { getBaseUrl } from '@/configs/env';
import { useAppDispatch } from '@/redux/hooks';
import { setCount } from '@/redux/reducer/countSlice';

const PreLoader = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        preLoaderAnim();
    }, []);

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

                if (data.success && data.data?.visit) {
                    dispatch(setCount(data.data?.visit));
                }
            } catch (error) {
                console.error('Failed to fetch views:', error);
            }
        };

        fetchViews();
    }, [dispatch]);
    return (
        <div className='preloader'>
            <div className='texts-container'>
                <span>Passion,</span>
                <span>Dedication,</span>
                <span>Innovation,</span>
                <span>Excellence.</span>
            </div>
        </div>
    );
};

export default PreLoader;
