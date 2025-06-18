import { createBrowserRouter } from "react-router";
import App from "../App";
import Homepage from "../Pages/Homepage";
import LoginPage from "../Pages/LoginPage";
import RegisterPage from "../Pages/RegisterPage";
import AllCourses from "../Pages/AllCourses";
import AddCourse from "../Pages/AddCourse";
import MyEnrolledCourses from "../Pages/MyEnrolledCourses";
import PrivateRoute from "../Providers/PrivateRoute";
import ManageCourses from "../Pages/ManageCourses";
import EditCourse from "../Pages/EditCourse";
import Loading from "../Components/Common/Loading";
import CourseDetail from "../Pages/CourseDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    // errorElement: <ErrorPage></ErrorPage>,

    children: [
      {
        index: true,
        path: "/",
        loader: () => fetch("http://localhost:3000/selectedCourses"),
        hydrateFallbackElement: <Loading></Loading>,
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
        loader: () => fetch("http://localhost:3000/courses"),
        hydrateFallbackElement: <Loading></Loading>,
        Component: AllCourses,
      },
      {
        path: "/course/abc",
        // loader: () => fetch("http://localhost:3000/courses"),
        // hydrateFallbackElement: <Loading></Loading>,
        Component: CourseDetail,
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
