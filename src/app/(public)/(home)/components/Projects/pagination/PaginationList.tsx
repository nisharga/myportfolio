interface PaginationProps {
    pageNumber: number;
    setPageNumber: (page: number) => void;
    pageCount: number;
}

const Pagination = ({
    pageNumber,
    setPageNumber,
    pageCount
}: PaginationProps) => {
    const handlePageChange = (newPage: number) => {
        if (newPage < 1 || newPage > pageCount) return;
        setPageNumber(newPage);
    };

    return (
        <div className='flex justify-center space-x-2 mt-4'>
            <button
                className='px-3 py-1 bg-gray-800 text-white rounded disabled:opacity-50'
                onClick={() => handlePageChange(pageNumber - 1)}
                disabled={pageNumber === 1}
            >
                Prev
            </button>
            {[...Array(pageCount)].map((_, i) => (
                <button
                    key={i}
                    className={`px-3 py-1 rounded transition-all duration-200 dark:text-white ${pageNumber === i + 1 ? 'bg-gray-800 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
                    onClick={() => handlePageChange(i + 1)}
                >
                    {i + 1}
                </button>
            ))}
            <button
                className='px-3 py-1 bg-gray-800 text-white rounded disabled:opacity-50'
                onClick={() => handlePageChange(pageNumber + 1)}
                disabled={pageNumber === pageCount}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
