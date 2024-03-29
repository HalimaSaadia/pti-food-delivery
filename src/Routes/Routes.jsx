import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../Layout/Main";
import FoodProvider from "../Provider/FoodProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />, 
    children: [
        {
            path:"/",
            element: <FoodProvider><Home /></FoodProvider>
        }
    ]
  },
]);

export default router;
