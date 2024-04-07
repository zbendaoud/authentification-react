import React from 'react';

import { Link, Route, Routes } from 'react-router-dom';
import RedirectToLogin from '../pages/unAuthApp/RedirectToLogin.jsx';
import Login from '../pages/unAuthApp/Login.jsx';
import Register from '../pages/unAuthApp/Register.jsx';
import backgroundImage from '../assets/house.jpg';
import Footer from '../components/Footer.jsx';

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
    // <div
    //   className=" w-full h-full  "
    //   style={{
    //     backgroundImage: `url(${backgroundImage})`,
    //     height: '100%',
    //     backgroundPosition: 'center',
    //     backgroundRepeat: 'no-repeat',
    //     backgroundSize: 'cover'
    //   }}>
    //   <div className="flex justify-center space-x-4 py-2">
    //     <Link to="/login"> login </Link>
    //     <Link to="/register"> register </Link>
    //   </div>
    //   <div className="py-2">
    //     <AppRoutes />
    //   </div>
    //   <Footer>
    //     <div>hey hey</div>
    //   </Footer>
    // </div>
    <div
      className="flex flex-col h-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}>
      <nav className="flex justify-center space-x-4 py-2">
        <Link to="/login"> login </Link>
        <Link to="/register"> register </Link>
      </nav>

      <div className="flex-grow  py-2  ">
        {' '}
        {/* overflow-y-auto */}
        <AppRoutes />
      </div>
      <Footer>
        <div className="flex flex-col-reverse  h-full w-full" style={{ border: '1px red solid' }}>
          <div className="flex h-1/3  w-1/3 items-center justify-center bg-blue-300">01</div>
          <div className="flex h-1/3 w-1/3 items-center justify-center bg-green-300">02</div>
          <div className="flex h-1/3 w-1/3 items-center justify-center bg-yellow-300">03</div>
        </div>
      </Footer>
    </div>
  );
}

export default UnauthenticatedApp;
