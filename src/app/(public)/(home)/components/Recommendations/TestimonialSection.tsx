'use client';
import { Icons } from '@/components/Icons';
import { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import TestimmonialCard from './TestimmonialCard';

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

const TESTIMONIAL_SECTION = {
    heading: {
        title: 'Donot just take our word for it.',
        description: `MSPs urgently need TruUp to revolutionize their operational landscape and establish a new standard of financial integrity. TruUp serves as a crucial ally, eliminating the persistent challenges of inaccurate billing and vendor payments within the MSP industry.`
    },
    details: `By meticulously cross-verifying software usage and corresponding vendor charges, TruUp ensures that MSPs bill clients accurately and remunerate vendors fairly. This not only eradicates revenue leakages but also establishes unprecedented transparency, fostering trust between MSPs and their clients.`,
    reviews: [
        {
            id: '1',
            name: 'Sarah Thompson',
            title: 'MSP Owner',
            comments: `“I can't stress enough how crucial a solution like TruUp would be for us. The constant struggle of tracking software licenses and ensuring accurate billing is holding us back. We need a game-changer that simplifies this process, brings transparency, and ultimately helps us build stronger relationships with our clients.”`
        },
        {
            id: '2',
            name: 'John Rodriguez',
            title: 'IT Director at an MSP',
            comments: `“In the MSP world, precision is everything, and we are in desperate need of a financial compass. Currently, aligning what we charge clients with what we pay vendors feels like walking a tightrope. We need a solution that goes beyond the numbers, something like TruUp that can elevate our game and restore confidence in our financial operations.”`
        },
        {
            id: '3',
            name: 'Amanda Chen',
            title: 'Operations Manager, MSP Firm',
            comments: `“Value delivery is at the core of the MSP industry, and we're craving a secret weapon. The current challenges in tracking accurate billing and ensuring fair vendor payments are holding us back. We need a solution like TruUp that ensures our billing is accurate, vendor payments are fair, and, most importantly, builds unwavering trust with our clients.”`
        },
        {
            id: '4',
            name: 'Michael Turner',
            title: 'MSP Consultant',
            comments: `“For any MSP serious about financial integrity, we're desperately seeking a game-changer. The constant worry about billing errors is a distraction. We need a financial guardian, something like TruUp, to allow us to focus on delivering exceptional service without the constant anxiety of billing discrepancies.”`
        },
        {
            id: '5',
            name: 'Emily Lewis',
            title: 'MSP CFO',
            comments: `“As an MSP CFO, I can tell you that TruUp would be a financial game-changer for us. The reduction in billing errors and the boost in client trust are things we are actively seeking. We need more than just software; we need a philosophy of precision that can set us up for long-term success. A product like TruUp is what we've been looking for.”`
        }
    ]
};
const { heading, details, reviews } = TESTIMONIAL_SECTION;

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
    return (
        <section className='w-full md:24 lg:px-48'>
            <div className='md:container'>
                <div className='mb-8'>
                    <Slider ref={sliderRef} {...settings}>
                        {(reviews ?? []).map((review) => (
                            <div key={review.id} className='md:px-4'>
                                <TestimmonialCard {...review} />
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
