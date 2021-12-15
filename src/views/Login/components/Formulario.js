import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import useForm from "../../../hooks/useForm"
import axios from 'axios'
// import { useUserContext } from '../../../context/userContext'
import swal from 'sweetalert2';


export default function Formulario() {

    const history=useHistory();
    // const context=useUserContext();

    const login =(datos)=>{
        axios
        .post ("https://ecomerce-master.herokuapp.com/api/v1/login", datos)
        .then(response=>{
            window.localStorage.setItem('token', response.data.token)

            // const config = {
            //     headers: {
            //       Authorization: `JWT ${response.data.token}`,
            //     },
            //   };
            //   axios
            //     .get("https://ecomerce-master.herokuapp.com/api/v1/user/me", config)
            //     .then((response) => {
            //       if (response.status === 200) {
            //         context.setUsuarioActual(response.data);
            //       }
            //     });

            history.push("/");
        }).catch((error)=>{
            console.log(error);
            swal.fire({
                title: "El correo y/o contraseña no es correcta, vuelva a intentarlo.",
                icon: "error",
                timer: "2000",
                showConfirmButton: false,
            });

            //aca se podria poner notificacion(hubo un errro)
        })
    }
    const {inputs, handleInput,handleSubmit }=useForm(login,{})
    return (
        <div>
            <form onSubmit={handleSubmit} className='login' >
            <h1>Acceso</h1>
            <p>¿No tienes una cuenta?<Link to='/registrarse' > Crea uno</Link></p>
        
            <div className='login-contenedor'>
            <div className='login-contenedor-input'>
        
                <label htmlFor='email'></label>
                    <input
                     type='text' 
                     id='email' 
                     name='email' 
                     placeholder='correo electrónico*'
                     onChange={handleInput}
                     value={inputs.email}  
                     />
                </div>
                <div className='login-contenedor-input'>
                <label htmlFor='password'></label>
                    <input
                     type='password' 
                     id='password' 
                     name='password' 
                     placeholder=' Tu contraseña*' 
                     onChange={handleInput}
                     value={inputs.password}  
                     />
                </div>
                <div className='login-footer'>
                
                    <input className="check"
                     type='checkbox'
                     name='remember'
                     id='remember' 
                     
                     />
                     <label htmlFor='remember' >Recuérdame</label>
                    <Link to='/'>¿Se te olvidó la contraseña?</Link>
                </div>
                <button className='btn' type='submit' >Acceso</button>


            </div>
           
            </form>
        </div>
    )
}
