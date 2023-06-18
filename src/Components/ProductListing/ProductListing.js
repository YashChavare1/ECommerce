import ProductListing_Products from "./ProductListing_Products";
import ProductListing_Navbar from './ProductListing_Navbar';

function ProductListing() {

    return(
        <>
            <center>
                {/* navbar  */}
                <header>
                    <ProductListing_Navbar />
                </header>

                {/* Product Listing */}
                <main>
                    <ProductListing_Products />
                </main>
            </center>
        </>
    );
}   
export default ProductListing;