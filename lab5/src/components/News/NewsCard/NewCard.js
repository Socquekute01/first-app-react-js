import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Img1 from "../../../data/images/event-1.jpg";
import Img2 from "../../../data/images/event-2.jpg";
import Img3 from "../../../data/images/event-3.jpg";
import Img4 from "../../../data/images/event-4.jpg";
import Img5 from "../../../data/images/event-5.jpg";
import Img6 from "../../../data/images/event-6.jpg";
import Img7 from "../../../data/images/event-7.jpg";
import Img8 from "../../../data/images/event-8.jpg";

function NewsCardComponent({ data }) {
  if (!data) return <></>;
  const { title, description, id } = data;
  const listImage = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8];

  const ImageSrc = () => {
    return listImage[id - 1];
  };
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={ImageSrc()} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Link to={"#"}>{title}</Link>
        </Card.Body>
      </Card>
    </>
  );
}

export default NewsCardComponent;
