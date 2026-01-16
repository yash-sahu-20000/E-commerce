import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import About from "./pages/About"
import Footer from "./components/Footer"
import ProductListing from "./pages/ProductListing"
import ProductDescription from "./pages/ProductDescription"

export default function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productlisting" element={<ProductListing />} />
        <Route path="/productdescription" element={<ProductDescription />} />
      </Routes>

      <Footer/>
    </>
  )
}
