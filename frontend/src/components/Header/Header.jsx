import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeUser } from '../../redux/actionCreators/userAC';
import { useHistory, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {
  Navbar,
  Nav,
  NavItem,
  NavbarText
} from 'reactstrap';

function Header() {
  console.log('1--->', localStorage);
  console.log('2--->', localStorage.name);

  const user = useSelector((state) => state.user);

  const history = useHistory();
  const dispatch = useDispatch();
  const HomeButton = () => {
    history.push('/');
  };

  const handleLogout = () => {
    dispatch(removeUser())
    HomeButton()
  }

  useEffect(()=> {
    if(user.id) {
    }
  },[user]);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <Nav className="mr-auto" navbar>
          <NavItem>
            <Link to="/">Home</Link>
          </NavItem>

          {localStorage.name ? (
            <div>
              <Link onClick={handleLogout}>
                Logout
              </Link>
              <NavbarText>{`Hello, ${localStorage.name}!`}</NavbarText>
            </div>
          ) : (
            <div>
              <NavItem>
                <Link to="/registration">Sign Up</Link>
              </NavItem>
              <NavItem>
                <Link to="/login">Sign In</Link>
              </NavItem>
            </div>
          )}
        </Nav>
      </Navbar>
    </div>
  );
}

export default Header;
