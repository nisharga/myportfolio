import Link from 'next/link';

const SiteTitle = () => {
    return (
        <h1 className='relative text-2xl capitalize font-signature text-accent group top-1'>
            <Link href='/' className='block'>
                nisharga kabir
                <div className='absolute bottom-1.5 left-0 h-[1px] w-0 group-hover:w-full bg-accent duration-300'></div>
            </Link>
        </h1>
    );
};

export default SiteTitle;
