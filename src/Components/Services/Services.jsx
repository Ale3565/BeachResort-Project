import React, { Component } from "react";

// imports react-icons
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

// imports components
import Title from "../Title/Title";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "cockteles gratis",
        info:
          "Disfruta de cocteles gratis con nuestra oferta especial: sabores exquisitos y refrescantes, servidos en un ambiente elegante y acogedor.",
      },
      {
        icon: <FaHiking />,
        title: "caminatas",
        info:
          "Únete a nuestras caminatas gratuitas y explora rutas fascinantes, disfruta del aire libre y conoce nuevos amigos en cada paso.",
      },
      {
        icon: <FaShuttleVan />,
        title: "transporte gratuito",
        info:
          "Aprovecha nuestro servicio de transporte gratuito: cómodo, eficiente y confiable, ideal para moverte sin preocupaciones por la ciudad.",
      },
      {
        icon: <FaBeer />,
        title: "almacenes de cerveza",
        info:
          "Disfruta de almacenes de cerveza gratis: amplia selección, excelente calidad y variedad, ideales para eventos y reuniones sin costo adicional.",
      },
    ],
  };

  render() {
    return (
      <section className="services">
        <Title title="servicios" />

        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="services">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
