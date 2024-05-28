import { createContext, useEffect, useState } from "react";

export const UserInformationContext = createContext();

const UserInformationProvider = ({ children }) => {
  const [userInformation, setUserInformation] = useState(
    () => JSON.parse(localStorage.getItem("user")) || {}
  );

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(userInformation));
  }, [userInformation]);

  return (
    <UserInformationContext.Provider
      value={{ userInformation, setUserInformation }}
    >
      {children}
    </UserInformationContext.Provider>
  );
};

export default UserInformationProvider;
