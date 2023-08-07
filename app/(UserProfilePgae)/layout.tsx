import UserSidebar from '@/components/UserProfilePgae/sidebar';
import Header from '@/components/header/header';
import React from 'react';


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
