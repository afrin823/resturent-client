import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Layout/Main";
import Login from "../Pages/LogIn/Login";
import Signup from "../Pages/Signup/Signup";
import Bookservice from "../Pages/BookService/Bookservice";
import Bookings from "../Pages/Bookings/Bookings";
import PrivetRoute from "./PrivetRoute/PrivetRoute";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'signup',
          element: <Signup></Signup>
        },
        {
          path: 'book/:id',
          element: <Bookservice></Bookservice>,
          loader: ({params}) => fetch(`http://localhost:5000/foodkings/${params.id}`)
        },
        {
          path: 'bookings',
          element: <PrivetRoute>
            <Bookings></Bookings>
          </PrivetRoute>
        }
      ]
    },
  ]);



export default router;