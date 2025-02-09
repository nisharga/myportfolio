import Link from 'next/link';

const TheSidebar = () => {
    return (
        <div className='border-t !h-screen w-64 p-4 bg-slate-300 dark:bg-gray-800 dark:text-gray-50 text-center'>
            <Link className='p-2 !underline pt-4 block' href='/admin'>
                Dashboard
            </Link>
            <Link
                className='p-2 !underline pt-4 block'
                href='/admin/about-me-update'
            >
                About Me Form
            </Link>
        </div>
    );
};

export default TheSidebar;
