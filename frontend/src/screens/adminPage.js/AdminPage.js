import React, { useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../actions/userActions";
import ErrorMessage from "../../components/ErrorMessage";
import Loading from "../../components/Loading";
import MainScreen from "../../components/mainscreen/MainScreen";
import "../../styles/App.css";

/**
  * @desc Es la funcion encargada de traer funcionar la pagina
  * de ver/modificar los roles de premium de los usuarios por el Admin
  * @param history variable encargada de redireccionar a otras paginas o URL's
*/
const AdminPage = ({ history }) => {
  const dispatch = useDispatch();

  const getAllUsers = useSelector((state) => state.getAllUsers);
  const { loading, error, usersInfo } = getAllUsers;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  //encargada de redireccionar a otra pagina si no tiene los requisitos necesarios
  useEffect(() => {
    if (!userInfo) {
      history.push("/");
    } else {
      if (userInfo?.isAdmin === false) {
        history.push("/");
      } else {
        dispatch(getUsers());
      }
    }
  }, [dispatch, history, userInfo]);

  return (
    <MainScreen title="Administrador">
      <Container className="container-no-bg">
        <Row>
          <div className="subtitle-text-blue">Lista de Usuarios</div>
        </Row>
        {error && (
          <ErrorMessage variant="danger">
            {"Ocurrió un error al cargar la data. Por favor recargue la página"}
          </ErrorMessage>
        )}
        {loading && <Loading />}
        {usersInfo?.map((user) => (
          <Row className="div-admin-page">
            <Col className="plain-text">{user._id}</Col>
            <Col className="plain-text">{user.email}</Col>
            <Col className="plain-text">Free</Col>
            <Col>
              <Button className="button-all-page" href={`/admin/${user._id}`}>
                Hacer premium
              </Button>
            </Col>
          </Row>
        ))}
      </Container>
    </MainScreen>
  );
};

export default AdminPage;
