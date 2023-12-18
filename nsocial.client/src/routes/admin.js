import { lazy } from 'react';

const Home = lazy(() => import('../pages/Admin/Home'));
const Profile = lazy(() => import('../pages/Admin/Profile'));
const Settings = lazy(() => import('../pages/Admin/Settings'));

const coreRoutes = [
    {
        path: '/admin',
        title: 'Home',
        component: Home,
    },
    {
        path: '/admin/profile',
        title: 'Profile',
        component: Profile,
    },
    {
        path: '/admin/settings',
        title: 'Settings',
        component: Settings,
    }
]
const adminRoutes = [...coreRoutes];

export default adminRoutes;