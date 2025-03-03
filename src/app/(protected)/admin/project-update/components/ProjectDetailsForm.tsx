'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

const ProjectDetailsForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    const onSubmit = async (data: any) => {
        if (!data.projectName) {
            toast.error('Project Name is required.');
            return;
        }

        try {
            const formData = new FormData();

            // Append image files
            for (let i = 1; i <= 6; i++) {
                if (data[`image${i}`]?.[0]) {
                    formData.append(`image${i}`, data[`image${i}`][0]);
                }
                if (data[`moreInfo${i}`]) {
                    formData.append(`moreInfo${i}`, data[`moreInfo${i}`]);
                }
            }

            // Append text fields
            formData.append('projectName', data.projectName);
            formData.append('liveSiteLink', data.liveSiteLink);
            if (data.frontendGitHub)
                formData.append('frontendGitHub', data.frontendGitHub);
            if (data.backendGitHub)
                formData.append('backendGitHub', data.backendGitHub);
            formData.append(
                'technologyUse',
                JSON.stringify(data.technologyUse)
            );

            const response = await fetch(
                'http://localhost:5000/api/v1/project-details',
                {
                    method: 'POST',
                    body: formData
                }
            );

            if (response.status == 200) {
                toast.success('Project details added successfully!');
                reset();
            } else {
                toast.error('Failed to add project details.');
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('Something went wrong.');
        }
    };

    return (
        <div className='max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md'>
            <h2 className='text-xl font-bold mb-4'>Add Project Details</h2>
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
                <input
                    {...register('projectName', {
                        required: 'Project Name is required'
                    })}
                    placeholder='Project Name'
                    className='w-full p-2 border rounded'
                />

                <input
                    {...register('liveSiteLink', {
                        required: 'Live site link is required'
                    })}
                    placeholder='Live Site Link'
                    className='w-full p-2 border rounded'
                />

                <input
                    {...register('frontendGitHub')}
                    placeholder='Frontend GitHub'
                    className='w-full p-2 border rounded'
                />
                <input
                    {...register('backendGitHub')}
                    placeholder='Backend GitHub'
                    className='w-full p-2 border rounded'
                />

                <textarea
                    {...register('technologyUse')}
                    placeholder='Technology Used (comma-separated)'
                    className='w-full p-2 border rounded'
                />

                <div className='grid grid-cols-2 gap-2'>
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                        <div key={num} className='space-y-2'>
                            <label className='block text-sm font-medium'>
                                Image {num}
                            </label>
                            <input
                                {...register(`image${num}`)}
                                type='file'
                                className='w-full p-2 border rounded'
                            />
                            <textarea
                                {...register(`moreInfo${num}`)}
                                placeholder={`More info about Image ${num}`}
                                className='w-full p-2 border rounded'
                            />
                        </div>
                    ))}
                </div>

                <button
                    type='submit'
                    className='w-full bg-blue-600 text-white p-2 rounded'
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ProjectDetailsForm;
