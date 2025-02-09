'use client';
import React from 'react';
import { useForm } from 'react-hook-form';

const AboutMeForm = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data: any) => {
        const formData = new FormData();

        // Append image file
        if (data.image[0]) {
            formData.append('image', data.image[0]);
        }

        // Extracting title fields
        const kycData = {
            title1: data.title1,
            title2: data.title2,
            title3: data.title3
        };

        // Adding the KYC data as a JSON string in the "data" field
        formData.append('data', JSON.stringify(kycData));

        try {
            const response = await fetch(
                'http://localhost:5000/api/v1/aboutme',
                {
                    method: 'POST',
                    body: formData
                }
            );

            if (response.ok) {
                const result = await response.json();
                console.log('Success:', result);
                reset(); // Reset the form after successful submission
            } else {
                console.error('Error:', response.statusText);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className='mt-4 p-6 bg-white shadow-lg rounded-lg w-full max-w-md mx-auto'
        >
            <h2 className='text-xl font-semibold mb-4'>About Me Form</h2>

            <div className='mb-4'>
                <label className='block font-medium mb-1'>Image Upload</label>
                <input
                    type='file'
                    {...register('image')}
                    className='w-full border rounded-lg p-2'
                />
            </div>

            <div className='mb-4'>
                <label className='block font-medium mb-1'>Title 1</label>
                <input
                    type='text'
                    {...register('title1')}
                    className='w-full border rounded-lg p-2'
                    placeholder='Enter title 1'
                />
            </div>

            <div className='mb-4'>
                <label className='block font-medium mb-1'>Title 2</label>
                <input
                    type='text'
                    {...register('title2')}
                    className='w-full border rounded-lg p-2'
                    placeholder='Enter title 2'
                />
            </div>

            <div className='mb-4'>
                <label className='block font-medium mb-1'>Title 3</label>
                <input
                    type='text'
                    {...register('title3')}
                    className='w-full border rounded-lg p-2'
                    placeholder='Enter title 3'
                />
            </div>

            <button
                type='submit'
                className='w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600'
            >
                Submit
            </button>
        </form>
    );
};

export default AboutMeForm;
