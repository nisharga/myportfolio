export const LoadingSingleProject = () => {
    return (
        <div className='animate-pulse mt-10 lg:my-12'>
            <div className='h-10 w-1/2 mx-auto bg-gray-300 rounded mb-5'></div>
            <div className='h-5 w-1/4 mx-auto bg-gray-300 rounded mb-3'></div>
            <div className='h-5 w-1/3 mx-auto bg-gray-300 rounded mb-8'></div>

            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 px-10'>
                {[...Array(32)].map((_, i) => (
                    <div
                        key={i}
                        className='h-10 w-full bg-gray-300 rounded'
                    ></div>
                ))}
            </div>
        </div>
    );
};

export const SingleProjectNotFound = () => {
    return (
        <div
            className='mt-10 lg:mt-12 text-center text-red-500 min-h-96 
            flex items-center justify-center'
        >
            <p>❌ Project not found!</p>
        </div>
    );
};
