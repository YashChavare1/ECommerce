import '../ProductDetails/ProductDetailCard.css';

function ProductDetailCard(props) {
    return(
        <>
            <div id="productDetails">
                <div id="leftImg">
                    <div id="img">
                        <img src="https://cdn.shopify.com/s/files/1/0632/3778/3783/products/BlueIphone-iphone-14-finish-select-202209-6-1inch-blue-removebg-preview.png?v=1679276344&width=1454&height=1056" alt="Product image" />
                    </div>
                </div>
                <div id="centerDescription">
                    <div id="productName">{ props.name }</div>
                    <div id="productDescription">
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus illo ullam, est eum accusamus magni soluta nostrum cupiditate, necessitatibus voluptates aut voluptate? Error earum sit ab accusantium et ut, alias ipsum voluptatum culpa consequatur.
                        </p>
                    </div>
                </div>
                <div id="rightDetails">
                    <div id="details">
                        <div id="price"><p>Price: </p> <p id="amount">$1190</p></div>
                        {/* <div id="qty">2</div> */}
                        <div id="btn">
                            <button>Buy Now</button>
                            <button>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default ProductDetailCard;