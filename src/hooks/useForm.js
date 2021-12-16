import { useState } from "react";

export default function useForm(callback, datos) {
  const [inputs, setInputs] = useState(datos); //vamos a guardar los valores del formulario

  const handleInput = (event) => {
    const { name, value } = event.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); //Evitar el refres de la página
    callback(inputs);
    //registerUser(inputs)
  };

  return {
    // El hook no regresa JSX
    inputs,
    handleInput,
    handleSubmit,
  };
}