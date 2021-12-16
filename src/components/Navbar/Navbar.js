<<<<<<< HEAD
import React, {useRef} from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
import logo from '../../img/logo.svg';


export default function Navbar() {
    const nav_options = useRef();
    const toggle = () => {
        if(nav_options.current.className === 'nav_options'){
            nav_options.current.className = 'nav_options visible'
        } else {
            nav_options.current.className = 'nav_options'
        }
    }
    return (
        <div className='navbar'>
            <Link to='/'><img className='logo' src={logo} alt='Logo'/></Link>
            <div className='searchbar'>
                <input type='text' name='search' placeholder='Search for items...'/>
                <i class="fas fa-search icon"></i>
            </div>
            <div className='nav_options' ref={nav_options}>
                {true ? 
                    <>
                    <div className='searchbar_hidden'>
                        <input type='text' name='search' placeholder='Search for items...'/>
                        <i class="fas fa-search icon"></i>
                    </div>
                    <div className='nav_icon'>
                        <i class="fas fa-user-alt icon" id="user_profile"></i>
                        <Link to='/profile' className='nav_link'>Bienvenido</Link>
                    </div>
                    <div className='nav_icon'>
                        <i class="fas fa-shopping-cart icon"></i>
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
=======
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useUserContext } from '../../context/userContext';
import { useShopCartContext } from '../../context/cartContext';
import CartDropdown from './components/CartDropdown';
import logo from '../../assets/img/logo.svg';
import cart from '../../assets/img/cart.png';
import crearProducto from '../../assets/img/registrar3.png';
import account from '../../assets/img/account.png';
import search from '../../assets/img/search.png';
import './Navbar.css';


export default function Navbar() {
    const { shopCart } = useShopCartContext();
    const { currentUser } = useUserContext();
    const [dropdownCart, setDropdownCart] = useState(true)

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
                            <img src={cart} className='icon' alt='cart'></img>
                            <span onClick={() => setDropdownCart(!dropdownCart)}>Carrito ({shopCart.length})</span>
                            {
                                dropdownCart && <CartDropdown />
                            }
                        </div>
                        <div className='nav_icon'>
                            <img src={account} className='icon' alt='profile'></img>
                            <Link to='/profile'>Bienvenido</Link>
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
>>>>>>> 6b3a6fabe4cfb21c01c73174f4209575b215d533
                    </>
                }
            </div>
            <button className='colapse_nav' onClick={toggle}><i class="fas fa-bars icon"></i></button>
        </div>
    )
}
