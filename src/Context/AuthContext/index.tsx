import { createContext, useState } from "react";
import { iAuthContext, IValueAuthContext } from "./types";

const AuthContext = createContext({} as IValueAuthContext);

const ProviderAuthContex = ({ children }: iAuthContext) => {
  const themeLocal = localStorage.getItem("theme");
  const [theme, setTheme] = useState(
    themeLocal ? JSON.parse(themeLocal) : false
  );
  return (
    <AuthContext.Provider value={{ theme, setTheme }}>
      {children}
    </AuthContext.Provider>
  );
};

export { ProviderAuthContex, AuthContext };
