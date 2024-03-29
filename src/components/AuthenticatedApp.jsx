import React from "react";
import { useAuth } from "../context/auth-context";

export default function AuthenticatedApp() {
  const { user, logout } = useAuth();

  return (
    <div>
      yo
      <p>je suis auth</p>
      <p>good by</p>
      <button variant="secondary" css={{ marginLeft: "10px" }} onClick={logout}>
        Logout
      </button>
    </div>
  );
}
