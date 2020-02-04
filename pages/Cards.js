import React from "react";
import Col from "react-bootstrap/Col";
import { Card } from "react-bootstrap";
function Cards(props) {
  const data = props.data;
  return (
    <Col>
      {" "}
      <>
        <Card></Card>

        <Card style={{ width: "21rem" }}>
          <Card.Img variant="top" src={data.img} />

          <Card.Body>
            <Card.Title>{data.title}</Card.Title>
            <Card.Text>{data.disc}</Card.Text>
          </Card.Body>
        </Card>
      </>
    </Col>
  );
}
export default Cards;
