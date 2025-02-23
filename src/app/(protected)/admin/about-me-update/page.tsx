import React from 'react';
import AboutMeAll from './AboutMeAll/AboutMeAll';
import { AboutMeForm } from './AboutMeForm';

const page = () => {
    return (
        <div className='py-4'>
            <h1 className='mb-4'>About Me (LocalHost Dependency) </h1>
            <AboutMeAll />
            <hr className='mt-12 mb-12' />
            <AboutMeForm />
        </div>
    );
};

export default page;
