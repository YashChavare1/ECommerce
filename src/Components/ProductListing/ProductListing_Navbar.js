import cartLogo from "../../images/cart icon.png";
import './ProductListing_Navbar.css';
import { useNavigate } from "react-router-dom";

function ProductListing_Navbar() {

    const nav = useNavigate();

    const cartClicked = () => {
        // alert("Add to Cart logo Clicked");
        nav("/shoppingcart");
    }

    return(
        <>
            <header id="header">
                <h1 id="heading">Products</h1>
                <img id="cartLogo" src={ cartLogo } alt="phone image" onClick={ cartClicked } />
            </header>
        </>
    );
}
export default ProductListing_Navbar;