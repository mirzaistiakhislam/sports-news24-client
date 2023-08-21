import { Link, Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Category from "../pages/Home/Category/Category";
import News from "../layouts/News";
import NewsDetailCard from "../pages/News/NewsDetail/NewsDetailCard";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Navigate to="/category/0"></Navigate>
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
            }
        ]
    },

    {
        path: '/',
        element: <News></News>,
        children: [
            {
                path: '/:id',
                element: <NewsDetailCard></NewsDetailCard>,
                loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`)
            }
        ]
    },
    {
        path: '*',
        element: <div className="text-white">Page not found!! Please go to <Link to='/'>Home</Link> Page</div>
    }
]);

export default router;