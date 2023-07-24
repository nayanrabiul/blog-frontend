'use client';
/* eslint-disable @next/next/no-img-element */

import React, { useContext } from 'react';
import AppMenu_item_creator from './AppMenu_item_creator';
import { LayoutContext } from '@/app/(ClietSidePages)/(Dashboard)/context/layoutcontext';
import { MenuProvider } from '@/app/(ClietSidePages)/(Dashboard)/context/menucontext';
import menu_link from '@/app/(ClietSidePages)/(Dashboard)/admin/🏗️🏗️🏗️ AppLayout/sidebar_items_link';
const AppMenu = () => {
    const { layoutConfig } = useContext(LayoutContext);
    return (
        <MenuProvider>
            <ul className='layout-menu'>
                {menu_link.map((item, i) => {
                    return !item?.seperator ? (
                        <AppMenu_item_creator item={item} root={true} index={i} key={item.label} />
                    ) : (
                        <li className='menu-separator'></li>
                    );
                })}
            </ul>
        </MenuProvider>
    );
};

export default AppMenu;
