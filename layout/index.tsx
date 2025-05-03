import React, { FC } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

interface PropsMainLayout {
    children: React.ReactElement;
}

const MainLayout: FC<PropsMainLayout> = ({ children }) => {
    return (
        <div className='flex'>
            <Sidebar />
            <div className='w-full'>
                <Navbar />
                <div className='p-4'>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default MainLayout;