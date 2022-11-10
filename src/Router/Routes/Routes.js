import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import MyReviews from "../../MyReviews/MyReviews";
import AllService from "../../Pages/AllService/AllService";
import Detail from "../../Pages/Detail/Detail";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Signup from "../../Pages/Login/Signup/Signup";
import ReviewItem from "../../Pages/ReviewItem/ReviewItem";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
        element: (
          <PrivateRoute>
            {" "}
            <AllService></AllService>
          </PrivateRoute>
        ),
        loader: () => fetch(`http://localhost:5000/allservices`),
      },
      {
        path: "/services/:id",
        element: (
          <PrivateRoute>
            <Detail></Detail>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/review",
        element: (
          <PrivateRoute>
            <ReviewItem></ReviewItem>
          </PrivateRoute>
        ),
      },
      {
        path: "/myreview",
        element: <MyReviews></MyReviews>,
      },
    ],
  },
]);

export default router;
