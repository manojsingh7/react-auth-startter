import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthContextProvider";
import { fetcher } from "../Utils/Helper";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setLoggedIn, setUser } = useContext(AuthContext);

  const login = async () => {
    try {
      const responseData = await fetcher({
        url: "/app/auth/email-login",
        data: {
          email,
          password,
        },
        method: "POST",
      });
      console.log("responseData", responseData);
      const { status, data } = responseData;
      if (status === 200) {
        const { jwt_token, user } = data.data;
        setUser(user);
        await localStorage.setItem("token", jwt_token);
        await localStorage.setItem("user", JSON.stringify(user));
        setLoggedIn(true);
      }
    } catch (error: any) {
      if (error?.response) {
        alert(`"LOGIN ERROR", ${error?.response?.data?.message}`);
        console.log({ error: error?.response?.data?.message });
      } else {
        alert(`"NETWORK ERROR", "Failed to connect with server"`);
      }
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e?.target?.value)}
      />

      <input
        type="password"
        placeholder="Passwords"
        value={password}
        onChange={(e) => setPassword(e?.target?.value)}
      />
      <button onClick={() => login()}>Login</button>

      <Link to="/register">Register</Link>
    </div>
  );
}

export default Login;
