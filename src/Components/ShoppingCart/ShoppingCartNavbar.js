import { useNavigate } from 'react-router-dom';
import backLogo from '../../images/back-arrow.png';
import cartLogo from '../../images/cart icon.png';
import './ShoppingCartNavbar.css';

function ShoppingCartNavbar() {

    const nav = useNavigate();

    const handleBackBtnClicked = () => {
        nav('/');
    }

    return(
        <>
            <div id="navbar">
                <img id='backLogo' src={ backLogo } alt='Back Button' onClick={ handleBackBtnClicked } />
                <img id='cartLogo' src={ cartLogo } alt='Cart Logo' />
            </div>
        </>
    );
}   
export default ShoppingCartNavbar;