import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Contact from "../Pages/Contact/Contact";
import Gallery from "../Pages/Gallery/Gallery";
import ServiceDetails from "../components/Service/ServiceDetails";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
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
          element: <ServiceDetails></ServiceDetails>,

        },
        {
            path: "/gallery",
            element: <Gallery></Gallery>,
        },
        {
            path: "/contact",
            element: <Contact></Contact>,
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
