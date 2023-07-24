import { LayoutProvider } from '@/app/(ClietSidePages)/(Dashboard)/context/layoutcontext';

import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import '@/styles/layout/layout.scss';
import '@/styles/demo/Demos.scss';


const RootLayout = ({ children }) => {
    return <LayoutProvider>{children}</LayoutProvider>;
};

export default RootLayout;
