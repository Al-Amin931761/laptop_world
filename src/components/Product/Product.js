import React from 'react';
import './Product.css';

const Product = (props) => {
    const { name, price, picture } = props.product;
    // console.log(props.product.id)
    return (
        <div className='product-container'>
            <img src={picture} alt="" />
            <h3>Name: {name}</h3>
            <h4>Price: {price}</h4>
        </div>
    );
};

export default Product;