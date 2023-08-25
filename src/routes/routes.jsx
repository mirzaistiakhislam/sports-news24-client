import { Link, Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Category from "../pages/Home/Category/Category";
import News from "../layouts/News";
import NewsDetailCard from "../pages/News/NewsDetail/NewsDetailCard";
import LoginLayouts from "../layouts/LoginLayouts";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import PrivateRoute from "./PrivateRoute";
import TermsAndConditions from "../pages/Login/TermsAndConditions/TermsAndConditions";

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
                element: <PrivateRoute><NewsDetailCard></NewsDetailCard></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`)
            }
        ]
    },
    {
        path: '/',
        element: <LoginLayouts></LoginLayouts>,
        children: [
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/termsandconditions',
                element: <TermsAndConditions></TermsAndConditions>
            }
        ]
    },
    {
        path: '*',
        element: <div className="">Page not found!! Please go to <Link to='/'>Home</Link> Page</div>
    }
]);

export default router;