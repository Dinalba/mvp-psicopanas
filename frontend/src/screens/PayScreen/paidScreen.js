import React from "react";
import emailjs from "emailjs-com";
import { Button, Card, Container, Form, Row, Col } from "react-bootstrap";
import MainScreen from "../../components/mainscreen/MainScreen";

const PaySreen = ({ history }) => {

    return(
        <MainScreen title="Pago Premium">
            <Card
            style={{
              background: "white",
              border: "none",
            }}>
                <Card.Body>
                    <Form>
                    <Form.Group controlId="title">
                        <Form.Label >Nombre</Form.Label>
                    </Form.Group>
                    <Form.Group controlId="title">
                        <Form.Label >Correo electronico</Form.Label>
                    </Form.Group>
                    <Form.Group controlId="title">
                        <Form.Label >telefono????</Form.Label>
                    </Form.Group>
                    </Form>  
                </Card.Body>
            </Card>
        </MainScreen>
    );
};

export default PaySreen;