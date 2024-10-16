// src/components/ProtectedRoute.js
import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  // Si l'utilisateur n'est pas connecté, redirige vers la page de connexion
  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }

  // Si l'utilisateur est connecté, affiche le contenu de l'enfant
  return children;
};

export default ProtectedRoute;
