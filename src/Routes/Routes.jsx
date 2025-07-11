import { createBrowserRouter } from "react-router";
import RootLayouts from "../Layouts/RootLayouts";
import Home from "../Pages/Home";
import MyFoodRequest from "../Pages/MyFoodRequest";
import AvailableFoods from "../Pages/AvailableFoods";
import ManageMyFoods from "../Pages/ManageMyFoods";
import AddFood from "../Pages/AddFood";
import NotFound from "../Pages/NotFound";
import AuthLayouts from "../Layouts/AuthLayouts";
import Login from "../Pages/Login";
import Register from "../Pages/Register";



const router = createBrowserRouter([
    {
        path:'/',
        Component:RootLayouts,
        children:[
            {
                index:true,
                Component:Home
            },

            {
                path:'/myFoodRequest',
                element:<MyFoodRequest></MyFoodRequest>
            },
            {
                path:'/availableFoods',
                Component:AvailableFoods
            },
            {
                path:'/manageMyFoods',
                element:<ManageMyFoods></ManageMyFoods>
            },

            {
                path:'/addFood',
                element:<AddFood></AddFood>
            }
        ]
    },


     {
        path: '/auth',
        element: <AuthLayouts></AuthLayouts>,
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
        path:'*',
        Component:NotFound
    }

    
])

export default router