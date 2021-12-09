import React from 'react'
import './login.css'

export default function Login() {
    return (
        <div className='login-wrap'>
        <form className='login' >
        <h1>Acceso</h1>
        <p>¿No tienes una cuenta?<a /* class='App-link'*/ > Crea uno</a></p>
        
        <div className='login-contenedor'>
        <div className='login-contenedor-input'>\
        
            <label htmlFor='correo'></label>
                <input
                 type='text' 
                 id='correo' 
                 name='correo' 
                 placeholder='correo electrónico*'  
                 />
            </div>
            <div className='login-contenedor-input'>
            <label htmlFor='password'></label>
                <input
                 type='password' 
                 id='password' 
                 name='password' 
                 placeholder=' Tu contraseña*'  
                 />
            </div>
            <div className='login-footer'>
                
                <input className="check"
                 type='checkbox'
                 name='remember'
                 id='remember' 
                 />
                 <label htmlFor='remember' >Recuérdame</label>
                <a href="#">¿Se te olvidó la contraseña?</a>
            </div>
            <button className='btn' type='submit' >Acceso</button>


        </div>
           
        </form>
        </div>
    )
}

