import React from 'react';
import SearchSidebar from '@/app/(ClietSidePages)/(SearchPage)/sidebar';
import Header from '@/common_components/header/header';


const MainSiteLayout = ({ children }) => {
    return (
        <div className={'flex flex-col w-full h-[100vh]  relative'}>
            <div className={'h-[11%]'}>
                <Header />
            </div>
            <div className={'h-[89%]'}>
                <SearchSidebar>
                    {children}
                </SearchSidebar>
            </div>


        </div>
    );
};

export default MainSiteLayout;
