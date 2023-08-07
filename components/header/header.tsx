'use client';
import { useUserContext } from '@/context/user';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { Avatar } from 'primereact/avatar';
import { Button } from 'primereact/button';
import { Sidebar } from 'primereact/sidebar';
import { useState } from 'react';
import SocialSignIn from '../socialLogin';
import { Links } from './link';

const Header = () => {
    const [userSidebarVisible, setUserSidebarVisible] = useState(false);
    const { user, logOut } = useUserContext();
    let router = useRouter();
    const [visible, setVisible] = useState(false);

    let searchParams = useSearchParams();
    let filter = searchParams.get('filter') || 'Article';

    return (
        <header className='h-full p-2 shadow '>
            <div className=' container mx-auto flex h-full items-center justify-between'>
                <div className='flex items-center gap-3'>
                    {/*header logo*/}
                    <Link
                        rel='noopener noreferrer'
                        href='/'
                        aria-label='Back to homepage'
                        className='flex items-center p-2'
                    >
                        <span className='text-xl font-bold uppercase  tracking-wide'>
                            Times2Read
                        </span>
                    </Link>
                    {/*header search box*/}
                    <div className='flex items-center md:space-x-4'>
                        <div className={'relative'}>
                            <form
                                onSubmit={(event) =>
                                    //print the value of the input field
                                    {
                                        event.preventDefault();
                                        let pushUrl =
                                            '/search?query=' + event.target['Search'].value;
                                        console.log(event.target['Search'].value);
                                        if (filter) {
                                            pushUrl += '&filter=' + filter;
                                        }
                                        router.push(pushUrl);
                                    }
                                }
                            >
                                <span className='    absolute inset-y-0 left-0 flex items-center pl-2'>
                                    <button
                                        type='submit'
                                        title='Search'
                                        className='p-1 focus:outline-none focus:ring'
                                    >
                                        <svg
                                            fill='currentColor'
                                            viewBox='0 0 512 512'
                                            className='h-4 w-4 text-gray-800'
                                        >
                                            <path d='M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z'></path>
                                        </svg>
                                    </button>
                                </span>
                                <input
                                    type='search'
                                    name='Search'
                                    placeholder='Search...'
                                    className='ArticleCard-2 w-32 rounded-md border bg-gray-100 py-2 pl-10 text-sm shadow focus:bg-gray-50 focus:outline-none  sm:w-auto'
                                />
                            </form>
                        </div>
                    </div>
                </div>
                <div className={'flex items-center justify-end gap-3 overflow-clip'}>
                    <div className={'flex items-center justify-end'}>
                        {user ? (
                            <Avatar
                                image={user?.image}
                                size='large'
                                shape='circle'
                                className={'hover:cursor-pointer'}
                                onClick={() => setUserSidebarVisible(true)}
                            />
                        ) : (
                            <SocialSignIn />
                        )}
                        <Sidebar
                            visible={userSidebarVisible}
                            position='right'
                            onHide={() => setUserSidebarVisible(false)}
                        >
                            <div
                                className={
                                    'flex h-full w-full flex-col items-center justify-between rounded-lg border-2 border-green-900 p-3'
                                }
                            >
                                <div className={'flex flex-col items-center justify-start'}>
                                    <Avatar image={user?.image} size='xlarge' shape='circle' />
                                    <div
                                        className={
                                            'mt-3 flex flex-col items-center justify-center hover:cursor-pointer hover:text-blue-800 hover:underline'
                                        }
                                    >
                                        {/*email*/}
                                        <div className={'font-semibold text-gray-800  '}>
                                            {user?.name}
                                        </div>
                                        <div
                                            className={
                                                'text-sm font-semibold text-gray-800 opacity-50'
                                            }
                                        >
                                            {user?.email}
                                        </div>
                                    </div>
                                    <div className={'my-6 w-full border-b-2 border-gray-200'}></div>
                                    {Links.map((link, index) => (
                                        <Link
                                            href={link.href}
                                            key={index}
                                            onClick={() => setUserSidebarVisible(false)}
                                            className={
                                                'my-1 text-xl font-semibold text-gray-800 hover:scale-105 hover:shadow'
                                            }
                                        >
                                            {link.name}
                                        </Link>
                                    ))}
                                </div>
                                {/*devider*/}

                                <div>
                                    {!!user ? (
                                        <Button
                                            type='button'
                                            className=' rounded bg-emerald-600 px-6 py-2 font-semibold text-gray-50 lg:block'
                                            onClick={() => logOut()}
                                        >
                                            Log Out
                                        </Button>
                                    ) : (
                                        <div>asdfd</div>
                                    )}
                                </div>
                            </div>
                        </Sidebar>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
