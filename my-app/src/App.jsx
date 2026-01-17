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

export default function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productlisting" element={<ProductListing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/productdescription/:id" element={<ProductDescription />} />
      </Routes>

      <Footer/>
    </>
  )
}
