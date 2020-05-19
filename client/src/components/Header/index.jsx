import React from 'react';
import { Header as SHeader, Segment, Button } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';

import { logout } from './../../containers/LoginPage/actions';
/**
 * Component for diaplying the username and logout button at top of the windows
 * 
 * 
 * @param {object} props - component arguments
 * @param {string} props.username - the username of loged user
 * 
 * @returns (
 *  <Header username={username} />
 * )
 */
const Header = ({ username }) => {
  const dispatch = useDispatch();
  let name = username.slice(1);
  name = name[0].toUpperCase() + name.slice(1);
  return (
    <Segment clearing>
      <SHeader as="h2" floated='right'>
        <Button onClick={e => {
          e.stopPropagation();
          dispatch(logout())
        }}>Logout</Button>
      </SHeader>
      <SHeader as="h2" floated='left'>
        { name }
      </SHeader>
    </Segment>
  )
}

export default Header;
