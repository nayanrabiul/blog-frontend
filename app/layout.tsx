import { Inter } from 'next/font/google';
import { UserContextProvider } from '@/context/user';

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

        <body className={inter.className}>
        <main
            className={`${inter.className} relative `}
        >
            <UserContextProvider>{children}</UserContextProvider>
        </main>
        </body>
        </html>
    );
}
