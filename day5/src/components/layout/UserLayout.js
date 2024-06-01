import { HeaderUserComponent } from "./components/header";
import { FooterUserComponent } from "./components/footer";

function UserLayout({ children }) {
  return (
    <>
      <HeaderUserComponent />
      {children}
      <FooterUserComponent />
    </>
  );
}

export default UserLayout;
