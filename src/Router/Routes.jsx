import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Contact from "../Pages/Contact/Contact";
import Gallery from "../Pages/Gallery/Gallery";
import ServiceDetails from "../components/Service/ServiceDetails";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader: ()=> fetch('/servicesData.json')

        },
        {
          path: "/service/:id",
          element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,

        },
        {
            path: "/gallery",
            element: <PrivateRoute><Gallery></Gallery></PrivateRoute>,
        },
        {
            path: "/contact",
            element:<PrivateRoute><Contact></Contact></PrivateRoute>,
        },
        {
          path: "/login",
          element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
    },
      ],
    },
  ]);
  export default router
