import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function FooterComponent() {
  return (
    <div
      style={{
        backgroundColor: "#fafafa",
        padding: "3%",
      }}
    >
      <Container>
        <Row>
          <Col>Products</Col>
          <Col>User</Col>
          <Col>Home</Col>
        </Row>
        <Row>
          <Col>Products</Col>
          <Col>User</Col>
          <Col>Home</Col>
        </Row>
        <Row>
          <Col>Products</Col>
          <Col>User</Col>
          <Col>Home</Col>
        </Row>
        <Row>
          <Col>Products</Col>
          <Col>User</Col>
          <Col>Home</Col>
        </Row>
        <div
          style={{
            width: "100%",
            height: "0px",
            border: "1px solid",
            margin: "2% 0",
          }}
        ></div>
        <p style={{ textAlign: "center" }}>ReactJS For User 2024</p>
      </Container>
    </div>
  );
}

export default FooterComponent;
