import deleteLogo from "../../images/delete icon.png";
import './ShoppingCartCard.css';

function ShoppingCartCard() {
    return(
        <>
            <div id="card">
                <div id="cartImg">
                    <img src="https://cdn.shopify.com/s/files/1/0632/3778/3783/products/BlueIphone-iphone-14-finish-select-202209-6-1inch-blue-removebg-preview.png?v=1679276344&width=1454&height=1056" alt="iphone" />                
                </div>
                <div id="cartName">
                    <p>Iphone 14 Pro</p>
                </div>
                <div id="cartPrice">
                    <p>$1199</p>
                </div>
                <div id="cartDeleteLogo">
                    <img src={ deleteLogo } alt="delete logo" />
                </div>
            </div>
        </>
    );
}
export default ShoppingCartCard;