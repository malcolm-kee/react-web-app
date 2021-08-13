import { Button } from "components/button";
import { useLogout, useAuth } from "../auth.state";

export const LogoutButton = () => {
  const logout = useLogout();
  const { status } = useAuth();

  return status === "anonymous" ? null : (
    <Button variant="outline" onClick={logout}>
      Logout
    </Button>
  );
};
