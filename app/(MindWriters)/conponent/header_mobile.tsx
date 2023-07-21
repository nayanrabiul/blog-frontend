import React from 'react';
import { Sidebar } from 'primereact/sidebar';
import UserAvatarPaner from '@/app/(MindWriters)/conponent/header_user_avatar';
import { useUserContext } from '@/context/user';
import HeaderLinks from '@/app/(MindWriters)/conponent/header_links';
import { Avatar } from 'primereact/avatar';
import { Button } from 'primereact/button';
import Link from 'next/link';

const MobileSideBar = ({ visible, setVisible }) => {
    let { user, logOut } = useUserContext();
    return (
        <>
            {/*this button toggles the sidebar*/}
                <button
                    title='Open menu'
                    type='button'
                    className='p-4 md:hidden'
                    onClick={() => setVisible(true)}
                >
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        className='w-6 h-6 text-gray-800'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M4 6h16M4 12h16M4 18h16'
                        ></path>
                    </svg>
                </button>
                <Sidebar visible={visible} position='right' onHide={() => setVisible(false)}>
                    <div
                        className={'h-full w-full rounded-lg p-3 flex flex-col justify-between items-center border-2 shadow-2xl'}>

                        {!!user?._id ? (
                                <div className={'flex flex-col justify-start items-center'}>
                                    <Avatar
                                        image={user?.image}
                                        size='xlarge'
                                        shape='circle'
                                    />
                                    <div
                                        className={'flex flex-col justify-center items-center mt-3 hover:text-blue-800 hover:underline hover:cursor-pointer'}>
                                        {/*email*/}
                                        <div className={'text-gray-800 font-semibold  '}>
                                            {user?.name}
                                        </div>
                                        <div className={'text-gray-800 font-semibold text-sm opacity-50'}>
                                            {user?.email}
                                        </div>

                                    </div>
                                    <div className={'w-full border-b-2 border-gray-200 my-6'}></div>
                                    <Link href={'/Dashboard'}
                                          className={'text-gray-800 font-semibold text-xl my-1 hover:scale-105 hover:shadow'}>📰
                                        Dashboard</Link>
                                    <Link
                                        href={'/create-post'}
                                        className={'text-gray-800 font-semibold text-xl my-1 hover:scale-105 hover:shadow'}>
                                        ➕ Create New Post
                                    </Link>
                                    <Link href={'/Dashboard'}
                                          className={'text-gray-800 font-semibold text-xl my-1 hover:scale-105 hover:shadow'}>📖
                                        Reading
                                        List</Link>
                                </div>
                            ) :
                            null
                        }

                        <HeaderLinks />

                        <div>
                            {!!user?._id ? (
                                <Button
                                    type='button'
                                    className=' px-6 py-2 font-semibold rounded lg:block bg-emerald-600 text-gray-50'
                                    onClick={() => logOut()}
                                >
                                    Log Out
                                </Button>
                            ) : (

                                <Link href={'/login'}><Button>Login</Button></Link>

                            )}
                        </div>


                    </div>
                </Sidebar>
        </>
    )
        ;
};

export default MobileSideBar;
