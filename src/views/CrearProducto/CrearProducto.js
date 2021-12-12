import React, {useRef, useEffect, useState} from 'react';
import axios from "axios";
import swal from "sweetalert2";
import withProtection from '../../utils/withProtection';
import useForm from '../../hooks/useForm';
import './crearProducto.css';
import icono from './producto2.png';
import iconoResgistrarProducto from './registrar2.png';
import iconoLogout from './logout.png';

 const CrearProducto = () => {

    const [datos, setDatos] = useState({});
    const [token] = useState(window.localStorage.getItem("token"));
    const [infoApi, setInfoApi] = useState([]); // Va a guardar los objetos que se envía a la API por metodo post

    const crearProducto = useRef();
    const productos = useRef();
    const cerrarSesion = useRef();
    const formulario = useRef();
    const inputNombre = useRef();
    
    useEffect(() => {
        //console.log(crearProducto.current.style);
        crearProducto.current.style.display='none';
        productos.current.style.display='none';
        cerrarSesion.current.style.display='none';
        

        const info = {
            "isActive": true,
            "product_name": "ssss",
            "description": "ssssss",
            "price": 15,
            "category": "sssss",
            "brand": "ssssss",
            "sku": "e9cbfac1-301a-42c3-b94a-711a39dc7ed1",
            "image": "sss"
        };
        setDatos(info);
    }, [])

    const sendData = (datos) => {
        //Toda la lógica de hacer un post
        if (token) {
            const data = {
                "isActive": true,
                "product_name": datos.nombre,
                "description": datos.descripcion,
                "price": datos.precio,
                "category": datos.categoria,
                "brand": datos.marca,
                "sku": "e9cbfac1-301a-42c3-b94a-711a39dc7ed1",
                "image": datos.imagen
            }
            const config = {
                method: 'post',
                url: 'https://ecomerce-master.herokuapp.com/api/v1/item',
                headers: {
                    Authorization: `JWT ${token}`,
                },
                data: data
            };
            axios(config)
                .then((response) => {
                    console.log(JSON.stringify(response.data));
                    setInfoApi(response.data);
                    swal.fire({
                        title: "Registro exitoso",
                        icon: "success",
                        timer: "2000",
                        showConfirmButton: false,
                    })
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };
    //console.log(infoApi);
    let tabla = "";
    for (let i = 0; i < infoApi.length; i++) {
        tabla += `
            <tr>
                <td> ${infoApi.name} </td>
                <td> ${infoApi.categoria} </td>
                <td>2020-11-23T20:20:54.245Z</td>
                <td>
                    <div className='boton'>
                        <button>Ver</button>
                    </div>
                </td>
            </tr>
        `;
    }
    
    const { inputs, handleInput, handleSubmit } = useForm(sendData, datos);
    
    const mostrarContenidoCrearProducto = () => {
        crearProducto.current.style.display='block';
        productos.current.style.display='none';
        cerrarSesion.current.style.display='none';
    }

    const mostrarContenidoProductos = () => {
        productos.current.style.display='block';
        crearProducto.current.style.display='none';
        cerrarSesion.current.style.display='none';
    }

    const mostrarContenidoCerrarSesion = () => {
        cerrarSesion.current.style.display='block';
        crearProducto.current.style.display='none';
        productos.current.style.display='none';
    }
    
    return (
        <>
            <div className='container'>
                <div className='menu'>
                    <ul className='menu__lista parent' tabIndex="0">
                        <li className='item one' tabIndex="1" onClick={mostrarContenidoCrearProducto}>
                            <img src={iconoResgistrarProducto} width="22px" />
                            <a>
                                Crear Producto
                            </a>
                        </li>
                        <li className='item two' tabIndex="2" onClick={mostrarContenidoProductos} >
                            <img src={icono} width="22px" />
                            <a>
                                Productos
                            </a>
                        </li>
                        <li className='item three' tabIndex="3" onClick={mostrarContenidoCerrarSesion} >
                            <img src={iconoLogout} width="22px" />
                            <a>
                                Cerrar sesión
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='contenido'>
                    <div ref={crearProducto}>
                        <div className='crearProducto'>
                            <div className='crearProducto__header'>
                                <h3>Crear producto</h3>
                            </div>
                            <div className='crearProducto__body'>
                                <form onSubmit={handleSubmit} ref={formulario} >
                                    <div className='input'>
                                        <label>Nombre *</label>
                                        <input type='text' id="nombre" name="nombre" onChange={handleInput} value={inputs.nombre} ref={inputNombre} />
                                    </div>
                                    <div className='input'>
                                        <label>Descripción *</label>
                                        <input type='text' id="descripcion" name="descripcion" onChange={handleInput} value={inputs.descripcion} />
                                    </div>
                                    <div className='input'>
                                        <label>Precio *</label>
                                        <input type='number' id="precio" name="precio" onChange={handleInput} value={inputs.precio} />
                                    </div>
                                    <div className='input'>
                                        <label>Categoría *</label>
                                        <select name="categoria" id="categoria" onChange={handleInput} value={inputs.categoria} >
                                            <option value="">--Seleccione--</option>
                                            <option value="Books">Books</option>
                                            <option value="Movies">Movies</option>
                                            <option value="Music">Music</option>
                                            <option value="Games">Games</option>
                                            <option value="Electronics">Electronics</option>
                                            <option value="Computers">Computers</option>
                                            <option value="Home">Home</option>
                                            <option value="Garden">Garden</option>
                                            <option value="Tools">Tools</option>
                                            <option value="Grocery">Grocery</option>
                                            <option value="Health">Health</option>
                                            <option value="Beauty">Beauty</option>
                                            <option value="Toys">Toys</option>
                                            <option value="Kids">Kids</option>
                                            <option value="Baby">Baby</option>
                                            <option value="Clothing">Clothing</option>
                                            <option value="Shoes">Shoes</option>
                                            <option value="Jewelery">Jewelery</option>
                                            <option value="Sports">Sports</option>
                                            <option value="Outdoors">Outdoors</option>
                                            <option value="Automotive">Automotive</option>
                                            <option value="Industrial">Industrial</option>
                                        </select>
                                    </div>
                                    <div className='input'>
                                        <label>Marca *</label>
                                        <input type='text' id="marca" name="marca" onChange={handleInput} value={inputs.marca} />
                                    </div>
                                    <div className='input'>
                                        <label>Imagen (url) *</label>
                                        <input type='text' id="imagen" name="imagen" onChange={handleInput} value={inputs.imagen} />
                                    </div>
                                    <div className='boton' type="submit">
                                        <button>Guardar</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div ref={productos}>
                        <div className='productos'>
                            <div className='productos__header'>
                                <h3>Productos</h3>
                            </div>
                            <div className='productos__body'>
                                <div className='tableResponsive'>
                                    <table className='table'>
                                        <thead>
                                            <tr>
                                                <th>Nombre</th>
                                                <th>Categoría</th>
                                                <th>Fecha</th>
                                                <th>Acciones</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            ${tabla}
                                            {/*<tr>
                                                <td>Awesome Granite Bacon</td>
                                                <td>Kids</td>
                                                <td>2020-11-23T20:20:54.245Z</td>
                                                <td>
                                                    <div className='boton'>
                                                        <button>Ver</button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Awesome Granite Bacon</td>
                                                <td>Kids</td>
                                                <td>2020-11-23T20:20:54.245Z</td>
                                                <td>
                                                    <div className='boton'>
                                                        <button>Ver</button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Awesome Granite Bacon</td>
                                                <td>Kids</td>
                                                <td>2020-11-23T20:20:54.245Z</td>
                                                <td>
                                                    <div className='boton'>
                                                        <button>Ver</button>
                                                    </div>
                                                </td>
                                            </tr>*/}
                                        </tbody>
                                    </table>
                                    <table className='table2'>
                                        <thead>
                                            <tr>
                                                <th>Nombre</th>
                                                <th>Categoría</th>
                                                <th>Fecha</th>
                                                <th>Acciones</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            ${tabla}
                                            {/*<tr>
                                                <td>Awesome Granite Bacon</td>
                                                <td>Kids</td>
                                                <td>2020-11-23T20:20:54.245Z</td>
                                                <td>
                                                    <div className='boton'>
                                                        <button>Ver</button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Awesome Granite Bacon</td>
                                                <td>Kids</td>
                                                <td>2020-11-23T20:20:54.245Z</td>
                                                <td>
                                                    <div className='boton'>
                                                        <button>Ver</button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Awesome Granite Bacon</td>
                                                <td>Kids</td>
                                                <td>2020-11-23T20:20:54.245Z</td>
                                                <td>
                                                    <div className='boton'>
                                                        <button>Ver</button>
                                                    </div>
                                                </td>
                                            </tr>*/}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div ref={cerrarSesion}>
                        <h1>Cerrando sesión</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default withProtection(CrearProducto, "ADMIN");