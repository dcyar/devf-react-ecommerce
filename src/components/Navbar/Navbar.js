import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
import logo from '../../img/logo.svg';
import cart from '../../img/cart.png';
import crearProducto from '../../assets/img/registrar3.png';
import account from '../../img/account.png';
import search from '../../img/search.png';


export default function Navbar() {
    const token = window.localStorage.getItem('token');
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
                {token ? 
                    <>
                    <div className='nav_icon'>
                        <img src={account} className='icon' alt='profile'></img>
                        <Link to='/profile'>Bienvenido</Link>
                    </div>
                    <div className='nav_icon'>
                        <img src={cart} className='icon' alt='cart'></img>
                        <Link to='/carrito'>Carrito</Link>
                    </div>
                    <div className='nav_icon'>
                        <img src={crearProducto} className='icon'></img>
                        <Link to='/crear-producto'>Crear producto</Link>
                    </div>
                    </>
                    :
                    <>
                    <div className='nav_icon'>
                        <Link to='/login'>Login</Link>
                    </div>
                    <div className='nav_icon'>
                    <Link to='/registrarse'>Registro</Link>
                    </div>
                    </>
                }
            </div>
        </div>
    )
}
