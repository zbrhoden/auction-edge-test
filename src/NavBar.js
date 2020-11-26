import React from "react";
import { AppBar } from '@material-ui/core'
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <AppBar>
      <div className="App-navbar">
        <NavLink className="App-link" to="/">
          HOME
        </NavLink>
      </div>
    </AppBar>
  );
}

export default NavBar;
