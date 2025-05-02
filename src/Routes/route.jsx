import { createBrowserRouter } from "react-router";
import Header from "../components/Header";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Pages/Home";
import Category from "../Pages/Category";
import Authentication from "../authentication/Authentication";
import Login from "../Pages/Login";
import Register from "../Pages/Register";



const router = createBrowserRouter(
    [
        {
            path: "/",
            Component: HomeLayout,
            hydrateFallbackElement: <p>Loading, please wait....</p>,
            loader: () => fetch('../categories.json'),
            children: [
                {
                    path: '/',
                    element: <Home></Home>,

                },
                {
                    path: '/category/:id',
                    element: <Category></Category>,
                    loader: () => fetch('../news.json'),
                }
            ]
        },
        {
            path: "/auth",
            element: <Authentication></Authentication>,
            children: [
                {
                    path: "/auth/login",
                    element: <Login></Login>
                },
                {
                    path: "/auth/register",
                    element: <Register></Register>
                }
            ]
        },
        {
            path: "/career"

        }

    ]
)

export default router;