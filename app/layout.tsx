import { Inter } from 'next/font/google';
import { UserContextProvider } from '@/context/user';


import 'primeicons/primeicons.css';
import '@/styles/prism.css';//for code blocks

import PrimeProvider from '@/context/prime_react_provider';
import 'primereact/resources/themes/saga-green/theme.css';
import 'primereact/resources/primereact.min.css';

import '@/globals.css';


const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'MindWriters',
    description:
        'Knowledges are the most important thing in the world. We are here to help you to write your mind.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>

        <body className={`${inter.className} bg-background text-text `}>
        <main
            className={`${inter.className} relative `}
        >
            <UserContextProvider>
                <PrimeProvider>
                    {children}
                </PrimeProvider>
            </UserContextProvider>
        </main>
        </body>
        </html>
    );
}
