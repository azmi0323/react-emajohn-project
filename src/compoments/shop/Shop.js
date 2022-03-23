import React from 'react';
import Products from '../products/Products';
import './Shop.css'
const Shop = () => {
    return (
        <div className='shop '>
            <div className='shop-container'>
                <Products></Products>
            </div>
            <div>
                <h1>jabi</h1>
            </div>
        </div>
    );
};

export default Shop;