import { createContext, useEffect, useState } from "react";

export const UserInformationContext = createContext();

const UserInformationProvider = ({ children }) => {
  const [userInformation, setUserInformation] = useState(
    () => JSON.parse(localStorage.getItem("user")) || {}
  );
  useEffect(() => {
    const userInformationDecode = localStorage.getItem("user");

    if (userInformationDecode) {
      const userInformationEncode = JSON.parse(userInformationDecode);
      setUserInformation(userInformationEncode);
    }
  }, [localStorage.getItem("user")]);

  return (
    <UserInformationContext.Provider
      value={{ userInformation, setUserInformation }}
    >
      {children}
    </UserInformationContext.Provider>
  );
};

export default UserInformationProvider;
