import { Navigate, RouteProps } from "react-router-dom";
import { getAuthValue } from "src/Modules/AuthModule/Hooks/useAuthValue";

export type ProtectedRouteProps = {
  authenticationPath?: string;
  children: any;
} & RouteProps;

function ProtectedRoute(props: ProtectedRouteProps) {
  const { authenticationPath = "/", children } = props;
  const { loggedIn } = getAuthValue();

  if (loggedIn) {
    return children;
  } else {
    return <Navigate to={{ pathname: authenticationPath }} />;
  }
}

export default ProtectedRoute;
