import React, {  useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeUser } from '../../redux/actionCreators/userAC';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {
  Navbar,
  Nav,
  NavItem,
  NavbarText
} from 'reactstrap';

function Header() {
  const user = useSelector((state) => state.user);
  const history = useHistory();
  const dispatch = useDispatch();
  const HomeButton = () => {
    history.push('/');
  };

  const handlerLogout = () => {
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
              <Link onClick={handlerLogout}>
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
