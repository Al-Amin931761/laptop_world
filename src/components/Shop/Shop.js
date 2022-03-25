import './Shop.css';
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';


const Shop = () => {
    const [products, setProducts] = useState([]);
    // console.log(products);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='shop-container'>
            <div className='all-products'>
                {
                    products.map(product => <Product key={product.id} product={product}></Product>)
                }
            </div>
            <div>
                <h1>second part</h1>
            </div>
        </div>
    );
};

export default Shop;