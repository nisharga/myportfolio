'use client';
import React, { useEffect } from 'react';
import { preLoaderAnim } from './animation';

const PreLoader = () => {
    useEffect(() => {
        preLoaderAnim();
    }, []);
    return (
        <div className='preloader'>
            <div className='texts-container !bg-red-500'>
                <span>Trust,</span>
                <span>Belief,</span>
                <span>Faith,</span>
                <span>Hope.</span>
            </div>
        </div>
    );
};

export default PreLoader;
