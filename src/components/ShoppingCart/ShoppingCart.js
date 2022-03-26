import React from 'react';
import './ShoppingCart.css'

const ShoppingCart = ({ cart }) => {

    let product = '';
    let name = '';
    for (product of cart) {
        name = name + product.name;
    }

    return (
        <div className='shopping-cart'>
            <h1>second part</h1>
            <p>Selected: {product.length}</p>
            <li>{name}</li>
            <button className='btn btn-success m-3 p-2 fw-bold border-0'>CHOOSE 1 FOR ME</button>
            <button className='btn btn-info m-3 p-2 fw-bold border-0 text-white'>CHOOSE AGAIN</button>
        </div>
    );
};

export default ShoppingCart;