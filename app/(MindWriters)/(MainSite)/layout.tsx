import React from 'react';
import Sidebar from '@/app/(MindWriters)/(MainSite)/component/sidebar';

const MainSiteLayout = ({ children }) => {
    return (
        <>
            <Sidebar>{children}</Sidebar>
        </>
    );
};

export default MainSiteLayout;
