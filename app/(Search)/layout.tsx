import Header from '@/components/header/header';
import SearchSidebar from './sidebar';

const MainSiteLayout = ({ children }) => {
    return (
        <div className={'relative flex h-[100vh] w-full  flex-col'}>
            <div className={'h-[11%]'}>
                <Header />
            </div>
            <div className={'h-[89%]'}>
                <SearchSidebar>{children}</SearchSidebar>
            </div>
        </div>
    );
};

export default MainSiteLayout;
