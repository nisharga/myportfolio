'use client';
import React, { useState, useEffect } from 'react';

interface Project {
    id: string;
    projectName: string;
    // Add other properties if needed later
}

interface ApiResponse {
    data: Project[];
}

const ProjectDetailsList = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Fetch projects
    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch(
                    'http://localhost:5000/api/v1/project-details'
                );
                if (!response.ok) throw new Error('Failed to fetch projects');

                const data: ApiResponse = await response.json();
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

    // Delete project
    const handleDelete = async (id: string) => {
        if (!window.confirm('Are you sure you want to delete this project?'))
            return;

        try {
            const response = await fetch(
                `http://localhost:5000/api/v1/project-details/${id}`,
                {
                    method: 'DELETE'
                }
            );

            if (!response.ok) throw new Error('Failed to delete project');

            setProjects((prev) => prev.filter((project) => project.id !== id));
        } catch (err) {
            alert(
                err instanceof Error ? err.message : 'Failed to delete project'
            );
        }
    };

    if (loading) return <div className='text-center p-4'>Loading...</div>;
    if (error)
        return <div className='text-red-500 text-center p-4'>{error}</div>;

    return (
        <div className='container mx-auto p-4'>
            <h2 className='text-2xl font-bold mb-4'>Project List</h2>
            <div className='space-y-4'>
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className='flex items-center justify-between p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow'
                    >
                        <div className='space-y-1'>
                            <p className='font-mono text-sm text-gray-500'>
                                {project.id}
                            </p>
                            <h3 className='text-xl font-semibold'>
                                {project.projectName}
                            </h3>
                        </div>
                        <button
                            onClick={() => handleDelete(project.id)}
                            className='px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors'
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectDetailsList;
