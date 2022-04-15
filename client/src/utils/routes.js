import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Profile from '../pages/Profile';
import CreatePersonal from '../pages/CreatePersonal';
import UpdatePersonal from '../pages/UpdatePersonal';
export const authOnlyRoutes = [
  {
    path: '/profile',
    component: Profile,
    navbarDisplay: true,
    navbarName: 'Profile'
  },
  {
    path: '/profile/create',
    component: CreatePersonal,
    navbarDisplay: false
  },
  {
    path: '/profile/update/:id',
    component: UpdatePersonal,
    navbarDisplay: false
  },
];
export const publicOnlyRoutes = [
  {
    path: '/signin',
    component: SignIn,
    navbarDisplay: true,
    navbarName: 'Sign In'
  },
  {
    path: '/signup',
    component: SignUp,
    navbarDisplay: true,
    navbarName: 'Sign Up'
  }
];
export const publicAndAuthRoutes = [
  
];