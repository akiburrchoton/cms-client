import { createBrowserRouter } from "react-router";
import App from "../App";
import Homepage from "../Pages/Homepage";
import LoginPage from "../Pages/LoginPage";
import RegisterPage from "../Pages/RegisterPage";
import AllCourses from "../Components/Other/AllCourses";
import AddCourse from "../Components/Other/AddCourse";
import MyEnrolledCourses from "../Components/Other/MyEnrolledCourses";
import PrivateRoute from "../Providers/PrivateRoute";
import ManageCourses from "../Components/Other/ManageCourses";
import EditCourse from "../Components/Other/EditCourse";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    // errorElement: <ErrorPage></ErrorPage>,

    children: [
      {
        index: true,
        path: "/",
        Component: Homepage,
      },
      {
        path: "/login",
        Component: LoginPage,
      },
      {
        path: "/register",
        Component: RegisterPage,
      },
      {
        path: "/courses",
        Component: AllCourses,
      },
      {
        path: "/add-course",
        element: (
          <PrivateRoute>
            <AddCourse></AddCourse>
          </PrivateRoute>
        ),
      },
      {
        path: "/manage-courses",
        element: (
          <PrivateRoute>
            <ManageCourses></ManageCourses>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-enrolled-courses",
        element: (
          <PrivateRoute>
            <MyEnrolledCourses></MyEnrolledCourses>
          </PrivateRoute>
        ),
      },
      {
        path: "/edit-course",
        element: (
          <PrivateRoute>
            <EditCourse></EditCourse>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
