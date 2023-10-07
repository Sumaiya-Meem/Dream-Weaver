import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Contact from "../Pages/Contact/Contact";
import Gallery from "../Pages/Gallery/Gallery";
import ServiceDetails from "../components/Service/ServiceDetails";
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
      ],
    },
  ]);
  export default router
