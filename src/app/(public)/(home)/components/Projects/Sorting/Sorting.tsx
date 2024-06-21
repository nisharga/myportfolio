import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from '@/components/ui/select';

const Sorting = () => {
    return (
        <Select>
            <SelectTrigger className='w-[180px]'>
                <SelectValue placeholder='Theme' />
            </SelectTrigger>
            <SelectContent className='bg-gray-900 dark:bg-primary-200 text-white dark:text-gray-900'>
                <SelectItem value='light'>Light</SelectItem>
                <SelectItem value='dark'>Dark</SelectItem>
                <SelectItem value='system'>System</SelectItem>
            </SelectContent>
        </Select>
    );
};

export default Sorting;
