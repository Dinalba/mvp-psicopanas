import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import MainScreen from "../../components/mainscreen/MainScreen";
import Goti from "../../images/Goti.png";

const MessageSad = () => {
  return (
    <MainScreen title="¿Te puedo enviar un abrazo?">
      <Container>
        <Col>
          <div className="Centrado">
            <p
              style={{
                color: "#0FA5AE",
                fontWeight: "bold",
                fontSize: "25px",
              }}
            >
              Todo pasa, no hay mal que dure cien años ni gota que lo aguante.
              Respira y sé paciente que todo va a mejorar. Ya verás.
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

export default MessageSad;
