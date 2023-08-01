import Header from '@/common_components/header/header';

const MaidWritersLayout = ({ children }) => {
    return (
        <>
            <div className='flex-colbg-green-900 flex h-auto w-full overflow-y-auto '>
                <Header />
                {children}
            </div>
        </>
    );
};

export default MaidWritersLayout;
