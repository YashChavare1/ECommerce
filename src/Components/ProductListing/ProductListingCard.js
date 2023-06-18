import './ProductListingCard.css';
import ProductCard from "../ProductCard/ProductCard";

function ProductListing_Products() {
    return(
        <>
            <ProductCard id="productCard" name="Iphone 13 pro max" />
            <ProductCard id="productCard" name="Iphone 13" />
            <ProductCard id="productCard" name="Iphone 14 pro max" />
            <ProductCard id="productCard" name="Iphone 14" />
            <ProductCard id="productCard" name="Iphone 15 pro max" />
            <ProductCard id="productCard" name="Iphone 15" />
            <ProductCard id="productCard" name="Iphone 11" />
        </>
    );
}
export default ProductListing_Products;