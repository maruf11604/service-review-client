import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AllService from "../../Pages/AllService/AllService";
import Detail from "../../Pages/Detail/Detail";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allservice",
        element: <AllService></AllService>,
        loader: () => fetch(`http://localhost:5000/allservices`),
      },
      {
        path: "/services/:id",
        element: <Detail></Detail>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

export default router;
