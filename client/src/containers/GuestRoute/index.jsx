import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

/**
 * Component for routing a guest
 * @param {object} props - component arguments
 * 
 * @returns (
 *  <GuestRoute user={user} />
 * )
 */
const GuestRoute = props => {
  const { isAuthorized, user } = useSelector(state => state.profile);

  return isAuthorized ? <Redirect to={user.role} /> : <Route {...props} />;
}

export default GuestRoute;
