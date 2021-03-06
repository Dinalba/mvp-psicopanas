import React, { useEffect } from "react";
import { Button, Container, Image, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import MainScreen from "../../components/mainscreen/MainScreen";
import Goti from "../../images/goti.gif";
import "../../styles/App.css";

/**
  * @desc Es la funcion encargada de traer funcionar la pagina
  * del mensaje muy feliz
  * @param history variable encargada de redireccionar a otras paginas o URL's
*/
const MessageVeryHappy = ({ history }) => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  //encargada de redireccionar a otra pagina si no tiene los requisitos necesarios
  useEffect(() => {
    if (!userInfo) {
      history.push("/");
    } else {
      if (userInfo.isAdmin === true) {
        history.push("/admin");
      }
    }
  });

  const consejo = () => {
    var num = Math.floor(Math.random() * (3 + 1 - 1) + 1);
    if (num === 1) {
      return "EH EH EH ¡¡Estamos celebrando contigoooo!!";
    } else if (num === 2) {
      return "RUMBÉATE y CELÉBRATE, porque vida no hay 2 y como tú tampoco hay 2";
    } else {
      return "Báilale a la vida mientras la puedas cantar, la vida es como el mar, las olas las debes aprovechar, no esquivar";
    }
  };

  return (
    <MainScreen title="¡ ESOOOOOOOOOOO XD !">
      <Container>
        <div className="Centrado">
          <p className="subtitle-text-blue">{consejo()}</p>
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
            <Button style={{ border: "none" }}>Continuar</Button>
          </Link>
        </Row>
      </Container>
    </MainScreen>
  );
};

export default MessageVeryHappy;
