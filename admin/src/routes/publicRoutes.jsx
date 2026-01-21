import AdminLogin from "../pages/adminLogin";
import AdminRegister from "../pages/adminRegister";


export const publicRoutes = [
  {
    path: "/admin/login",
    element: <AdminLogin />,
  },
  {
    path: "/admin/register",
    element: <AdminRegister />,
  },
];
