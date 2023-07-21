import { Inter } from 'next/font/google';
import { UserContextProvider } from '@/context/user';

import '@/globals.css';



import PrimeProvider from '@/components/prime_react_provider';


const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'MindWriters',
    description:
        'Knowledges are the most important thing in the world. We are here to help you to write your mind.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>

        <body className={inter.className}>
        <main
            className={`${inter.className} relative flex flex-row w-full h-full  text-gray-800 bg-gray-200`}
        >
            <UserContextProvider>{children}</UserContextProvider>
        </main>
        </body>
        </html>
    );
}
