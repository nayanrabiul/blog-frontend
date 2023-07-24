import React from 'react';
import Header from '@/common_components/header/header';


const MaidWritersLayout = ({ children }) => {
    return (
        <>
            <div className='flex flex-col w-full h-auto overflow-y-auto'>
                <Header />
                {children}
            </div>
        </>
    );
};

export default MaidWritersLayout;
