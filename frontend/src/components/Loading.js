import React from "react";
import { Spinner } from "react-bootstrap";

/**
  * @desc Es la funcion componente que sirve como elemento para cargar algo
  * @param size tamaño del Spinner
*/
function Loading({ size = 100 }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <Spinner
        style={{
          width: size,
          height: size,
        }}
        animation="border"
      />
    </div>
  );
}

export default Loading;
