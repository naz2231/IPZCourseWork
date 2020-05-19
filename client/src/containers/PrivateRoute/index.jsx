import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

/**
 * Component for private routing
 * 
 * 
 * @param {object} props - component arguments
 * 
 * @returns (
 *  <PrivateRoute />
 * )
 */
const PrivateRoute = (props) => {
  const { isAuthorized } = useSelector((state) => state.profile);

  return isAuthorized ? <Route {...props } /> : <Redirect to='/login' />;
};

export default PrivateRoute;
