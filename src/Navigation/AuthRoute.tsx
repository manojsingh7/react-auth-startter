import { Navigate, RouteProps } from "react-router-dom";
import { getAuthValue } from "../Modules/AuthModule/Hooks/useAuthValue";

export type AuthRouteProps = {
  authenticationPath?: string;
  children: any;
} & RouteProps;

function AuthRoute(props: AuthRouteProps) {
  const { authenticationPath = "/home", children } = props;
  const { loggedIn } = getAuthValue();

  if (!loggedIn) {
    return children;
  } else {
    return <Navigate to={{ pathname: authenticationPath }} />;
  }
}

export default AuthRoute;
