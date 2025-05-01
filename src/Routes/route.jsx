import { createBrowserRouter } from "react-router";
import Header from "../components/Header";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Pages/Home";
import Category from "../Pages/Category";



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
            path: "/about",
            element: <h2>I am about</h2>
        },
        {
            path: "/career"

        }

    ]
)

export default router;