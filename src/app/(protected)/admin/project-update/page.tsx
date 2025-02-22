import React from 'react';
import ProjectDetailsForm from './components/ProjectDetailsForm';
import ProjectDetailsList from './components/ProjectDetailsList';

const page = () => {
    return (
        <div className='py-4'>
            <h1 className='mb-4'>
                Project Details Update (LocalHost Dependency)
            </h1>
            <hr className='mt-12 mb-12' />
            <ProjectDetailsList />
            <hr className='mt-12 mb-12' />
            <ProjectDetailsForm />
        </div>
    );
};

export default page;
