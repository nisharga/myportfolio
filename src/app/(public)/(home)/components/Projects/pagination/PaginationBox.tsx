import { Icons } from '@/components/Icons';
import React, { FC } from 'react';

interface IProps {
    allPageNumber: any;
    setPageNumber: any;
    pageNumber: number;
    nextPage: () => void;
    previousPage: () => void;
    dataPerPage: number;
    pageCount: number;
    lastPage: number;
}

const PaginationBox: FC<IProps> = ({
    allPageNumber,
    setPageNumber,
    pageNumber,
    nextPage,
    previousPage,
    dataPerPage,
    pageCount,
    lastPage
}) => {
    return (
        <div className=' py-2 flex items-center justify-center mt-5 font-roboto text-xl'>
            <div className='flex flex-col xs:flex-row items-center justify-center gap-4 md:gap-0'>
                {
                    <button
                        onClick={() => previousPage()}
                        disabled={pageNumber - 1 >= 1 ? false : true}
                    >
                        <Icons.PaginationArrow
                            className={`mr-4 rotate-180 ${pageNumber - 1 >= 1 ? 'opacity-1' : 'opacity-50 cursor-not-allowed'}`}
                        />
                    </button>
                }

                {dataPerPage <= pageNumber - 2 && (
                    <button onClick={() => setPageNumber(1)}>1...</button>
                )}

                <div>
                    {allPageNumber?.map((num: number) => (
                        <button
                            key={num}
                            onClick={() => setPageNumber(num)}
                            className={`m-2 ${pageNumber == num ? 'bg-second-500 rounded-full w-8 h-8' : ''}`}
                        >
                            {num}
                        </button>
                    ))}
                </div>

                {lastPage <= pageCount && (
                    <button onClick={() => setPageNumber(pageCount)}>
                        ...{pageCount}
                    </button>
                )}

                {
                    <button
                        onClick={() => nextPage()}
                        disabled={pageNumber == pageCount ? true : false}
                    >
                        <Icons.PaginationArrow
                            className={`ml-2 ${pageNumber >= pageCount ? 'opacity-50 cursor-not-allowed' : 'opacity-1'}`}
                        />
                    </button>
                }
            </div>
        </div>
    );
};

export default PaginationBox;
