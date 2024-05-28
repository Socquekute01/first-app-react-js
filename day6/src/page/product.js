import { useParams } from "react-router-dom";

function ProductPage() {
  const params = useParams();

  console.log(params.id);
  return (
    <>
      <h1>Product Page</h1>
    </>
  );
}

export default ProductPage;
