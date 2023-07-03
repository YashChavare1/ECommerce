import './ProductListingCard.css';
import ProductCard from "../ProductCard/ProductCard";

function ProductListing_Products() {

    const url1 = "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1662655662/Croma%20Assets/Communication/Mobiles/Images/261979_oq7vjv.png/mxw_2048,f_auto";

    const url2 = "https://cdn.shopify.com/s/files/1/0632/3778/3783/products/BlueIphone-iphone-14-finish-select-202209-6-1inch-blue-removebg-preview.png?v=1679276344&width=1454&height=1056";

    return(
        <>
            <ProductCard id="productCard" url={ url1 } name="Iphone 13 pro max" />
            <ProductCard id="productCard" url={ url1 } name="Iphone 13" />
            <ProductCard id="productCard" url={ url2 } name="Iphone 14 pro max" />
            <ProductCard id="productCard" url={ url2 } name="Iphone 14" />
            <ProductCard id="productCard" url={ url2 } name="Iphone 15 pro max" />
            <ProductCard id="productCard" url={ url1 } name="Iphone 15" />
            <ProductCard id="productCard" url={ url2 } name="Iphone 11" />
        </>
    );
}
export default ProductListing_Products;