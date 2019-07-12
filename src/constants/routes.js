import Home from 'views/Home';
import Resume from 'views/Resume';

const Routes = [
  { path: '/',
    title: 'Home',
    component: Home 
  },
  {
    path: '/resume',
    title: 'Resume',
    component: Resume,
  }
];

export default Routes;