import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import About from "./pages/About"
import Footer from "./components/Footer"
import ProductListing from "./pages/ProductListing"
import ProductDescription from "./pages/ProductDescription"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Cart from "./pages/Cart"
import VerifyOTP from "./pages/VerifyOTP"
import { Toaster } from "react-hot-toast";
import Checkout from "./pages/Checkout"
import Profile from "./pages/Profile"


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
        <Route path="/verifyotp" element={<VerifyOTP />} />
        <Route path="/productdescription/:id" element={<ProductDescription />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

      <Footer/>
    </>
  )
}
