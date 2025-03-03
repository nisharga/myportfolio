import Image from 'next/image';

const SingleOverview = ({ image, content, index }: any) => {
    return (
        <div className='grid grid-cols-12 py-12'>
            <div className='col-span-12 md:col-span-6 max-h-[400px] w-auto order-first lg:order-none'>
                <Image
                    src={image}
                    alt='single-overview-page'
                    width={300}
                    height={300}
                    className='object-cover w-full h-full transition-all duration-300 group-hover:scale-110 group-focus:scale-110  rounded-2xl '
                />
            </div>
            <div
                className={`col-span-12 md:col-span-6 md:px-6 py-6 md:py-0 flex items-center justify-center ${index % 2 === 0 ? '' : 'md:order-first'}`}
            >
                <p className='text-lg sm:text-xl mb-3 font-mono'>{content}</p>
            </div>
        </div>
    );
};

export default SingleOverview;
