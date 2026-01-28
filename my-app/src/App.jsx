import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import Footer from "./components/Footer"
import ProductListing from "./pages/ProductListing"
import ProductDescription from "./pages/ProductDescription"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Cart from "./pages/Cart"
import { Toaster } from "react-hot-toast";
import Checkout from "./pages/Checkout"
import Profile from "./pages/Profile"
import Orders from "./pages/Orders"
import OrderSuccess from "./pages/OrderSucess"
import HelpContact from "./pages/Help"


export default function App() {
  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          duration: 3000,
          className:"dark:bg-gray-800 dark:text-white bg-white text-black shadow-md",
        }}
      />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productlisting" element={<ProductListing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/productdescription/:id" element={<ProductDescription />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/order-success" element={<OrderSuccess />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/help-contact" element={<HelpContact />} />
      </Routes>

      <Footer/>
    </>
  )
}
