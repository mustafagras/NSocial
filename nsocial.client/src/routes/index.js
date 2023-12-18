import { lazy } from 'react';

const Error = lazy(() => import('../pages/Error'));

const coreRoutes = [
    {
        path: '*',
        title: 'Error',
        component: Error,
    }
]
const routes = [...coreRoutes];

export default routes;