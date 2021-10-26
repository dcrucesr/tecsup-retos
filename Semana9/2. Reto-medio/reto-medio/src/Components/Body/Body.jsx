import React from "react";
import "./Body.scss";
import { array_new } from "../../db-new";
import { array_relevant } from "../../db-relevant";
import Card from "../Cards/Cards";

const Body = () => {
  return (
    <div className="general">
      <h3>NUEVOS</h3>
      <div className="objetos">
        {array_new.map((objeto) => (
          <Card
            key={objeto.id}
            title={objeto.titulo}
            url={objeto.imagen}
            content={objeto.contenido}
          />
        ))}
      </div>
      <h3>RELEVANTES</h3>
      <div className="objetos">
        {array_relevant.map((objeto) => (
          <Card
            key={objeto.id}
            title={objeto.titulo}
            url={objeto.imagen}
            content={objeto.contenido}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
