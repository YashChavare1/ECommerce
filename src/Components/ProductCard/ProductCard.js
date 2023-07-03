import { useState } from 'react';
import './ProductCard.css';
import { useNavigate } from 'react-router-dom';

function ProductCard(props) {

    const nav = useNavigate();
    // const[cart, setCart] = useState([]);

    const cart = [];

    // const addToCart = (event) => {
    //     alert("Add to Cart Button Pressed");
    //     event.stopPropagation();
    // }

    const addToCart = (event) => {
        let data = {url: props.url, name: props.name};
        cart.push(data);
        console.log(cart);
        event.stopPropagation();
    }

    const cardClicked = (name) => {
        nav("/productdetails", {state:{"name": name}});
    }

    return(
        <>
            <div id="Card" onClick={ () => cardClicked(props.name) }>
                <div id="Card-img">
                    <img src={ props.url } alt="iPhone 14plus" />
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