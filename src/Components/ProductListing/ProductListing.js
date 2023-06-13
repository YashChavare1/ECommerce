import ProductCard from "./ProductCard";
import './ProductListing.css';
import cartLogo from "../../images/cart icon.png";

function ProductListing() {

    const cartClicked = () => {
        alert("Cart Clicked");
    }

    return(
        <>
            <center> 
                <header id="header">
                    <h1 id="heading">Products</h1>
                    <img id="cartLogo" src={ cartLogo } alt="phone image" onClick={ cartClicked } />
                </header>

                <main>
                <ProductCard id="productCard" name="Iphone 13 pro max" />
                <ProductCard id="productCard" name="Iphone 13 pro max" />
                <ProductCard id="productCard" name="Iphone 13 pro max" />
                <ProductCard id="productCard" name="Iphone 13 pro max" />
                <ProductCard id="productCard" name="Iphone 13 pro max" />
                <ProductCard id="productCard" name="Iphone 13 pro max" />
                <ProductCard id="productCard" name="Iphone 13 pro max" />
                <ProductCard id="productCard" name="Iphone 13 pro max" />
                <ProductCard id="productCard" name="Iphone 13 pro max" />
                </main>

            </center>
        </>
    );
}   
export default ProductListing;