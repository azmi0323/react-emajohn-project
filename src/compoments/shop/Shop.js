import React from 'react';
import Cart from '../cart/Cart';
import Products from '../products/Products';
import './Shop.css'
const Shop = () => {
    return (
        <div className='shop '>
            <div className='shop-container'>
                <Products></Products>
            </div>
            <div className='bg-danger'>
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Shop;