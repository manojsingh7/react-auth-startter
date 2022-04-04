import { useContext } from "react";
import { Navigate, RouteProps } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthContextProvider";

export type AuthRouteProps = {
  authenticationPath?: string;
  children: any;
} & RouteProps;

function AuthRoute(props: AuthRouteProps) {
  const { authenticationPath = "/home", children } = props;
  const { loggedIn } = useContext(AuthContext);

  if (!loggedIn) {
    return children;
  } else {
    return <Navigate to={{ pathname: authenticationPath }} />;
  }
}

export default AuthRoute;
