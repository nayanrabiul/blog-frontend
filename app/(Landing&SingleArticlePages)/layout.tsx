import React from 'react';
import Sidebar from '@/app/(Landing&SingleArticlePages)/component/sidebar';
import Header from '@/common-components/header/header';

const MainSiteLayout = ({ children }) => {
    return (
        <div className={'flex flex-col w-full h-[100vh] bg-gray-200 relative'}>
            <div className={'h-[11%]'}>
                <Header />
            </div>
            <div className={'h-[89%]'}>
                <Sidebar>{children}</Sidebar>
            </div>


        </div>
    );
};

export default MainSiteLayout;
