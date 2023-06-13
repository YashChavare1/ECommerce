import './ProductCard.css';

function ProductCard(props) {

    const addToCart = () => {
        alert("Button Pressed");
    }

    return(
        <>
            <div id="Card">
                <div id="Card-img">
                    <img src="https://cdn.shopify.com/s/files/1/0632/3778/3783/products/BlueIphone-iphone-14-finish-select-202209-6-1inch-blue-removebg-preview.png?v=1679276344&width=1454&height=1056" alt="iPhone 14plus" />
                </div>
                <div id="Card-productName">
                    {/* <p>iphone 14plus</p> */}
                    <p>{props.name}</p>
                </div>
                <div id="Card-cartBtn">
                    <button onClick={ addToCart }>Add to Cart</button>
                </div>
            </div>
        </>
    );
}
export default ProductCard;