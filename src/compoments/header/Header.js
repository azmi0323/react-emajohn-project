import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import './Header.css'
const Header = () => {
    return (
        <div className='header px-5'>
            <img src={logo} alt="" />
            <div className='nav'>
                <Link to='/home'>Home</Link>
                <Link to='/order'>Order</Link>
                <Link to='/orderReview'>Order Review</Link>
                <Link to='/manageInventory'>Manage Inventory</Link>
                
            </div>
        </div>
    );
};

export default Header;