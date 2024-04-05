import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context";

const RedirectToLogin = () => {
  // si on essaie un lien hor-mi register ou login on sera rediriger vers login (un lien qui ne fugure pas dans le ficher de routage )
  const { user } = useAuth();

  if (user) {
    return null;
  } else {
    const navigate = useNavigate();

    const handelGoToLogin = () => {
      navigate("/login");
    };

    useEffect(() => {
      handelGoToLogin();
    }, []);
  }
  // Renvoyer null car le composant ne rend rien
  return null;
};

export default RedirectToLogin;
