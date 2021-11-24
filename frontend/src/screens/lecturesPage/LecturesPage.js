import React, { useEffect } from "react";
import { Accordion, Card, Col, Container, Image, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getPublicatedLecturesAction } from "../../actions/lectureActions";
import ErrorMessage from "../../components/ErrorMessage";
import Loading from "../../components/Loading";
import MainScreen from "../../components/mainscreen/MainScreen";
import moment from "moment";
import "../../styles/App.css";

const LecturesPage = ({ history }) => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const getPublicatedLectures = useSelector(
    (state) => state.getPublicatedLectures
  );
  const {
    loading: loadingPublicated,
    error: errorPublicated,
    publicatedLecturesInfo,
  } = getPublicatedLectures;

  useEffect(() => {
    if (!userInfo) {
      history.push("/");
    } else {
      if (userInfo.isAdmin === true) {
        history.push("/admin");
      }
    }
  });

  useEffect(() => {
    dispatch(getPublicatedLecturesAction());
  }, [dispatch]);

  return (
    <MainScreen title="Lecturas">
      <Container>
        <Row>
          {errorPublicated && (
            <ErrorMessage variant="danger">{errorPublicated}</ErrorMessage>
          )}
          {loadingPublicated && <Loading />}
          {publicatedLecturesInfo
            ?.sort((a, b) => {
              if (a.publicationDate < b.publicationDate) {
                return -1;
              }
              if (a.publicationDate > b.publicationDate) {
                return 1;
              }
              return 0;
            })
            .map((lecture) => (
              <Accordion key={lecture._id} style={{ width: "100%" }}>
                <Card className="container-entry">
                  <Card.Header
                    className="container-entry-header"
                    style={{ borderBottom: "dotted 1px #053a3f" }}
                  >
                    <Accordion.Toggle
                      style={{
                        flex: 1,
                        cursor: "pointer",
                        alignSelf: "center",
                        fontSize: 18,
                        display: "flex",
                      }}
                      as={Card.Text}
                      variant="link"
                      eventKey="0"
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <div className="subtitle-text-blue">
                          {lecture.title.slice(0, 15)}
                        </div>
                      </div>
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <Container
                        style={{
                          margin: 0,
                          paddingTop: 0,
                          paddingLeft: 20,
                          paddingRight: 20,
                        }}
                      >
                        <Row>
                          <Col md={3}>
                            <Image src={lecture.image} fluid></Image>
                            <div className="plain-centered-text">
                              Fecha de publicación: -
                              {moment(lecture.publicationDate).format("L")}-
                            </div>
                          </Col>
                          <Col md={9}>
                            <div className="plain-justify-text">
                              {lecture.content}
                            </div>
                          </Col>
                        </Row>
                      </Container>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            ))
            .reverse()}
        </Row>
      </Container>
    </MainScreen>
  );
};

export default LecturesPage;
