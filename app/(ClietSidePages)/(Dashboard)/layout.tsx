import { LayoutProvider } from '@/app/(Dashboard)/context/layoutcontext';

const RootLayout = ({ children }) => {
    return <LayoutProvider>{children}</LayoutProvider>;
};

export default RootLayout;
