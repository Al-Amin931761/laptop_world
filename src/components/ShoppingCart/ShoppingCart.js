import React, { useState } from 'react';
import './ShoppingCart.css';
import { MdOutlineAddShoppingCart } from "react-icons/md";

const ShoppingCart = ({ cart }) => {
    const [random, setRandom] = useState([]);

    // random item 
    const getRandItem = () => {
        const randomItem = cart[Math.floor(Math.random() * cart.length)]
        setRandom(randomItem);
    }

    return (
        <div>
            <h1>second part</h1>
            <h4>Selected: {cart.length}</h4>
            {
                cart.map((item) => <h5 key={item.id}><li>{item.name}</li></h5>)
            }
            <button onClick={getRandItem} className='btn btn-success m-3 p-2 fw-bold border-0'>CHOOSE 1 FOR ME <MdOutlineAddShoppingCart /></button>
            <h3>Lucky Product: {random.name}</h3>

            <button className='btn btn-success m-3 p-2 fw-bold border-0 text-white'>CHOOSE AGAIN <MdOutlineAddShoppingCart /></button>
        </div>
    );
};

export default ShoppingCart;