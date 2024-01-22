/* import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/faq" activeStyle>
            FAQ
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar; */

import { Link } from 'react-router-dom';
// import bitecycle_image_1 from 'src/assets/bitecycle_image_1.jpg';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img height="40px" width="40px" src={require('../assets/bitecycle_image_1.jpg')  } alt='' />
      <h1>BiteCycle</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/faq">FAQ</Link>
      </div>
    </nav>
  );
}

export default Navbar;
