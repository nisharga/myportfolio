'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const AboutMeAll = () => {
    const [aboutMeList, setAboutMeList] = useState([]);

    // Fetch all About Me data
    const fetchAboutMe = async () => {
        try {
            const response = await fetch(
                'http://localhost:5000/api/v1/aboutme'
            );
            if (response.ok) {
                const data = await response.json();
                setAboutMeList(data?.data);
            } else {
                throw new Error('Failed to fetch data');
            }
        } catch (error: any) {
            toast.error(error.message);
        }
    };

    // Delete handler
    const handleDelete = async (id: string) => {
        const confirmDelete = window.confirm(
            'Are you sure you want to delete this?'
        );
        if (!confirmDelete) return;

        try {
            const response = await fetch(
                `http://localhost:5000/api/v1/aboutme/${id}`,
                {
                    method: 'DELETE'
                }
            );

            if (response.ok) {
                toast.success('Deleted successfully!');
                setAboutMeList((prevList) =>
                    prevList.filter((item: any) => item.id !== id)
                );
            } else {
                throw new Error('Failed to delete');
            }
        } catch (error: any) {
            toast.error(error?.message);
        }
    };

    useEffect(() => {
        fetchAboutMe();
    }, []);

    return (
        <div className='mt-6 p-6 bg-white shadow-lg rounded-lg w-full max-w-2xl mx-auto'>
            <h2 className='text-xl font-semibold mb-4'>About Me List</h2>

            {aboutMeList.length === 0 ? (
                <p className='text-gray-500'>No data available</p>
            ) : (
                <ul className='space-y-4'>
                    {aboutMeList?.map((item: any) => (
                        <li
                            key={item.id}
                            className='flex items-center justify-between p-4 border rounded-lg'
                        >
                            <div>
                                <Image
                                    src={item.image}
                                    className='w-[40px] h-[40px]'
                                    width={40}
                                    height={40}
                                    alt='Avatar'
                                />
                                <h3 className='text-lg font-semibold'>
                                    {item.title1}
                                </h3>
                                <p className='text-gray-500'>{item.title2}</p>
                                <p className='text-gray-500'>{item.title3}</p>
                            </div>
                            <button
                                onClick={() => handleDelete(item.id)}
                                className='bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600'
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default AboutMeAll;
