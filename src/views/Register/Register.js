import React from "react";
import "./register.css";

export default function Register() {
    return (
        <div className="register-wrap">
            <form className="register">
                <h1>Registrarse</h1>
                <p>Por favor complete la siguiente informacion</p>

                <div className="register-contenedor">
                    <div className="register-contenedor-input">
                        <label htmlFor="name"></label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Tu nombre"
                        />
                    </div>
                    <div className="register-contenedor-input">
                        <label htmlFor="correo"></label>
                        <input
                            type="text"
                            id="correo"
                            name="correo"
                            placeholder="Tu correo electrónico*"
                        />
                    </div>
                    <div className="register-contenedor-input">
                        <label htmlFor="password"></label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Tu contraseña*"
                        />
                    </div>
                    <div className="register-contenedor-input">
                        <label htmlFor="password"></label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Confirmacion de contraseña*"
                        />
                    </div>
                    <div>
                        <p className="parrafo">Sus datos personales se utilizarán para respaldar su experiencia en este sitio web, para administrar el accseo a su cuenta y para otros fines descritos en nuestra política de privacidad </p>
                    </div>
                    <div className="register-footer">
                        <input
                            className="check"
                            type="checkbox"
                            name="remember"
                            id="remember"
                        />
                        <label htmlFor="remember">Estoy de acuerdo con los términos y política</label>
                        
                    </div>
                    <button className="btn" type="submit">
                        Registrarse
                    </button>
                   <div>
                       <spam className='cuenta'>¿Ya tienes una cuenta? <a href="#" >Acesso</a></spam>
                   </div>
    
                </div>
            </form>
        </div>
    );
}
