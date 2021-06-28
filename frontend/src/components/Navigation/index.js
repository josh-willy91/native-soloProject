// frontend/src/components/Navigation/index.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  const loggedInUser = useSelector((state) => {
    if(!state.session.user) return null;
    return state.session.user.id
  });

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    <ul className="navbar">
      <li className="navList">
        <NavLink exact to="/" className="navLink">Home</NavLink>
        {isLoaded && sessionLinks}
      </li>
      <li hidden={loggedInUser ? false: true}>
        <NavLink to={`/userProfile/${loggedInUser}`} className="navLink">Profile</NavLink>
      </li>
    </ul>
  );
}

export default Navigation;
