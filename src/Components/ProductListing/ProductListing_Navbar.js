import cartLogo from "../../images/cart icon.png";
import './ProductListing_Navbar.css';

function ProductListing_Navbar() {

    const cartClicked = () => {
        alert("Add to Cart logo Clicked");
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