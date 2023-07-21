import React from 'react';
import Link from 'next/link';

const HeaderLinks = () => {
    return (
        <div
            className='flex flex-col text-2xl text-bold  gap-y-3  justify-start items-center md:flex-row md:justify-start md:items-stretch md:text-xl'>
            <Link
                rel='noopener noreferrer'
                href='/'
                className='flex items-center px-4 -mb-1 border-b-2 border-transparent retro'
            >
                <span className={'text-green-800 font-bold'}>Article</span>
            </Link>
            <Link
                rel='noopener noreferrer'
                href='/stories'
                className='flex items-center px-4 -mb-1 border-b-2 border-transparent retro'
            >
                <span className={'text-green-800 font-bold'}>Stories</span>
            </Link>
        </div>
    );
};

export default HeaderLinks;
