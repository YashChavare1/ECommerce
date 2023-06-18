import ProductListingCard from "./ProductListingCard";
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
                    <ProductListingCard />
                </main>
            </center>
        </>
    );
}   
export default ProductListing;