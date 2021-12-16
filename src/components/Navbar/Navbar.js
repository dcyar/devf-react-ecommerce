import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useUserContext } from '../../context/userContext';
import { useShopCartContext } from '../../context/cartContext';
import CartDropdown from './components/CartDropdown';
import logo from '../../assets/img/logo.svg';
import './Navbar.css';


export default function Navbar() {
    const { shopCart } = useShopCartContext();
    const { currentUser } = useUserContext();
    const [dropdownCart, setDropdownCart] = useState(true)
    const nav_options = useRef();
    const toggle = () => {
        if (nav_options.current.className === 'nav_options') {
            nav_options.current.className = 'nav_options visible'
        } else {
            nav_options.current.className = 'nav_options'
        }
    }
    return (
        <div className='navbar'>
            <Link to='/'><img className='logo' src={logo} alt='Logo' /></Link>
            <div className='searchbar'>
                <input type='text' name='search' placeholder='Search for items...' />
                <i className="fas fa-search icon"></i>
            </div>
            <div className='nav_options' ref={nav_options}>
                {currentUser ?
                    <>
                        <div className='searchbar_hidden'>
                            <input type='text' name='search' placeholder='Search for items...' />
                            <i className="fas fa-search icon"></i>
                        </div>
                        <div className='nav_icon'>
                            <i className="fas fa-user-alt icon" id="user_profile"></i>
                            <Link to='/profile' className='nav_link'>Bienvenido</Link>
                        </div>
                        <div className='nav_icon'>
                            <i className="fas fa-shopping-cart icon"></i>
                            <span onClick={() => setDropdownCart(!dropdownCart)} className='nav_link'>Carrito</span>
                            {
                                dropdownCart && <CartDropdown />
                            }
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
            <button className='colapse_nav' onClick={toggle}><i className="fas fa-bars icon"></i></button>
        </div>
    )
}
