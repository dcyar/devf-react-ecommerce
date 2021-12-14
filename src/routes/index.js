import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import CrearProducto from "../views/CrearProducto/CrearProducto";
import Profile from "../views/Profile/Profile";
import ProductDetail from "../views/ProductDetail";
import Login from "../views/Login";
import Register from "../views/Register";
import Logout from "../components/Logout";

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
        <Route exact path="/login" component={Login}/>
          
        
        <Route exact path="/registrarse" component={Register}/>
          
        
        <Route exact path="/crear-producto" component={CrearProducto} />
          
        
        <Route exact path="/profile" component={Profile}/>
          
        
        <Route exact path="/productos/:pid" component={ProductDetail}/>

        <Route exact path="/logout" component={Logout}/>
          
      </Switch>
    </Router>
  );
}

export default Routes;