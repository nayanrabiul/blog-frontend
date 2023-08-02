import { AppMenuItem } from '@/✅✅✅ types/layout';

const menu_link: AppMenuItem[] = [
    {
        label: 'Home',
        items: [{ label: 'Main Site', icon: 'pi pi-fw pi-home', to: '/' }],
    },
    {
        label: 'Dashboard',
        items: [{ label: 'Admin Dashboard', icon: 'pi pi-fw pi-home', to: '/admin' }],
    },
    {
        label: 'Topics',
        items: [
            { label: 'List', icon: 'pi pi-fw pi-list', to: '/admin/list_topic' },
            { label: 'Create', icon: 'pi pi-fw pi-plus', to: '/admin/create_topic' },
        ],
    },
];

export default menu_link;
