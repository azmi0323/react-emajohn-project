import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css'
const Header = () => {
    return (
        <div className='header px-5'>
            <img src={logo} alt="" />
            <div className='nav'>
                <a href="#order">Order</a>
                <a href="3orderReview">Order Review</a>
                <a href="#manageInventory">Manage Inventory</a>
            </div>
        </div>
    );
};

export default Header;