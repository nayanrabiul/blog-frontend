import PrimeProvider from '@/context/prime_react_provider';
import { UserContextProvider } from '@/context/user';
import '@/styles/prism.css'; //for code blocks
import { Inter } from 'next/font/google';
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/saga-green/theme.css';

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
                <main className={`${inter.className}  relative `}>
                    <UserContextProvider>
                        <PrimeProvider>{children}</PrimeProvider>
                    </UserContextProvider>
                </main>
            </body>
        </html>
    );
}
