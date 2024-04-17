import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import List from '../pages/List.jsx';
import { NotFoundScreen } from '../pages/NotFoundScreen.jsx';
import FinishedScreen from '../pages/FinishedScreen.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useAuth } from '../context/auth-context.jsx';
import Cart from '../pages/Cart.jsx';
import Product from '@/pages/Product.jsx';
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<List />} />
      <Route path="/finished" element={<FinishedScreen />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="*" element={<NotFoundScreen />} />
    </Routes>
  );
}

export default function AuthenticatedApp() {
  const { user, logout } = useAuth();
  const queryClient = new QueryClient();
  return (
    <div className="min-h-screen flex flex-col">
      <nav>
        <div className="min-h-[125px] bg-green-primary text-white">
          <button variant="secondary" css={{ marginLeft: '10px' }} onClick={logout}>
            Logout
          </button>
          <Link to="/"> Home </Link>
          <Link to="/finished"> Finished </Link>
        </div>

        <div className="lg:flex justify-between items-center py-2 px-8 bg-gray-100 uppercase text-sm font-semibold hidden ">
          <Link to="/"> Products </Link>
          <Link to="/"> My Quotes </Link>
          <Link to="/"> My Orders </Link>
          <Link to="/"> Contact Us </Link>
          <Link to="/"> Tutorial </Link>
        </div>
      </nav>
      <div className="flex-1 ">
        <QueryClientProvider client={queryClient}>
          <AppRoutes />
        </QueryClientProvider>
      </div>
      <div>Footer</div>
    </div>
  );
}
