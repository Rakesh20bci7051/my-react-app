import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { isLoggedIn } from '../auth';

const PrivateRoute = () => {
  if (isLoggedIn()) { // Note the addition of parentheses to invoke isLoggedIn
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
};

export default PrivateRoute;
