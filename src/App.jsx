import React, { useState } from "react";
import "./App.css";
import { useAuth } from "./context/auth-context";
import FullPageSpinner from "./components/pageRendu/FullPageSpinner";
import Kader from "./components/pageRendu/Kader";
import AuthenticatedApp from "./components/AuthenticatedApp.jsx";
import UnauthenticatedApp from "./components/UnauthenticatedApp.jsx";

function App() {
  // on teste si le user exciste on retourne la plaitor de l'authentification (route et contexte et tous ce qui va avec )
  const { user } = useAuth();
  return (
    <React.Suspense fallback={<Kader />}>
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </React.Suspense>
  );
}

export default App;
