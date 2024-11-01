import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import CartPage from "../pages/CartPage";
import CheckoutPage from "../pages/CheckoutPage";
import SingleBook from "../pages/SingleBook";
import PrivateRoutes from "./PrivateRoutes";
import Order from "../pages/Order";
import AdminRoutes from "./AdminRoutes";
import AdminLogin from "../components/AdminLogin";
import Dashboard from "../pages/DashBoard";
import DashboardLayout from "../pages/layouts/DashBoardLayout";
import AddBook from "../pages/AddBook";
import UpdateBook from "../pages/UpdateBook";
import ManageBooks from "../pages/ManageBooks";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <h1>About</h1>,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/checkout",
        element: (
          <PrivateRoutes>
            <CheckoutPage />
          </PrivateRoutes>
        ),
      },
      {
        path: "/books/:id",
        element: <SingleBook />,
      },
      {
        path: "/order",
        element: (
          <PrivateRoutes>
            <Order />,
          </PrivateRoutes>
        ),
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLogin />,
  },
  {
    path: "/dashboard",
    element: (
      <AdminRoutes>
        <DashboardLayout />
      </AdminRoutes>
    ),
    children: [
      {
        path: "add-new-book",
        element: (
          <AdminRoutes>
            <AddBook />
          </AdminRoutes>
        ),
      },
      {
        path: "edit-book/:id",
        element: (
          <AdminRoutes>
            <UpdateBook />
          </AdminRoutes>
        ),
      },
      {
        path: "",
        element: (
          <AdminRoutes>
            <Dashboard />
          </AdminRoutes>
        ),
      },
      {
        path: "manage-books",
        element: (
          <AdminRoutes>
            <ManageBooks />
          </AdminRoutes>
        ),
      },
    ],
  },
]);
