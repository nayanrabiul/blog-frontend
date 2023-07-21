import React from 'react';
import { Avatar } from 'primereact/avatar';
import { Sidebar } from 'primereact/sidebar';
import { useRouter } from 'next/navigation';
import HeaderLinks from '@/app/(MindWriters)/conponent/header_links';
import { Button } from 'primereact/button';
import { useUserContext } from '@/context/user';
import Link from 'next/link';
import { Links } from '@/app/(MindWriters)/conponent/link';
import SocialSignIn from '@/components/socialLogin';

const UserAvatarPaner = ({ user, setUserSidebarVisible, userSidebarVisible, size = '' }) => {
    const router = useRouter();
    const { logOut } = useUserContext();
    return (
        <div>
            {user ? (
                <>
                    {/*sidebar for desktop devices*/}
                    <Sidebar
                        visible={userSidebarVisible}
                        position='right'
                        onHide={() => setUserSidebarVisible(false)}
                    >
                        <div
                            className={'h-full w-full rounded-lg p-3 flex flex-col justify-between items-center border-2 border-green-900'}>

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
                                {Links.map((link, index) => (
                                    <Link
                                        href={link.href}
                                        key={index}
                                        onClick={() => setUserSidebarVisible(false)}
                                        className={'text-gray-800 font-semibold text-xl my-1 hover:scale-105 hover:shadow'}>
                                        {link.name}
                                    </Link>
                                ))}

                            </div>
                            {/*devider*/}


                            <div>
                                {!!user._id ? (
                                    <Button
                                        type='button'
                                        className=' px-6 py-2 font-semibold rounded lg:block bg-emerald-600 text-gray-50'
                                        onClick={() => logOut()}
                                    >
                                        Log Out
                                    </Button>
                                ) : <div>asdfd</div>}
                            </div>


                        </div>


                    </Sidebar>
                </>
            ) : (

                <SocialSignIn />
            )}
        </div>
    );
};

export default UserAvatarPaner;
