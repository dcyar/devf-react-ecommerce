import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "../views/Home";
import Navbar from "../components/Navbar";
import ItemDetalle from "../views/Item/ItemDetalle";


export default function Routes() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:pid" component={ItemDetalle} />
      </Switch>
    </Router>
  );
}
