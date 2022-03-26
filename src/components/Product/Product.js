import React from 'react';
import './Product.css';
import { MdOutlineAddShoppingCart } from "react-icons/md";

const Product = ({ product, handleAddToCart }) => {
    const { name, price, picture } = product;
    return (
        <div className='border border-danger bg-success p-2 text-dark bg-opacity-10 m-3 product-container shadow p-3 mb-5 rounded'>
            <img src={picture} alt="" />
            <h4>Name: {name}</h4>
            <h4>Price: ${price}</h4>
            <button onClick={() => handleAddToCart(product)} className='btn btn-dark m-3 p-2 fw-bold border-0 text-white'>ADD TO CART <MdOutlineAddShoppingCart /></button>
        </div>
    );
};

export default Product;