import Carousel from "react-bootstrap/Carousel";
import Slide1 from "../../../data/images/slide1.jpg";
import Slide2 from "../../../data/images/slide2.jpg";
import Slide3 from "../../../data/images/slide3.jpg";

function SlideComponent() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img src={Slide1} alt="slide1" style={{ width: "100%" }} />
      </Carousel.Item>
      <Carousel.Item>
        <img src={Slide2} alt="slide2" style={{ width: "100%" }} />
      </Carousel.Item>
      <Carousel.Item>
        <img src={Slide3} alt="slide3" style={{ width: "100%" }} />
      </Carousel.Item>
    </Carousel>
  );
}

export default SlideComponent;
