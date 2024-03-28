import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useAuth } from "./context/auth-context";
import FullPageSpinner from "./components/pageRendu/FullPageSpinner";
import Kader from "./components/pageRendu/Kader";
import AuthenticatedApp from "./components/AuthenticatedApp.jsx";
import UnauthenticatedApp from "./components/UnauthenticatedApp.jsx";

function App() {
  const { user } = useAuth();
  console.log({ user });
  return (
    <React.Suspense fallback={<Kader />}>
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </React.Suspense>
  );
}

export default App;
