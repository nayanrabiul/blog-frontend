'use client';
import { CrownFilled, SmileFilled, UserOutlined } from '@ant-design/icons';

import type { ProSettings } from '@ant-design/pro-components';
import { ProLayout, SettingDrawer } from '@ant-design/pro-components';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import './admin.css';

export default function Dashboard({ children }) {
    const [settings, setSetting] = useState<Partial<ProSettings> | undefined>({
        fixSiderbar: true,
        layout: 'mix',
        // navTheme: 'realDark',
    });
    console.log('🚀 ~ file: page.tsx:28 ~ settings:', settings);
    const [pathname, setPathname] = useState('/dashboard');

    let router = useRouter();
    return (
        <div
            id='test-pro-layout'
            style={{
                height: '100vh',
            }}
        >
            <ProLayout
                logo='https://avatars.githubusercontent.com/u/8186664?s=200&v=4'
                //@ts-ignore
                title={
                    <>
                        <Link href='/'>Times2Read</Link>
                    </>
                }
                route={{
                    path: '/',
                    routes: [
                        {
                            path: '/',
                            name: 'Main Site',
                            icon: <SmileFilled />,
                        },
                        {
                            path: '/dashboard',
                            name: 'OverView',
                            icon: <SmileFilled />,
                        },
                        {
                            name: 'Article',
                            path: '/dashboard/article',
                            icon: <CrownFilled />,
                            routes: [
                                {
                                    path: '/dashboard/edit-article',
                                    name: 'Edit Article',
                                    icon: <SmileFilled />,
                                },
                                {
                                    path: '/dashboard/my_articles',
                                    name: 'My Articles',
                                    icon: <SmileFilled />,
                                },
                            ],
                        },
                        {
                            name: 'Readiing List',
                            path: '/dashboard/reading_list',
                            icon: <CrownFilled />,
                        },
                    ],
                }}
                location={{
                    pathname,
                }}
                onMenuHeaderClick={(e) => console.log(e)}
                menuItemRender={(item, dom) => (
                    <a
                        onClick={() => {
                            setPathname(item.path || '/welcome');
                            router.push(item.path);
                        }}
                    >
                        {dom}
                    </a>
                )}
                avatarProps={{
                    icon: <UserOutlined />,
                }}
                {...settings}
            >
                {children}
            </ProLayout>
            <SettingDrawer
                pathname={pathname}
                getContainer={() => document.getElementById('test-pro-layout')}
                enableDarkTheme
                settings={settings}
                onSettingChange={(changeSetting) => {
                    setSetting(changeSetting);
                }}
                disableUrlParams
            />
        </div>
    );
}
