import { lazy } from 'react';

const Home = lazy(() => import('views/Home'));
const Projects = lazy(() => import('views/Projects'));
const Contact = lazy(() => import('views/Contact'));
const NoMatch = lazy(() => import('views/noMatch'));

export const Routes = [
  {
    title: 'Home',
    path: '/',
    component: Home,
  },
  {
    title: 'Projects',
    path: '/projects',
    component: Projects,
  },
  {
    title: 'Contact',
    path: '/contact',
    component: Contact,
  },
  {
    title: 'Error',
    component: NoMatch,
  },
];
