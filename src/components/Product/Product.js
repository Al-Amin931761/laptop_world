import React from 'react';
import './Product.css';
import { MdOutlineAddShoppingCart } from "react-icons/md";

const Product = (props) => {
    const { name, price, picture } = props.product;
    // console.log(props.product.id)
    return (
        <div className='product-container'>
            <img src={picture} alt="" />
            <h3>Name: {name}</h3>
            <h4>Price: {price}</h4>
            <button className='add-to-cart-button'>ADD TO CART <MdOutlineAddShoppingCart /></button>
        </div>
    );
};

export default Product;