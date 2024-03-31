import React from "react";
import { useAuth } from "../context/auth-context";
import { Route, Routes } from "react-router-dom";
// import { NotFoundScreen } from "../pages/NotFoundScreen.jsx";
import List from "../pages/List.jsx";
import { NotFoundScreen } from "../pages/NotFoundScreen.jsx";
import FinishedScreen from "../pages/FinishedScreen.jsx";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<List />} />
      <Route path="/finished" element={<FinishedScreen />} />
      {/*  <Route path="/discover" element={<DiscoverBooksScreen />} />
      <Route path="/book/:bookId" element={<BookScreen />} /> */}
      <Route path="*" element={<NotFoundScreen />} />
    </Routes>
  );
}

export default function AuthenticatedApp() {
  const { user, logout } = useAuth();

  return (
    <div>
      <nav>
        <button
          variant="secondary"
          css={{ marginLeft: "10px" }}
          onClick={logout}
        >
          Logout
        </button>
      </nav>
      <AppRoutes />
    </div>
  );
}
