'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

const CreateSingleProject = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = async (data: any) => {
        try {
            const formData = new FormData();

            // Append image with correct field name
            if (data.image?.[0]) {
                formData.append('image1', data.image[0]); // Match backend expectation
            }

            // Append other fields directly
            formData.append('projectName', data.projectName);
            formData.append('projectStack', data.projectStack);
            formData.append('liveSiteLink', data.liveSiteLink);
            formData.append('category', data.category);
            formData.append('order', data.order);
            if (data.projectDetailsId) {
                formData.append('projectDetailsId', data.projectDetailsId);
            }

            const response = await fetch(
                'http://localhost:5000/api/v1/project',
                {
                    method: 'POST',
                    body: formData
                }
            );

            if (response.status == 200) {
                toast.success('Project created successfully!');
            } else {
                const errorData = await response.json();
                toast.error(errorData.message || 'Failed to create project');
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('Something went wrong.');
        }
    };

    return (
        <div className='max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md'>
            <h2 className='text-2xl font-bold mb-6'>Create New Project</h2>
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
                {/* Project Information Section */}
                <div className='space-y-4 p-4 border rounded-md'>
                    <h3 className='text-lg font-semibold mb-2'>
                        Main Information
                    </h3>

                    <div>
                        <label className='block text-sm font-medium mb-1'>
                            Project Name *
                        </label>
                        <input
                            {...register('projectName', { required: true })}
                            className={`w-full p-2 border rounded ${errors.projectName ? 'border-red-500' : ''}`}
                        />
                        {errors.projectName && (
                            <span className='text-red-500 text-sm'>
                                This field is required
                            </span>
                        )}
                    </div>

                    <div>
                        <label className='block text-sm font-medium mb-1'>
                            Main Image *
                        </label>
                        <input
                            type='file'
                            {...register('image', { required: true })}
                            className={`w-full p-2 border rounded ${errors.image ? 'border-red-500' : ''}`}
                        />
                        {errors.image && (
                            <span className='text-red-500 text-sm'>
                                This field is required
                            </span>
                        )}
                    </div>

                    <div>
                        <label className='block text-sm font-medium mb-1'>
                            Technology Stack (comma separated) *
                        </label>
                        <input
                            {...register('projectStack', { required: true })}
                            className={`w-full p-2 border rounded ${errors.projectStack ? 'border-red-500' : ''}`}
                        />
                        {errors.projectStack && (
                            <span className='text-red-500 text-sm'>
                                This field is required
                            </span>
                        )}
                    </div>
                </div>

                {/* Links Section */}
                <div className='space-y-4 p-4 border rounded-md'>
                    <h3 className='text-lg font-semibold mb-2'>
                        Project Links
                    </h3>

                    <div>
                        <label className='block text-sm font-medium mb-1'>
                            Live Site URL *
                        </label>
                        <input
                            {...register('liveSiteLink', { required: true })}
                            className={`w-full p-2 border rounded ${errors.liveSiteLink ? 'border-red-500' : ''}`}
                        />
                        {errors.liveSiteLink && (
                            <span className='text-red-500 text-sm'>
                                This field is required
                            </span>
                        )}
                    </div>
                </div>

                {/* Categorization Section */}
                <div className='space-y-4 p-4 border rounded-md'>
                    <h3 className='text-lg font-semibold mb-2'>
                        Categorization
                    </h3>

                    <div>
                        <label className='block text-sm font-medium mb-1'>
                            Category *
                        </label>
                        <input
                            {...register('category', { required: true })}
                            className={`w-full p-2 border rounded ${errors.category ? 'border-red-500' : ''}`}
                        />
                        {errors.category && (
                            <span className='text-red-500 text-sm'>
                                This field is required
                            </span>
                        )}
                    </div>

                    <div>
                        <label className='block text-sm font-medium mb-1'>
                            Order (Unique) *
                        </label>
                        <input
                            type='number'
                            {...register('order', { required: true })}
                            className={`w-full p-2 border rounded ${errors.order ? 'border-red-500' : ''}`}
                        />
                        {errors.order && (
                            <span className='text-red-500 text-sm'>
                                This field is required
                            </span>
                        )}
                    </div>
                </div>

                {/* Optional Fields */}
                <div className='space-y-4 p-4 border rounded-md'>
                    <h3 className='text-lg font-semibold mb-2'>
                        Advanced Settings
                    </h3>

                    <div>
                        <label className='block text-sm font-medium mb-1'>
                            Project Details ID
                        </label>
                        <input
                            {...register('projectDetailsId')}
                            className='w-full p-2 border rounded'
                        />
                    </div>
                </div>

                <button
                    type='submit'
                    className='w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors'
                >
                    Create Project
                </button>
            </form>
        </div>
    );
};

export default CreateSingleProject;
