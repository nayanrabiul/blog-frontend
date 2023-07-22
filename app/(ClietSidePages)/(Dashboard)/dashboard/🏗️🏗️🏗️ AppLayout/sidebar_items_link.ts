import { AppMenuItem } from '@/✅✅✅ types/layout';

const  menu_link: AppMenuItem[] = [
    {
        label: 'Home',
        items: [{ label: 'Main Site', icon: 'pi pi-fw pi-home', to: '/' }],
    },
    {
        label: 'Dashboard',
        items: [{ label: 'My Dashboard', icon: 'pi pi-fw pi-home', to: '/dashboard' }],
    },
    {
        label: 'My Article',
        items: [{ label: 'List', icon: 'pi pi-fw pi-home', to: '/dashboard/my-articles' }],
    },
    {
        label: 'Reading List',
        items: [
            { label: 'Reading-List', icon: 'pi pi-fw pi-list', to: '/dashboard/reading_list' },
        ],
    },
];

export default menu_link;
