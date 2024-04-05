import { Link, useLocation, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";

function NotFoundScreen() {
  // pour contrer le changement de lien du mode déconnecter en mode connecter il faut suprimmer les possibilité pour ne pas tomber dans la boucle du router
  const location = useLocation();
  const { pathname } = location;
  const navigate = useNavigate();
  if (pathname === "/login" || pathname === "/register") {
    const handelGoToLogin = () => {
      navigate("/");
    };

    // Utiliser useEffect pour exécuter la fonction lors du rendu du composant
    useEffect(() => {
      handelGoToLogin();
    }, []);
  }

  return (
    <div
      css={{
        height: "100%",
        display: "grid",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>
        Sorry... nothing here. <Link to="/">Go home</Link>
      </div>
    </div>
  );
}

export { NotFoundScreen };
