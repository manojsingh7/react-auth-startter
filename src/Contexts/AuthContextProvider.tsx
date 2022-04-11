import React, { createContext } from "react";

export const AuthContext = createContext<any | null>(null);

function AuthContextProvider(props: any) {
  const { children } = props;

  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
