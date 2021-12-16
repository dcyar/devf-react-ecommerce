import React from 'react';
import { Link } from 'react-router-dom';
import { useUserContext } from '../../context/userContext';
import logo from '../../assets/img/logo.svg';
import cart from '../../assets/img/cart.png';
import crearProducto from '../../assets/img/registrar3.png';
import account from '../../assets/img/account.png';
import search from '../../assets/img/search.png';
import './Navbar.css';

export default function Navbar() {
    const { currentUser } = useUserContext();

    return (
        <div className='navbar'>
            <div className='nav_search'>
                <img className='logo' src={logo} alt='Logo' />
                <div className='searchbar'>
                    <input type='text' name='search' placeholder='Search for items...' />
                    <img src={search} className='icon' alt='search' />
                </div>
            </div>
            <div className='nav_options'>
                {currentUser ?
                    <>
                        <div className='nav_icon'>
                            <img src={account} className='icon' alt='profile' />
                            <Link to='/profile'>Bienvenido</Link>
                        </div>
                        <div className='nav_icon'>
                            <img src={cart} className='icon' alt='cart' />
                            <Link to='/carrito'>Carrito</Link>
                        </div>
                        <div className='nav_icon'>
                            <img src={crearProducto} className='icon' alt='icono de crear producto' />
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
