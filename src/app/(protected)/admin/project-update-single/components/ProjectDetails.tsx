'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface Project {
    id: string;
    image: string;
    projectName: string;
    category: string;
    order: number;
}

const ProjectDetails = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Fetch projects
    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch(
                    'http://localhost:5000/api/v1/project?sortBy=order&sortOrder=asc'
                );
                if (!response.ok) throw new Error('Failed to fetch projects');
                const data = await response.json();
                setProjects(data.data);
            } catch (err) {
                setError(
                    err instanceof Error
                        ? err.message
                        : 'Failed to fetch projects'
                );
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    // Handle delete
    const handleDelete = async (id: string) => {
        if (!window.confirm('Are you sure you want to delete this project?'))
            return;

        try {
            const response = await fetch(
                `http://localhost:5000/api/v1/project/${id}`,
                {
                    method: 'DELETE'
                }
            );

            if (!response.ok) throw new Error('Failed to delete project');

            // Update UI after successful deletion
            setProjects((prev) => prev.filter((project) => project.id !== id));
            alert('Project deleted successfully!');
        } catch (err) {
            alert(
                err instanceof Error ? err.message : 'Failed to delete project'
            );
        }
    };

    if (loading)
        return <div className='text-center p-8'>Loading projects...</div>;
    if (error)
        return <div className='text-red-500 text-center p-8'>{error}</div>;

    return (
        <div className='container mx-auto p-4'>
            <h1 className='text-3xl font-bold mb-6 text-center'>
                Projects List
            </h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow'
                    >
                        <div className='relative h-48'>
                            <Image
                                src={project.image}
                                alt={project.projectName}
                                layout='fill'
                                objectFit='cover'
                                className='w-full h-full'
                            />
                        </div>

                        <div className='p-4'>
                            <div className='flex justify-between items-start mb-2'>
                                <h2 className='text-xl font-semibold'>
                                    {project.projectName}
                                </h2>
                                <span className='bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded'>
                                    Order: {project.order}
                                </span>
                            </div>

                            <div className='flex justify-between items-center'>
                                <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700'>
                                    {project.category}
                                </span>
                                <button
                                    onClick={() => handleDelete(project.id)}
                                    className='px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors'
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectDetails;
