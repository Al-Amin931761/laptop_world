import './Shop.css';
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import ShoppingCart from '../ShoppingCart/ShoppingCart';


const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    // console.log(cart);

    // console.log(products);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleAddToCart = (product) => {
        // console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className='shop-container'>
            <div className='all-products'>
                {
                    products.map(product => <Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>)
                }
            </div>
            <div>
                <div>
                    <ShoppingCart cart={cart}></ShoppingCart>
                </div>
            </div>
        </div>
    );
};

export default Shop;