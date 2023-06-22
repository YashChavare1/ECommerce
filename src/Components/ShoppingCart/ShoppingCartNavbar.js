import backLogo from '../../images/back-arrow.png';
import cartLogo from '../../images/cart icon.png';
import './ShoppingCartNavbar.css';

function ShoppingCartNavbar() {
    return(
        <>
            <div id="navbar">
                <img id='backLogo' src={ backLogo } alt='Back Button' />
                {/* <p id='text'> Shopping Cart </p> */}
                <img id='cartLogo' src={ cartLogo } alt='Cart Logo' />
            </div>
        </>
    );
}   
export default ShoppingCartNavbar;