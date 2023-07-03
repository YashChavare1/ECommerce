import { useState } from "react";
import ShoppingCartCard from "./ShoppingCartCard";
import ShoppingCartNavbar from "./ShoppingCartNavbar";

function ShoppingCart() {

    // use push() to insert data into array.
    const[cart, setCart] = useState([]);
    
    return(
        <>
            <ShoppingCartNavbar />
            <ShoppingCartCard />
            <ShoppingCartCard />
            <ShoppingCartCard />
        </>
    );
}
export default ShoppingCart;