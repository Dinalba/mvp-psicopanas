import React, { useEffect } from "react";
import { Button, Container, Image, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import MainScreen from "../../components/mainscreen/MainScreen";
import Goti from "../../images/goti.gif";
import "../../styles/App.css";

/**
  * @desc Es la funcion encargada de traer funcionar la pagina
  * del mensaje de pago exitoso
  * @param history variable encargada de redireccionar a otras paginas o URL's
*/
const PagoExitoso = ({ history }) => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  //encargada de redireccionar a otra pagina si no tiene los requisitos necesarios
  useEffect(() => {
    if (!userInfo) {
      history.push("/");
    }
  });
  return (
    <MainScreen title="¡El mensaje fue enviado con exito!">
      <Container>
        <div className="Centrado">
          <p className="subtitle-text-blue">Vuelve a tu diario</p>
        </div>
        <div className="Centrado">
          <Image
            src={Goti}
            width="250"
            height="250"
            alt="Goti"
            roundedCircle
            className="goti-box"
          />
        </div>
        <Row className="Centrado" style={{ marginTop: "10px" }}>
          <Link to="/authdiario">
            <Button className="button-all-page">Continuar</Button>
          </Link>
        </Row>
      </Container>
    </MainScreen>
  );
};

export default PagoExitoso;
