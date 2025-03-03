'use client';
import React, { useEffect, useState } from 'react';

const ProjectDetailsAll = () => {
    const [projects, setProjects] = useState([]);

    // Fetch all project details
    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch(
                    'http://localhost:5000/api/project-details'
                ); // Adjust API URL
                const data = await response.json();
                setProjects(data);
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };

        fetchProjects();
    }, []);

    // Delete project
    const handleDelete = async (id: string) => {
        if (!window.confirm('Are you sure you want to delete this project?'))
            return;

        try {
            await fetch(`http://localhost:5000/api/project-details/${id}`, {
                method: 'DELETE'
            });

            // Remove deleted project from state
            setProjects((prevProjects: any) =>
                prevProjects.filter((project: any) => project?.id !== id)
            );
        } catch (error) {
            console.error('Error deleting project:', error);
        }
    };

    return (
        <div className='p-4'>
            <h2 className='text-2xl font-bold mb-4'>All Projects</h2>
            <ul className='space-y-4'>
                {projects.map((project: any) => (
                    <li
                        key={project?.id}
                        className='flex justify-between items-center p-4 bg-gray-100 rounded-lg'
                    >
                        <div>
                            <p className='text-lg font-semibold'>
                                {project.projectName}
                            </p>
                            <p className='text-gray-600'>ID: {project.id}</p>
                        </div>
                        <button
                            onClick={() => handleDelete(project.id)}
                            className='bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700'
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProjectDetailsAll;
