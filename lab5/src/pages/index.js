import CategoryComponent from "../components/Home/Category/Category";
import SlideComponent from "../components/Home/Slide/Slide";

function HomePage() {
  return (
    <>
      <SlideComponent />
      <CategoryComponent />
      <h3 style={{ color: "red" }}>This is Home Page</h3>
    </>
  );
}

export default HomePage;
