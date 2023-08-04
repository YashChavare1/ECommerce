import backLogo from '../images/back-arrow.png';
import ProductDetailCard from '../Components/ProductDetails/ProductDetailCard';
import '../Components/ProductDetails/ProductDetailCard.css';
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function ProductDetails(props) {

    const nav = useNavigate();
    const loc = useLocation();

    const btnClicked = () => {
        nav("/productlisting");
    }

    return(
        <>
            <div id="backBtn">
                <img src={backLogo} onClick={ btnClicked } />
            </div>
            <ProductDetailCard name={ loc.state.name } />
        </>
    );
}
export default ProductDetails;