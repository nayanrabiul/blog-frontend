import React from 'react';
import HomeSidebar from '@/app/(Landing&SingleArticlePages)/component/sidebar';
import Header from '@/common_components/header/header';

const MainSiteLayout = ({ children }) => {
    return (
        <div className={'flex flex-col w-full h-[100vh]  relative'}>
            <div className={'h-[11%]'}>
                <Header />
            </div>
            <div className={'h-[89%]'}>
                <HomeSidebar>{children}</HomeSidebar>
            </div>


        </div>
    );
};

export default MainSiteLayout;
