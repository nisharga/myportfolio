'use client';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import SingleProjectPage from './SingleProjectPage';
import { API_BASE_URL } from '@/configs/env';

const ProjectPage = () => {
    const { id } = useParams();
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);
    const BASE_URL = `${API_BASE_URL}/project`;

    useEffect(() => {
        if (!id) return;

        const fetchProject = async () => {
            setLoading(true);
            try {
                const response = await fetch(`${BASE_URL}/${id}`);
                const data = await response.json();
                setProject(data?.data);
            } catch (error) {
                console.error('Error fetching project:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProject();
    }, [id, BASE_URL]);

    return (
        <div className='mt-24 container'>
            <SingleProjectPage loading={loading} project={project} />
        </div>
    );
};

export default ProjectPage;
