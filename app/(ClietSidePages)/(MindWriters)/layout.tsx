import React from 'react';

const MaidWritersLayout = ({ children }) => {
    return (
        <>
            <div className='flex flex-col w-full h-auto mt-20 overflow-y-auto'>
                <Header />
                {children}
            </div>
        </>
    );
};

export default MaidWritersLayout;
