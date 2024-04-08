import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import RedirectToLogin from '../pages/unAuthApp/RedirectToLogin.jsx';
import Login from '../pages/unAuthApp/Login.jsx';
import Register from '../pages/unAuthApp/Register.jsx';
import Footer from '../components/Footer.jsx';
import PartFooter from '../core/Footer/PartFooter.jsx';
import WrapperBackGround from '../components/WrapperBackGround.jsx';
import SocialMedia from '../components/Footer/SocialMedia.jsx';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<RedirectToLogin />} />{' '}
    </Routes>
  );
}

function UnauthenticatedApp() {
  return (
    <WrapperBackGround>
      <nav className="flex justify-center space-x-4 py-2">
        <Link to="/login"> login </Link>
        <Link to="/register"> register </Link>
      </nav>

      <div className="flex-grow py-2">
        <AppRoutes />
      </div>
      <Footer>
        <div className="flex flex-col lg:flex-row-reverse h-full w-full">
          <PartFooter width="3/6">
            <SocialMedia />
          </PartFooter>
          <PartFooter width="2/6">head office</PartFooter>
          <PartFooter width="1/6">locale office</PartFooter>
        </div>
      </Footer>
    </WrapperBackGround>
  );
}

export default UnauthenticatedApp;
