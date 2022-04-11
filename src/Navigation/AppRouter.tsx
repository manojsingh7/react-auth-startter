import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../Pages/Login";
import AuthRoute from "./AuthRoute";

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
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default AppRouter;
