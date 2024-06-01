import { HeaderAdminComponent } from "./components/header";
import { FooterAdminComponent } from "./components/footer";

function AdminLayout({ children }) {
  return (
    <>
      <div
        style={{
          display: "flex",
        }}
      >
        <HeaderAdminComponent />
        {children}
      </div>
      <FooterAdminComponent />
    </>
  );
}

export default AdminLayout;
