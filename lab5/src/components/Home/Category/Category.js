import { Col, Container, Row } from "react-bootstrap";
import Menu1 from "../../../data/images/menu-01.jpg";
import Menu2 from "../../../data/images/menu-02.jpg";
import Menu3 from "../../../data/images/menu-03.jpg";
import Menu4 from "../../../data/images/menu-04.jpg";
import Menu5 from "../../../data/images/menu-05.jpg";
import Menu6 from "../../../data/images/menu-06.jpg";

function CategoryComponent() {
  const listImage = [Menu1, Menu2, Menu3, Menu4, Menu5, Menu6];
  const CategoryImage = listImage.map((item, index) => (
    <Col key={index} style={{ display: "flex", justifyContent: "center" }}>
      <img
        alt={`menu${index + 1}`}
        src={item}
        style={{ borderRadius: "50%" }}
      />
    </Col>
  ));
  return (
    <>
      <Container fluid>
        <Row>{CategoryImage}</Row>
      </Container>
    </>
  );
}

export default CategoryComponent;
