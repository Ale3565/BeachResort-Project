import React from "react";

// import loading gif image
import loadingGif from "../../assets/img/gif/loading-arrow.gif";

export default function Loading() {
  return (
    <div className="loading">
      <h4>Cargando Informacion de Habitaciones ...</h4>
      <img src={loadingGif} alt="loading gif" />
    </div>
  );
}
