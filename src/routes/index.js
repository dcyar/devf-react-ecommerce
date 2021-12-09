import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { useParams } from "react-router-dom";
import CrearProducto from "../views/CrearProducto/CrearProducto";
import Profile from "../views/Profile/Profile";

/*
Login
Registro
Crear-producto (ruta protegida)
Profile (opcional - ruta protegida)
*/

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <h1>Home <br /> <h3>Listado de productos...</h3> </h1>
        </Route>
        <Route exact path="/login">
          <h1>Login</h1>
        </Route>
        <Route exact path="/registro">
          <h1>Registro</h1>
        </Route>
        <Route exact path="/crear-producto">
          <CrearProducto />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/:pid">
          <DetalleProducto />
        </Route>
      </Switch>
    </Router>
  );
}

function DetalleProducto() {
  let { pid } = useParams();

  return(
    <>
      <h1>Detalle Producto</h1>
      <h2>Producto con id: {pid} </h2>
    </>
  );
}

export default Routes;