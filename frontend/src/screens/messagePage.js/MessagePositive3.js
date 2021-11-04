import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import MainScreen from "../../components/mainscreen/MainScreen";
import Goti from "../../images/Goti.png";
import "../../styles/App.css";

const MessagePositive3 = () => {
  return (
    <MainScreen title="¡SÚBELE 2!">
      <Container>
        <Col>
          <div className="Centrado">
            <p className="subtitle-text-blue">
              Mañana será mejor, hoy fue un día a lo mejor sin mucho saboor,
              pero recuerda que solo tú te puedes animar y yo siempre te voy a
              apoyar.
            </p>
          </div>
          <div className="Centrado">
            <img src={Goti} width="200" height="250" alt="Goti" />
          </div>
        </Col>
        <Row>
          <Link to="/authdiario">
            <Button style={{ border: "none" }}>Continuar</Button>
          </Link>
        </Row>
      </Container>
    </MainScreen>
  );
};

export default MessagePositive3;
