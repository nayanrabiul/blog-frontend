'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useUserContext } from '@/context/user';
import MobileSideBar from '@/app/(MindWriters)/conponent/header_mobile';
import HeaderLogo from '@/app/(MindWriters)/conponent/header_logo';
import HeaderSearchBOx from '@/app/(MindWriters)/conponent/header_search_box';
import HeaderLinks from '@/app/(MindWriters)/conponent/header_links';
import UserAvatarPaner from '@/app/(MindWriters)/conponent/header_user_avatar';
import { Avatar } from 'primereact/avatar';

const Header = () => {
    const [visible, setVisible] = useState(false);
    const [userSidebarVisible, setUserSidebarVisible] = useState(false);

    const { user } = useUserContext();
    return (
        <header className='p-2 bg-gray-100 text-gray-800 fixed top-0 left-0 right-0 z-20 shadow-lg '>
            <div className='container flex justify-between items-center h-16 mx-auto'>
                <div className='flex items-center gap-3'>
                    <HeaderLogo />
                    <HeaderSearchBOx />
                </div>
                <div className={'hidden md:flex justify-end items-center gap-3 overflow-clip'}>
                    <HeaderLinks />
                    <div className={'flex justify-end items-center'}>
                        {user ? (
                                <Avatar
                                    image={user?.image}
                                    size='large'
                                    shape='circle'
                                    onClick={() => setUserSidebarVisible(true)}
                                />)
                            : null
                        }

                        <UserAvatarPaner
                            user={user}
                            size={'large'}
                            setUserSidebarVisible={setUserSidebarVisible}
                            userSidebarVisible={userSidebarVisible}
                        />
                    </div>
                </div>
                <MobileSideBar visible={visible} setVisible={setVisible} />
            </div>
        </header>
    );
};

export default Header;
