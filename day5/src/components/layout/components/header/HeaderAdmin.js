import {
  FaRegUserCircle,
  FaPizzaSlice,
  FaUserCheck,
  FaArrowLeft,
} from "react-icons/fa";
import { useLocation } from "react-router-dom";
import "./header.css";

function HeaderAdminComponent() {
  const location = useLocation();
  const { pathname } = location;
  return (
    <>
      <div
        style={{
          backgroundColor: "rgba(43,48,53,1)",
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          width: "240px",
          alignItems: "center",
        }}
      >
        <div className={"admin-logo"} style={{ padding: "20px" }}>
          <img
            src="https://img.freepik.com/premium-vector/bird-logo-design_646665-636.jpg"
            alt="logo"
            style={{ width: "100px" }}
          />
        </div>
        <ul style={{ color: "#fff", listStyle: "none", padding: 0 }}>
          <li
            style={{
              padding: "20px 10px",
              display: "flex",
              alignItems: "center",
            }}
            className={pathname === "/admin/user-management" ? "active" : ""}
          >
            <FaRegUserCircle style={{ fontSize: "20px" }} />
            <div style={{ width: "8px" }} />
            User Management
          </li>
          <li
            style={{
              padding: "20px 10px",
              display: "flex",
              alignItems: "center",
            }}
            className={pathname === "/admin/product-management" ? "active" : ""}
          >
            <FaPizzaSlice style={{ fontSize: "20px" }} />
            <div style={{ width: "8px" }} />
            Product Management
          </li>
          <li
            style={{
              padding: "20px 10px",
              display: "flex",
              alignItems: "center",
            }}
            className={pathname === "/admin/profile" ? "active" : ""}
          >
            <FaUserCheck style={{ fontSize: "20px" }} />
            <div style={{ width: "8px" }} />
            Profile
          </li>
          <li
            style={{
              padding: "20px 10px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <FaArrowLeft style={{ fontSize: "20px" }} />
            <div style={{ width: "8px" }} />
            Logout
          </li>
        </ul>
      </div>
    </>
  );
}

export default HeaderAdminComponent;
