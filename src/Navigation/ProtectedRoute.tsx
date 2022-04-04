import { useContext } from "react";
import { Navigate, RouteProps } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthContextProvider";

export type ProtectedRouteProps = {
  authenticationPath?: string;
  children: any;
} & RouteProps;

function ProtectedRoute(props: ProtectedRouteProps) {
  const { authenticationPath = "/", children } = props;
  const { loggedIn } = useContext(AuthContext);

  if (loggedIn) {
    return children;
  } else {
    return <Navigate to={{ pathname: authenticationPath }} />;
  }
}

export default ProtectedRoute;
