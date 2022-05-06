import { createContext, useState } from "react";
import axios from "axios";
export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const  [isAuth, setIsAuth]  = useState(false);
  function toggleAuth() {
      if (isAuth==false) {
        axios
      .post("https://reqres.in/api/login", {
        email: "eve.holt@reqres.in",
        password: "cityslicka",
      })
      .then(function (response) {
          console.log(response.data.token);
          setIsAuth(response.data.token)
      })
      .catch(function (error) {
        console.log(error);
      });
      } else {
        setIsAuth(() => {
            return false
        })
    }
  }
  return <AuthContext.Provider value={{isAuth,toggleAuth}}>{children}</AuthContext.Provider>;
};
