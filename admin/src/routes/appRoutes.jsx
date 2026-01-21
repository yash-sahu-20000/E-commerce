import { adminRoutes } from "./adminRoutes";
import { publicRoutes } from "./publicRoutes";

const AppRoutes = [
  ...publicRoutes,
  adminRoutes,
];

export default AppRoutes;
