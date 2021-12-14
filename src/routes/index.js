import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from '../components/Navbar'
import CrearProducto from "../views/CrearProducto/CrearProducto";
import Profile from "../views/Profile/Profile";
import ProductDetail from "../views/ProductDetail";
import PageNotFound from "../views/PageNotFound";
import Login from "../views/Login";
import Register from "../views/Register";
import Logout from "../components/Logout";

function Routes() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <h1>Home <br /> <h3>Listado de productos...</h3> </h1>
        </Route>
        <Route exact path="/login" component={Login} />
        <Route exact path="/registrarse" component={Register} />
        <Route exact path="/crear-producto" component={CrearProducto} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/productos/:pid" component={ProductDetail} />
        <Route exact path="/logout" component={Logout} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default Routes;