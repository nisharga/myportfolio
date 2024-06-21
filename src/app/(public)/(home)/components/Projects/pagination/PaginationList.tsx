/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { useEffect, useState } from 'react';
import { usePagination } from './usePagination';
import PaginationBox from './PaginationBox';

const PaginationList = () => {
    const onlineCoursesData = [
        {
            id: '101',
            image: '/homepage/course/one.png',
            name: 'Dulkan Salman',
            title: 'Muay Thai',
            review: {
                avgValue: 3.5,
                total: 1235
            },
            price: {
                current: 300,
                prev: 8000
            },
            category: 'most_popular'
        },
        {
            id: '102',
            image: '/homepage/course/two.png',
            name: 'Adil Sharma',
            title: 'Boxing',
            review: {
                avgValue: 5,
                total: 1123
            },
            price: {
                current: 600,
                prev: 6000
            },
            category: 'most_popular'
        },
        {
            id: '103',
            image: '/homepage/course/three.png',
            name: 'Adi Sharma',
            title: 'Jiu-Jtsu',
            review: {
                avgValue: 2.5,
                total: 11
            },
            price: {
                current: 900,
                prev: 2000
            },
            category: 'most_popular'
        },
        {
            id: '104',
            image: '/homepage/course/one.png',
            name: 'Nisharga',
            title: 'Jiu-Jtsu',
            review: {
                avgValue: 4.7,
                total: 220
            },
            price: {
                current: 1550,
                prev: 1500
            },
            category: 'most_popular'
        },
        {
            id: '105',
            image: '/homepage/course/two.png',
            name: 'Kabir',
            title: 'Pro OKC',
            review: {
                avgValue: 4.2,
                total: 120
            },
            price: {
                current: 450,
                prev: 1500
            },
            category: 'street_fight'
        },
        {
            id: '106',
            image: '/homepage/course/three.png',
            name: 'Halim',
            title: 'Black Belt',
            review: {
                avgValue: 4.3,
                total: 220
            },
            price: {
                current: 550,
                prev: 2000
            },
            category: 'street_fight'
        },
        {
            id: '107',
            image: '/homepage/course/one.png',
            name: 'Susu-Kina',
            title: 'Jiu-Jtsu',
            review: {
                avgValue: 4.9,
                total: 420
            },
            price: {
                current: 650,
                prev: 7000
            },
            category: 'street_fight'
        },
        {
            id: '108',
            image: '/homepage/course/two.png',
            name: 'Adil Sharma',
            title: 'Boxing',
            review: {
                avgValue: 5,
                total: 1123
            },
            price: {
                current: 700,
                prev: 6000
            },
            category: 'street_fight'
        }
    ];

    //  Online Course pagination
    const [onlineCourseItems, setOnlineCourseItems] = useState([]);
    const {
        pageNumber: onlineCoursepageNumber,
        setPageNumber: onlineCoursesetPageNumber,
        pageCount: onlineCoursepageCount,
        pageData: onlineCoursepageData,
        nextPage: onlineCoursenextPage,
        previousPage: onlineCoursepreviousPage,
        allPageNumber: onlineCourseallPageNumber,
        lastPage: onlineCourselastPage
    } = usePagination(onlineCoursesData, 4);

    useEffect(() => {
        setOnlineCourseItems(onlineCoursepageData());
    }, [onlineCoursepageNumber]);

    return (
        <PaginationBox
            allPageNumber={onlineCourseallPageNumber}
            setPageNumber={onlineCoursesetPageNumber}
            pageNumber={onlineCoursepageNumber}
            nextPage={onlineCoursenextPage}
            previousPage={onlineCoursepreviousPage}
            dataPerPage={4}
            pageCount={onlineCoursepageCount}
            lastPage={onlineCourselastPage}
        />
    );
};

export default PaginationList;
