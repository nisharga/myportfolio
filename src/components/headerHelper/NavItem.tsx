import { motion } from 'framer-motion';
import Link from 'next/link';
import { slideIn } from '../animation';

interface INavItemsProps {
    href?: string;
    children: React.ReactNode;
    index: number;
    delay: number;
    onClick?: (event: React.MouseEvent) => void;
}

const NavItem = ({ href, children, onClick, index, delay }: INavItemsProps) => {
    return (
        <motion.li
            className='group'
            variants={slideIn({ delay: delay + index / 10, direction: 'down' })}
            initial='hidden'
            animate='show'
        >
            <Link
                href={href || `/#${children}`}
                className='block p-2 duration-500 hover:text-accent'
                onClick={onClick}
            >
                {children}
            </Link>
        </motion.li>
    );
};

export default NavItem;
