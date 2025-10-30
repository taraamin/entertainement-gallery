import React from 'react';
import { Card, Button } from 'react-bootstrap';

const EntertainmentCard = ({ title, image, description, link }) => {
  return (
    <Card className="mb-4">
      <Card.Img variant="top" src={image} style={{ height: '450px', objectFit: 'cover' }} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        {link && <Button variant="primary" href={link} target="_blank">Read more</Button>}
      </Card.Body>
    </Card>
  );
};

export default EntertainmentCard;
