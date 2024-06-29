'use client';
import { store } from '@/redux/store';
import { Provider } from 'react-redux';
import { FC, ReactNode } from 'react';

interface IProps {
    children: ReactNode;
}

const ReduxProviders: FC<IProps> = ({ children }) => {
    return (
        <>
            <Provider store={store}>{children}</Provider>
        </>
    );
};

export default ReduxProviders;
