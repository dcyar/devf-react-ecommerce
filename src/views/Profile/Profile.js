import React from 'react';
import { useShopCartContext } from '../../context/cartContext';
import { useUserContext } from '../../context/userContext';
import withProtection from '../../utils/withProtection';
import perfil from '../../assets/img/perfil.png'
import './profile.css'

const Profile = () => {
    const { currentUser } = useUserContext();
    const { handleAddItemToShopCart, handleRemoveItemFromShopCart } = useShopCartContext()

    const handleAddItem = () => {
        handleAddItemToShopCart({
            id: Math.floor(Math.random() * 100 + 1),
            name: "Producto 1",
            price: 123
        });
    }

    const handleRemoveItem = () => {
        handleRemoveItemFromShopCart(31)
    }
    return (
        <>
            <div className='contenedorPerfil'>
                <div className='contenedorPerfil__foto'>
                    <h1>Perfil</h1>
                    <img src={perfil} />
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
                        <p> { currentUser.gender == 'M' ? <p>Masculino</p> : <p>Femenino</p>} </p>
                    </div>
                    <div className='contenedorPerfil__email'>
                        <h3>Email</h3>
                        <p> {currentUser.email} </p>
                    </div>
                </div>
            </div>
            {/*<button onClick={handleAddItem}>Add item</button>
            <button onClick={handleRemoveItem}>Remove item</button>*/}
        </>
    )
}

export default withProtection(Profile, "AMBOS");