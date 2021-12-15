import React from 'react'
import { Redirect } from 'react-router-dom';
// import { useUserContext } from '../context/userContext';
const Logout=()=> {
    window.localStorage.removeItem('token');
    // const context= useUserContext()
    // context.setUsuarioActual()

    return (
        <div>
            <Redirect to="/" />
        </div>
    )
}
export default Logout;