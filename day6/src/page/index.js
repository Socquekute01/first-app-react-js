import { Link } from "react-router-dom";

function IndexPage() {
  return (
    <>
      <h1>Home Page</h1>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/user"}>User</Link>
          </li>
          <li>
            <Link to={"/product"}>Product</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default IndexPage;
