import React from 'react';
import { useUserContext } from '../../context/userContext';
import withProtection from '../../utils/withProtection';
import { Link } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import perfil from '../../assets/img/perfil.png'
import './profile.css'

const Profile = () => {
    const { currentUser } = useUserContext();

    return (
        <>
            {
                !currentUser
                    ? <Loading />
                    : <div className='contenedorPerfil'>
                        <div className='contenedorPerfil__foto'>
                            <h1>Perfil</h1>
                            <img src={perfil} alt='Perfil de usuario' />
                        </div>
                        <div className='contenedorPerfil__contenido'>
                            <div className='contenedorPerfil__nombre'>
                                <h3>Nombre</h3>
                                <p> {currentUser.first_name} {currentUser.last_name} </p>
                            </div>
                            <div className='contenedorPerfil__fechaNacimiento'>
                                <h3>Fecha de nacimiento</h3>
                                <p> {currentUser.birth_date} </p>
                            </div>
                            <div className='contenedorPerfil__genero'>
                                <h3>Género</h3>
                                <p> {currentUser.gender === 'M' ? <span>Masculino</span> : <span>Femenino</span>} </p>
                            </div>
                            <div className='contenedorPerfil__email'>
                                <h3>Email</h3>
                                <p> {currentUser.email} </p>
                            </div>
                            {
                                currentUser.role === 'ADMIN' && <div className='contenedorPerfil__nombre'>
                                    <Link to="/crear-producto" >

                                        <button className='contenedorPerfil__boton'>Gestionar productos</button>
                                    </Link>
                                </div>
                            }
                        </div>
                    </div>
            }

        </>
    )
}

export default withProtection(Profile, "AMBOS");