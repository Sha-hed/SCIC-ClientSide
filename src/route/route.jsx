import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Login from "../shared/Login";
import SignUp from "../shared/SignUp";
import Main2 from "../layout/Main2";
import AddProduct from "../pages/Add/AddProduct";
import Home2 from "../pages/Home/Home2";
import CategoryWiseShow from "../components/CategoryWiseShow";
import PCard4 from "../components/PCard4";
import SearchProduct from "../components/SearchProduct";
import Admin from "../pages/Dashboard/Admin/Admin";
import ViewAllProduct from "../pages/Dashboard/Admin/ViewAllProduct";
import UpdateProduct from "../pages/Dashboard/Admin/UpdateProduct";
import CartProduct from "../pages/Dashboard/Admin/CartProduct";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Main2 />,
                children: [
                    {
                        index: true,
                        element: <Home2 />
                    },
                    {
                        path: '/addProduct',
                        element: <AddProduct />
                    },
                    {
                        path: '/categoryWiseShow/:category',
                        element: <CategoryWiseShow />,
                        loader: ({ params }) => fetch(`http://localhost:5000/singleCategoryData/${params.category}`)
                    },
                    {
                        path: '/singleProductLoad/:id',
                        element: <PCard4 />,
                        loader: ({ params }) => fetch(`http://localhost:5000/singlePro/${params.id}`)
                    },
                    {
                        path: '/searchProduct',
                        element: <SearchProduct />
                    },
                    {
                        path: '/cartProduct/:email',
                        element: <PrivateRoute><CartProduct /></PrivateRoute>,
                        loader: ({ params }) => fetch(`http://localhost:5000/getCartItem/${params.email}`)
                    }
                ]
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },
            {
                path: '/dashboard',
                element: <Admin />,
                children: [
                    {
                        index: true,
                        element: <ViewAllProduct />
                    },
                    {
                        path: 'add',
                        element: <AddProduct />
                    },
                    {
                        path: 'viewAll',
                        element: <ViewAllProduct />
                    },
                    {
                        path: 'updateProduct/:id',
                        element: <UpdateProduct />,
                        loader: ({ params }) => fetch(`http://localhost:5000/singlePro/${params.id}`)
                    }
                ]
            }
        ]
    },
]);
