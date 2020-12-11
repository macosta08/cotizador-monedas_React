import React, { Fragment, useState } from "react";

const useMoneda = (label, stateInicial) => {
  // State de nuestro custom hook
  const [state, actualizarState] = useState(stateInicial);

  // dentro de Seleccionar es lo que se mostrará por pantalla
  const Seleccionar = () => (
    <Fragment>
      <label>{label}</label>
      <select>
        <option value="MXN">Peso Mexicano</option>
      </select>
    </Fragment>
  );

  //Retornar State, interfaz y Fn que modifica el State

  return [state, Seleccionar, actualizarState];
};

export default useMoneda;
