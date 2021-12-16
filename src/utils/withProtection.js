// Este archivo se usará como un HOC para proteger un componente
// HOC es un componente de orden superior que nos ayuda a compartir lógica
// Reutilizar la lógica de un componente, puede aplicarse en cualquier componente

import React from "react";
import { Redirect } from "react-router-dom";
import { useUserContext } from "../context/userContext";

export default function withProtection(Component, _role) {
  //Verificamos si tenemos un token. Si no lo tenemos no mostramos el componente
  const ProtectedComponent = (props) => {
    const { token, role } = useUserContext();

    if (_role === "AMBOS") {
      _role = role;
    }

    return (token !== null && _role === role)
      ? <Component {...props} />
      : <Redirect to="/login" />;
  };

  return ProtectedComponent;
}