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
import PrivateRoute from "../Provider/PrivateRoute";



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
                element:<PrivateRoute>
                    <MyFoodRequest></MyFoodRequest>
                </PrivateRoute>
            },
            {
                path:'/availableFoods',
                Component:AvailableFoods
            },
            {
                path:'/manageMyFoods',
                element:<PrivateRoute>
                    <ManageMyFoods></ManageMyFoods>
                </PrivateRoute>
            },

            {
                path:'/addFood',
                element:<PrivateRoute>
                    <AddFood></AddFood>
                </PrivateRoute>
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