import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAdminLoggedIn = localStorage.getItem('isAdmin') === 'true';

  if (!isAdminLoggedIn) {
    return <Navigate to="/login" />; 
  }

  return children; 
};

export default ProtectedRoute;
