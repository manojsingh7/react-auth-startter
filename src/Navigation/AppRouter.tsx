import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "src/Pages/Home";
import Login from "../Pages/Login";
import AuthRoute from "./AuthRoute";
import ProtectedRoute from "./ProtectedRoute";

function AppRouter() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route
            path={"/"}
            element={
              <AuthRoute>
                <Login />
              </AuthRoute>
            }
          />
          <Route
            path={"/home"}
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default AppRouter;
