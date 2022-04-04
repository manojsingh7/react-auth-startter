import React, { useEffect } from "react";
import { createContext, useState } from "react";

export const AuthContext = createContext<any | null>(null);

function AuthContextProvider(props: any) {
  const { children } = props;
  const [loading, setLoading] = useState<boolean>(true);
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState<any | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const token = await localStorage.getItem("token");
        const userString = await localStorage.getItem("user");

        if (token !== null && userString !== null) {
          setLoggedIn(true);
          const _user = JSON.parse(userString);
          setUser(_user);
        }
      } catch (error) {
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <AuthContext.Provider value={{ loggedIn, setLoggedIn, user, setUser }}>
      {loading ? (
        <div
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <>Loading Data...</>
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
