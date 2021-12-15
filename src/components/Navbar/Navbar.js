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
                <Link to='/'><img className='logo' src={logo} alt='Logo'/></Link>
                <div className='searchbar'>
                    <input type='text' name='search' placeholder='Search for items...'/>
                    <img src={search} className='icon' alt='search'/>
                </div>
            </div>
            <div className='nav_options'>
                {true ? 
                    <>
                    <div className='nav_icon'>
                        <img src={account} className='icon' alt='profile'></img>
                        <Link to='/profile' className='nav_link'>Bienvenido</Link>
                    </div>
                    <div className='nav_icon'>
                        <img src={cart} className='icon' alt='cart'></img>
                        <Link to='/carrito' className='nav_link'>Carrito</Link>
                    </div>
                    <div className='nav_icon'>
                        <Link to='/logout' className='nav_button' id='logout_button'>Logout</Link>
                    </div>
                    </>
                    :
                    <>
                    <div className='nav_icon'>
                        <Link to='/login' className='nav_button' id='login_button'>Login</Link>
                    </div>
                    <div className='nav_icon'>
                    <Link to='/registrarse' className='nav_button' id='signin_button'>Registro</Link>
                    </div>
                    </>
                }
            </div>
        </div>
    )
}
