import { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

function Page404() {
  const navigate = useNavigate(); //redirect page
  const params = useParams(); // params
  const location = useLocation(); // pathname

  useEffect(() => {
    const redirectPage = setTimeout(() => {
      navigate("/", { state: { id: 1, username: "Loc" } });
    }, 3000);

    return () => {
      clearTimeout(redirectPage); // setInterval setTimeout addEventListener
    };
  }, []);
  return (
    <>
      <h1>Oops... Page not found</h1>
    </>
  );
}

export default Page404;
