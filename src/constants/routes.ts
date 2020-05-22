import { lazy } from 'react';

const Home = lazy(() => import('views/home'));
const Projects = lazy(() => import('views/projects'));
const Error = lazy(() => import('views/other/error'));

export default [
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
    title: 'Error',
    component: Error,
  },
];
