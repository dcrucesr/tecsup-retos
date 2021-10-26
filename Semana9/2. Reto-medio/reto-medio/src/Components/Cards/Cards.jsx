import React from "react";
import "./Cards.scss";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const Cards = ({ title = "", url = "", content = "" }) => {
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" className="card__image"   src={url} alt="img-generica" roundedCircle/>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{content}</Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
  );
};

export default Cards;
