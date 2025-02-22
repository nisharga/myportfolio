'use client';
import { Icons } from '@/components/Icons';
import { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import TestimmonialCard from './TestimmonialCard';
import { useGetTestimonialDataQuery } from '@/redux/api/testimonialApi';

const settings = {
    className: 'slick-container',
    centerMode: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: '0',
    dots: false,
    arrows: false,
    swipe: false,
    autoPlay: true,
    responsive: [
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

// const { heading, details, reviews } = TESTIMONIAL_SECTION;

const TestimonialSection = () => {
    const sliderRef = useRef<Slider | null>(null); // type: Slider | null

    const nextSlide = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };

    const prevSlide = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    };

    const { data } = useGetTestimonialDataQuery('');

    return (
        <section className='w-full md:24 lg:px-48'>
            <div className='md:container'>
                <div className='mb-8'>
                    <Slider ref={sliderRef} {...settings}>
                        {(data?.data ?? []).map((review: any) => (
                            <div key={review.id} className='md:px-4'>
                                <TestimmonialCard review={review} />
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className='flex items-center justify-center gap-4'>
                    <Icons.MoveRight
                        className='rotate-180 cursor-pointer hover:fill-gray-700'
                        onClick={prevSlide}
                    />
                    <Icons.MoveRight
                        className='cursor-pointer hover:fill-gray-700'
                        onClick={nextSlide}
                    />
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;
