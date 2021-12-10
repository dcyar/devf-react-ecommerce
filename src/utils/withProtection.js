// Este archivo se usará como un HOC para proteger un componente
// HOC es un componente de orden superior que nos ayuda a compartir lógica
// Reutilizar la lógica de un componente, puede aplicarse en cualquier componente

import React, { useState } from "react";
import { Redirect } from "react-router-dom";

export default function withProtection(Component, _role) {
  //Verificamos si tenemos un token. Si no lo tenemos no mostramos el componente
  const ProtectedComponent = (props) => {
    const [token] = useState(window.localStorage.getItem("token"));
    const [role] = useState(window.localStorage.getItem("role"));

    if (_role === "AMBOS") {
      _role = role;
    }
    
    if (token !== null && _role == role) {
      return <Component {...props} />;
    } else {
      return <Redirect to="/login" />;
    }

    //return token ? <Component {...props} /> : <Redirect to="/login" />;
  };
  return ProtectedComponent;
}