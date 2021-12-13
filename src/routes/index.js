import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import CrearProducto from "../views/CrearProducto/CrearProducto";
import Profile from "../views/Profile/Profile";
import ProductDetail from "../views/ProductDetail";
import Home from "../views/Home/";

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
        <Route exact path="/" component={Home} />
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
        <Route exact path="/productos/:pid">
          <ProductDetail />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;