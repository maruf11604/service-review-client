import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Detail from "../../Pages/Detail/Detail";
import Home from "../../Pages/Home/Home/Home";

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
        path: "/services/:id",
        element: <Detail></Detail>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
    ],
  },
]);

export default router;
