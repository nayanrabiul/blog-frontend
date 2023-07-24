import { LayoutProvider } from '@/app/(ClietSidePages)/(Dashboard)/context/layoutcontext';

import '@/styles/layout/layout.scss';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
const RootLayout = ({ children }) => {
    return <LayoutProvider>{children}</LayoutProvider>;
};

export default RootLayout;
