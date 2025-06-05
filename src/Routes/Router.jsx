import { createBrowserRouter } from "react-router";
import App from "../App";
import Homepage from "../Pages/Homepage";
import HomeSlider from "../Components/Other/HomeSlider";

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
    ],
  },
]);
