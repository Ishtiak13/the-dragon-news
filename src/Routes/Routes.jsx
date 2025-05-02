import { createBrowserRouter } from "react-router";
import Roots from "../layouts/Roots";
import Home from "../pages/Home/Home";
import About from "../pages/About";
import Career from "../pages/Career";
import MainLayout from "../pages/Home/components/CategoryNews";
import CategoryNews from "../pages/Home/components/CategoryNews";
import { BarLoader } from "react-spinners";




export const router = createBrowserRouter([
    {
        path:'/',
        Component: Roots,
        children:[
            {
                index: true,
                Component: Home,
            },
            {
                path:'/category/:id',
                Component: CategoryNews,
                loader: ()=>fetch('/news.json'),
                hydrateFallbackElement: <BarLoader></BarLoader>
            },
            {
                path: '/about',
                Component: About
            },
            {
                path: '/career',
                Component: Career
            }
        ]
    },
    
])