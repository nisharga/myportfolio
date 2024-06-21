'use client';
import React, { useState } from 'react';

export const usePagination = (items: any, pageLimit: number) => {
    const [pageNumber, setPageNumber] = useState<number>(1);

    // how many pages....
    const pageCount = Math.ceil(items.length / pageLimit);

    // currentpage and offset
    let currentPage: number = 1;
    if (pageNumber > 1) {
        currentPage = pageNumber;
    }
    const offSet = (currentPage - 1) * pageLimit;

    // before 3 page number and after 3 page number show
    let allPageNumber = [];
    for (let i = currentPage - 3; i <= currentPage + 3; i++) {
        if (i < 1) continue;
        if (i > pageCount) break;
        allPageNumber.push(i);
    }

    // limit and lastPage
    let limit = pageNumber * pageLimit;
    let lastPage = currentPage + (pageLimit + 1);

    // page data slice for show (0, 3) default
    const pageData = () => {
        return items.slice(limit - pageLimit, limit);
    };

    const changePage = (pN: number) => {
        setPageNumber(pN);
    };
    const nextPage = () => {
        setPageNumber(pageNumber + 1);
    };

    const previousPage = () => {
        setPageNumber(Math.max(pageNumber - 1, 0));
    };

    return {
        pageNumber,
        setPageNumber,
        pageCount,
        changePage,
        pageData,
        nextPage,
        previousPage,
        allPageNumber,
        lastPage
    };
};
