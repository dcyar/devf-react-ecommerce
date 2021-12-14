import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
import logo from '../../img/logo.svg';
import cart from '../../img/cart.png';
import account from '../../img/account.png';
import search from '../../img/search.png';


export default function Navbar() {
    return (
        <div className='navbar'>
            <div className='nav_search'>
                <img className='logo' src={logo} alt='Logo'/>
                <div className='searchbar'>
                    <input type='text' name='search' placeholder='Search for items...'/>
                    <img src={search} className='icon' alt='search'/>
                </div>
            </div>
            <div className='nav_options'>
                <div className='nav_icon'>
                    <img src={account} className='icon' alt='account'></img>
                    <Link to='/cuenta'>Cuenta</Link>
                </div>
                <div className='nav_icon'>
                    <img src={cart} className='icon' alt='cart'></img>
                    <Link to='/carrito'>Carrito</Link>
                </div>
            </div>
        </div>
    )
}
