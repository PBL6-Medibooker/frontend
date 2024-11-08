import Blog from '../pages/Blog';
import BlogInfo from '../pages/BlogInfo';
import CreateBlog from '../pages/CreateBlog';
import Forum from '../pages/Forum';

const publicRoutes = [
    { path: '/', component: Blog },
    { path: '/forum', component: Forum },
    { path: '/create-blog', component: CreateBlog },
    { path: '/bloginfo/:id', component: BlogInfo },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
