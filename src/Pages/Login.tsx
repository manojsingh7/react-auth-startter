import React, { Fragment } from "react";
import LoginForm from "src/Modules/AuthModule/Components/LoginForm/LoginForm";

function Login() {
  return (
    <Fragment>
      <div>
        <h1>Login</h1>
        <LoginForm />
      </div>
    </Fragment>
  );
}

export default Login;
