import ProductDetails from "./Pages/ProductDetails";
import ProductListing from "./Pages/ProductListing";
import ShoppingCart from "./Components/ShoppingCart/ShoppingCart";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={ <ProductListing /> } />
            <Route path="/productdetails" element={ <ProductDetails /> } />
            <Route path="/shoppingcart" element={ <ShoppingCart /> } />
            <Route path="*" element={ <Navigate to="/" /> } />
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;