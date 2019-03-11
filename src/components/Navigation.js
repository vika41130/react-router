import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
      <div>
        <NavLink to="/">Home</NavLink> <br />
        <NavLink to="/contacts">Contacts</NavLink> <br />
        <NavLink to="/about">About</NavLink>
      </div>
    );
  };

  export default Navigation;