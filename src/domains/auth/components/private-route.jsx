import { Route } from "react-router-dom";
import { useAuth } from "../auth.state";
import { LoginForm } from "./login-form";

export const PrivateRoute = (props) => {
  const { status } = useAuth();

  if (status === "anonymous") {
    return <LoginForm />;
  }

  return <Route {...props} />;
};
