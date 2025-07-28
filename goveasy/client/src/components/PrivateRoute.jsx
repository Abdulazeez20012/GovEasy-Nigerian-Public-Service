import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const auth = { token: localStorage.getItem('token') }; // Replace with actual auth context
  return auth.token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
