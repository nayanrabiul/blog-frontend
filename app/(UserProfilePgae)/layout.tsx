import React from 'react';
import UserSidebar from '@/app/(UserProfilePgae)/component/sidebar';
import Header from '@/common_components/header/header';

const MainSiteLayout = ({ children }) => {
    return (
        <div className={'flex flex-col w-full h-[100vh]  relative'}>
            <div className={'h-[11%]'}>
                <Header />
            </div>
            <div className={'h-[89%]'}>
                <UserSidebar>{children}</UserSidebar>
            </div>


        </div>
    );
};

export default MainSiteLayout;
