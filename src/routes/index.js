import HomePage from '../container/home/HomePage';
import MovieInfo from '../container/home/MovieInfo';
const routeHome = [
    {
        exact: true,
        path: '/',
        component: HomePage
    },
    {
        exact: false,
        path: '/movieinfo',
        component: MovieInfo
    }
];

export { routeHome };