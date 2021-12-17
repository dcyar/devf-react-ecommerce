import React, { useState } from 'react'
import swal from 'sweetalert2';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom';
import useForm from '../../../hooks/useForm'

export default function FormularioRegister() {
    const history = useHistory()
    const [confirm, setConfirm] = useState(false)

    const registerUser = (datos) => {
        axios
            .post(`${process.env.REACT_APP_API_URL}/signup`, datos)
            .then(response => {
                if (response.status === 200) {
                    swal.fire({
                        title: "Registro exitoso",
                        icon: "success",
                        timer: "2000",
                        showConfirmButton: false,
                        didClose: () => history.push('/login')
                    });
                } else {
                    throw new Error('Algo ha fallado')
                }
            }).catch(error => {
                swal.fire({
                    title: "Complete todos los campos",
                    icon: "warning",
                    timer: "2000",
                    showConfirmButton: false,
                });
            })
    }

    const { inputs, handleInput, handleSubmit } = useForm(registerUser, {})

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
                            placeholder="Tú nombre"
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
                            placeholder="Tú apellido"
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
                            placeholder="Tú género: M/F"
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
                            placeholder="Tú correo electrónico*"
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
                            placeholder="Tú contraseña*"
                            onChange={handleInput}
                            value={inputs.password}
                        />
                    </div>
                    <div className="register-contenedor-input">
                        <label htmlFor="password"></label>
                        <input
                            type="password"
                            id="passwordConfirmation"
                            name="password"
                            placeholder="Confirmación de contraseña*"
                            onChange={handleInput}
                            value={inputs.password}
                        />
                    </div>
                    <div className="register-contenedor-select">
                        <select className="role-select"
                            id="role"
                            name="role"
                            onChange={handleInput}
                        >
                            <option selected disable>Elija su usuario</option>
                            <option value={inputs.role}>CUSTOMER</option>
                            <option value={inputs.role}>ADMIN</option>
                        </select>
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
                            onChange={() => setConfirm(!confirm)}
                        />
                        <label htmlFor="remember">Estoy de acuerdo con los términos y política</label>
                    </div>
                    <button className="btn-register" type="submit" disabled={!confirm}>
                        Registrarse
                    </button>
                    <div>
                        <span className='cuenta'>¿Ya tienes una cuenta? <Link to="/login">Acesso</Link></span>
                    </div>
                </div>
            </form>
        </div>
    )
}
