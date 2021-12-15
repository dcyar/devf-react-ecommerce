import React from 'react'
import { Link } from 'react-router-dom'
import useForm from '../../../hooks/useForm'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert2';

export default function FormularioRegister() {

    const history = useHistory()
    const registerUser=(datos)=>{
       //se hace post a la api para registrar al usuario
       axios
          .post("https://ecomerce-master.herokuapp.com/api/v1/signup", datos)
          .then(response =>{
              if(response.status===200){
                  //aca se puede poner una  notificacion(sweetalert2)
                  swal.fire({
                    title: "Registro exitoso",
                    icon: "success",
                    timer: "2000",
                    showConfirmButton: false,
                });

                  //por ahora solo se redireccionara a login
                  history.push("/login")

              }else{
                
                  //tener una notificaion de cual es el error(xq no se registro)
              }
           console.log(response.data);
       }).catch(error=>{
           console.log(error);
           swal.fire({
            title: "Complete todos los campos",
            icon: "warning",
            timer: "2000",
            showConfirmButton: false,
        });
       })
    }
    const {inputs, handleInput, handleSubmit}=useForm(registerUser, {})
    return (
        <div>
             <form onSubmit={handleSubmit} className="register">
                <h1>Registrarse</h1>
                <p>Por favor complete la siguiente informacion</p>

                <div className="register-contenedor">
                    <div className="register-contenedor-input">
                        <label htmlFor="first_name"></label>
                        <input
                            type="text"
                            id="first_name"
                            name="first_name"
                            placeholder="Tu nombre"
                            onChange={handleInput}
                            value={inputs.first_name}
                        />
                    </div>
                    <div className="register-contenedor-input">
                        <label htmlFor="last_name"></label>
                        <input
                            type="text"
                            id="last_name"
                            name="last_name"
                            placeholder="Tu apellido"
                            onChange={handleInput}
                            value={inputs.last_name}
                        />
                    </div>
                    {/* <div className="register-contenedor-input">
                        <label htmlFor="birth_date"></label>
                        <input
                            type="date"
                            id="birth_date"
                            max="10"
                            name="birth_date"
                            onChange={handleInput}
                            value={inputs.birth_date}
                        />
                    </div> */}
                    <div className="register-contenedor-input">
                        <label htmlFor="gender"></label>
                        <input
                            type="text"
                            id="gender"
                            name="gender"
                            placeholder="Tu genero"
                            onChange={handleInput}
                            value={inputs.gender}
                        />
                    </div>
                    <div className="register-contenedor-input">
                        <label htmlFor="email"></label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            placeholder="Tu correo electrónico*"
                            onChange={handleInput}
                            value={inputs.email}
                        />
                    </div>
                    <div className="register-contenedor-input">
                        <label htmlFor="password"></label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Tu contraseña*"
                            onChange={handleInput}
                            value={inputs.password}
                        />
                    </div>
                    <div className="register-contenedor-input">
                        <label htmlFor="password"></label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Confirmacion de contraseña*"
                            onChange={handleInput}
                            value={inputs.password}
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
                    <button  className="btn-register" type="submit">
                        Registrarse
                    </button>
                   <div>
                       <spam className='cuenta'>¿Ya tienes una cuenta? <Link to="/login">Acesso</Link></spam>
                   </div>
    
                </div>
            </form>
        </div>
    )
}
