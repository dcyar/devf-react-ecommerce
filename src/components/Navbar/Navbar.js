import React, {useRef} from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
import logo from '../../assets/img/logo.svg';


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
                <i className="fas fa-search icon"></i>
            </div>
            <div className='nav_options' ref={nav_options}>
                {true ? 
                    <>
                    <div className='searchbar_hidden'>
                        <input type='text' name='search' placeholder='Search for items...'/>
                        <i className="fas fa-search icon"></i>
                    </div>
                    <div className='nav_icon'>
                        <i className="fas fa-user-alt icon" id="user_profile"></i>
                        <Link to='/profile' className='nav_link'>Bienvenido</Link>
                    </div>
                    <div className='nav_icon'>
                        <i className="fas fa-shopping-cart icon"></i>
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
            <button className='colapse_nav' onClick={toggle}><i className="fas fa-bars icon"></i></button>
        </div>
    )
}
