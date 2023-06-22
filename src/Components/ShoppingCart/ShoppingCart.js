import ShoppingCartCard from "./ShoppingCartCard";
import ShoppingCartNavbar from "./ShoppingCartNavbar";

function ShoppingCart() {
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