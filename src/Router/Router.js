import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import BooksCategory from "../Pages/BooksCategory/BooksCategory";
import Home from "../Pages/Home/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/category/:categoryId",
        element: <BooksCategory />,
      },
    ],
  },
]);
export default router;
