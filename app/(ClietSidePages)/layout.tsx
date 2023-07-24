import PrimeProvider from '@/context/prime_react_provider';

import "primereact/resources/themes/lara-light-indigo/theme.css";
//core
import "primereact/resources/primereact.min.css";



export const metadata = {
    title: 'MindWriters',
    description:
        'Knowledge are the most important thing in the world. We are here to help you to write your mind.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <div
            className={` flex flex-row w-full h-full   `}
        >
            <PrimeProvider>{children}</PrimeProvider>
        </div>

    );
}
