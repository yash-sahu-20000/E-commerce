import AdminLayout from "../layout/AdminLayout";
import Dashboard from "../pages/dashboard";
import Products from "../pages/Product/products";
import AddProduct from "../pages/Product/addProduct";
import AdminProtected from "./adminProtected";
import UpdateProduct from "../pages/Product/updateProduct";
import DeleteProduct from "../pages/Product/deleteProduct";
import HomeSlides from "../pages/HomeSlide/homeSlides";
import AddHomeSlides from "../pages/HomeSlide/addHomeSlide";
import UpdateHomeSlides from "../pages/HomeSlide/updateHomeSlide";
import DeleteHomeSlides from "../pages/HomeSlide/deleteHomeSlide";
import Users from "../pages/Users/user";
import DeleteUser from "../pages/Users/deleteUser/indes";
import Categories from "../pages/Category/categories";
import AddCategories from "../pages/Category/addCategory";
import DeleteCategory from "../pages/Category/deleteCategory";
import Orders from "../pages/order/orders";
import HeroSlides from "../pages/HeroSlide/heroSlides";
import AddHeroSlides from "../pages/HeroSlide/addHeroSlide";
import UpdateHeroSlides from "../pages/HeroSlide/updateHeroSlide";
import DeleteHeroSlides from "../pages/HeroSlide/deleteHeroSlide";



export const adminRoutes = {
  path: "/admin",
  element: (
    <AdminProtected>
      <AdminLayout />
    </AdminProtected>
  ),
  children: [
    { index: true, element: <Dashboard /> },
    { path: "products", element: <Products /> },
    { path: "products/add", element: <AddProduct /> },
    { path: "products/update/:id", element: <UpdateProduct /> },
    { path: "products/delete/:id", element: <DeleteProduct /> },
    { path: "homeslides", element: <HomeSlides /> },
    { path: "homeslides/add", element: <AddHomeSlides /> },
    { path: "homeslides/update/:id", element: <UpdateHomeSlides /> },
    { path: "homeslides/delete/:id", element: <DeleteHomeSlides /> },
    { path: "heroslides", element: <HeroSlides /> },
    { path: "heroslides/add", element: <AddHeroSlides /> },
    { path: "heroslides/update/:id", element: <UpdateHeroSlides /> },
    { path: "heroslides/delete/:id", element: <DeleteHeroSlides /> },
    { path: "users", element: <Users /> },
    { path: "users/delete/:id", element: <DeleteUser /> },
    { path: "categories", element: <Categories /> },
    { path: "categories/add", element: <AddCategories /> },
    { path: "categories/delete/:id", element: <DeleteCategory /> },
    { path: "orders", element : <Orders />}

  ],
};
