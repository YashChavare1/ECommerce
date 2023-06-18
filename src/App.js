import ProductDetails from "./Components/ProductDetails/ProductDetails";
import ProductListing from "./Components/ProductListing/ProductListing";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={ <ProductListing /> } />
            <Route path="/productdetails" element={ <ProductDetails /> } />
            <Route path="*" element={ <Navigate to="/" /> } />
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
