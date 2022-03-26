import React from 'react';
import './ShoppingCart.css';
import { MdOutlineAddShoppingCart } from "react-icons/md";

const ShoppingCart = ({ cart }) => {

    return (
        <div>
            <h1>second part</h1>
            <p>Selected: {cart.length}</p>
            {
                cart.map((item) => <h3 key={item.id}>{item.name}</h3>)
            }
            <button className='btn btn-success m-3 p-2 fw-bold border-0'>CHOOSE 1 FOR ME <MdOutlineAddShoppingCart /></button>
            <button className='btn btn-info m-3 p-2 fw-bold border-0 text-white'>CHOOSE AGAIN <MdOutlineAddShoppingCart /></button>
        </div>
    );
};

export default ShoppingCart;