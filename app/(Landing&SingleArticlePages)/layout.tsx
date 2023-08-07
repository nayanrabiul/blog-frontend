import HomeSidebar from '@/components/Landing&SingleArticlePages/sidebar';
import Header from '@/components/header/header';

const MainSiteLayout = ({ children }) => {
    return (
        <div className={'relative flex h-[100vh] w-full  flex-col'}>
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
