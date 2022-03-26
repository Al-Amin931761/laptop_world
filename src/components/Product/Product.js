import React from 'react';
import './Product.css';
import { MdOutlineAddShoppingCart } from "react-icons/md";

const Product = ({ product, handleAddToCart }) => {
    const { name, price, picture } = product;
    return (
        <div className='product-container'>
            <img src={picture} alt="" />
            <h3>Name: {name}</h3>
            <h4>Price: {price}</h4>
            <button onClick={() => handleAddToCart(product)} className='add-to-cart-button'>ADD TO CART <MdOutlineAddShoppingCart /></button>
        </div>
    );
};

export default Product;