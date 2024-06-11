import { Col, Row } from "react-bootstrap";
import NewsCardComponent from "../components/News/NewsCard/NewCard";
import { newLists } from "../data/news";

function NewsPage() {
  const NewsListComponent = newLists.map((item, index) => {
    return (
      <Col key={index} xs={3}>
        <NewsCardComponent data={item} />
      </Col>
    );
  });
  return (
    <>
      <h3 style={{ color: "red" }}>News Category</h3>
      <Row>{NewsListComponent}</Row>
    </>
  );
}

export default NewsPage;
