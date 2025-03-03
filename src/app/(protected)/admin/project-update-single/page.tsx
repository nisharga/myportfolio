import React from 'react';
import CreateSingleProject from './CreateSingleProject';
import ProjectDetails from './components/ProjectDetails';

const page = () => {
    return (
        <div className='py-4'>
            <h1 className='mb-4'>
                Project Single Update (LocalHost Dependency)
            </h1>
            <hr className='mt-12 mb-12' />
            <ProjectDetails />
            <hr className='mt-12 mb-12' />
            <CreateSingleProject />
        </div>
    );
};

export default page;
