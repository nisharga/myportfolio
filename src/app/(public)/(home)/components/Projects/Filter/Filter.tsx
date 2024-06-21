import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from '@/components/ui/dialog';

const Filter = () => {
    return (
        <div>
            <Dialog>
                <DialogTrigger className='bg-gray-900 dark:bg-primary-500 py-2 px-5 rounded text-white'>
                    Filter by
                </DialogTrigger>
                <DialogContent className='bg-gray-900 dark:bg-primary-200 text-white dark:text-gray-900'>
                    <div id='filters-container' className='text-xl space-y-2'>
                        <div>
                            <input
                                type='checkbox'
                                className='check'
                                id='cameras'
                            />
                            <label htmlFor='cameras'>Cameras</label>
                        </div>
                        <div>
                            <input
                                type='checkbox'
                                className='check'
                                id='smartphones'
                            />
                            <label htmlFor='smartphones'>Smartphones</label>
                        </div>
                        <div>
                            <input
                                type='checkbox'
                                className='check'
                                id='games'
                            />
                            <label htmlFor='games'>Games</label>
                        </div>
                        <div>
                            <input
                                type='checkbox'
                                className='check'
                                id='televisions'
                            />
                            <label htmlFor='televisions'>Televisions</label>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default Filter;
