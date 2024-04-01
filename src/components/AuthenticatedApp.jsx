import React from "react";
import { useAuth } from "../context/auth-context";
import { Link, Route, Routes } from "react-router-dom";
// import { NotFoundScreen } from "../pages/NotFoundScreen.jsx";
import List from "../pages/List.jsx";
import { NotFoundScreen } from "../pages/NotFoundScreen.jsx";
import FinishedScreen from "../pages/FinishedScreen.jsx";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
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
  const queryClient = new QueryClient();
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
        <Link to="/"> Home </Link>
        <Link to="/finished"> Finished </Link>
      </nav>
      <QueryClientProvider client={queryClient}>
        <AppRoutes />
      </QueryClientProvider>
    </div>
  );
}
