import React from "react";
import { NavLink } from "react-router-dom";

const NavMain = () => {
  return (
    <nav>
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink exact to="/admin/dashboard">
        Dashboard
      </NavLink>
      <NavLink exact to="/admin/burger-form/create">
        Create burger
      </NavLink>
    </nav>
  );
};

export default NavMain;
