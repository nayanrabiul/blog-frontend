'use client';
import React, { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useUserContext } from '@/context/user';
import Link from 'next/link';
import Image from 'next/image';
import { Links } from '@/common_components/header/link';
import SocialSignIn from '@/common_components/socialLogin';


const Header = () => {
    const [userSidebarVisible, setUserSidebarVisible] = useState(false);
    const { user, logOut } = useUserContext();
    let router = useRouter();

    let searchParams = useSearchParams();
    let filter = searchParams.get('filter') || 'Article';

    return (
        <header className='p-2 shadow h-full '>
            <div className=' container flex justify-between items-center h-full mx-auto'>
                <div className='flex items-center gap-3'>
                    {/*header logo*/}
                    <Link
                        rel='noopener noreferrer'
                        href='/'
                        aria-label='Back to homepage'
                        className='flex items-center p-2'
                    >
                        <span className='text-xl font-bold tracking-wide  uppercase'>
                          MindWriters
                         </span>
                    </Link>
                    {/*header search box*/}
                    <div className='flex items-center md:space-x-4'>

                        <div className={'relative'}>
                            <form onSubmit={(event =>
                                    //print the value of the input field
                                {
                                    event.preventDefault();
                                    let pushUrl = '/search?query=' + event.target[0].value;
                                    if (filter) {
                                        pushUrl += '&filter=' + filter;
                                    }
                                    router.push(pushUrl);
                                }
                            )}>

                                <span className='absolute inset-y-0 left-0 flex items-center pl-2'>
                                    <button type='submit' title='Search' className='p-1 focus:outline-none focus:ring'>
                                        <svg fill='currentColor' viewBox='0 0 512 512'
                                             className='w-4 h-4 text-gray-800'>
                                            <path
                                                d='M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z'></path>
                                        </svg>
                                    </button>
                                </span>
                                <input
                                    type='search'
                                    name='Search'
                                    placeholder='Search...'
                                    className='shadow border ArticleCard-2 w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none bg-gray-100  focus:bg-gray-50'
                                />
                            </form>
                        </div>
                    </div>
                </div>
                <div className={'flex justify-end items-center gap-3 overflow-clip'}>
                    <div className={'flex justify-end items-center'}>
                        {user ? (
                                <Image
                                    src={user?.image}
                                    height={50}
                                    width={50}
                                    alt={'user image'}
                                    className={'rounded-full cursor-pointer h-full w-full'}
                                    onClick={() => setUserSidebarVisible(!userSidebarVisible)}
                                />)
                            : null
                        }

                        <div>
                            {user ? (
                                <div
                                    onClick={() => setUserSidebarVisible(!userSidebarVisible)}
                                    className={` ${userSidebarVisible ? 'fixed' : 'hidden'}  w-screen h-screen top-0 left-0  z-50 flex justify-center items-center bg-black bg-opacity-50 `}
                                >
                                    <div
                                        className={`relative bg-white border-2 shadow rounded w-72   ease-in-out  h-[60vh] overflow-y-auto                                    `}>
                                        <div
                                            className={'h-full w-full rounded-lg p-3 flex flex-col justify-between items-center ArticleCard ArticleCard '}>

                                            <div className={'flex flex-col justify-start items-center  space-y-6'}>
                                                <div
                                                    className={'flex flex-col justify-center items-center mt-3 hover:text-blue-800 hover:underline hover:cursor-pointer'}>
                                                    {/*email*/}
                                                    <h4 className={' font-semibold   '}>
                                                        {user?.name}
                                                    </h4>
                                                    <div className={' font-semibold text-sm opacity-50'}>
                                                        {user?.email}
                                                    </div>

                                                </div>
                                                <div
                                                    className={'w-full ArticleCard-b-2 ArticleCard-gray-200 my-6'}></div>
                                                {Links.map((link, index) => (
                                                    <Link
                                                        href={link.href}
                                                        key={index}
                                                        onClick={() => setUserSidebarVisible(false)}
                                                        className={' font-semibold text-xl my-1 hover:scale-105 hover:'}>
                                                        {link.name}
                                                    </Link>
                                                ))}

                                            </div>

                                            <div>
                                                {!!user._id ? (
                                                    <button
                                                        type='button'
                                                        className='ArticleCard ArticleCard px-6 py-2 font-semibold rounded lg:block bg-emerald-600 text-gray-50'
                                                        onClick={() => logOut()}
                                                    >
                                                        Log Out
                                                    </button>
                                                ) : <div>asdfd</div>}
                                            </div>


                                        </div>

                                    </div>
                                </div>
                            ) : (
                                <SocialSignIn />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
