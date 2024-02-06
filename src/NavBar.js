import React from "react";
import { Link } from "react-router-dom"

function NavBar() {
    //must render this inside the BrowserRouter on App.js page
  return (
    <nav>
        <Link to="/">
            Home
        </Link>
        <Link to="/soda">
            Soda
        </Link>
        <Link to="/chips">
            Chips
        </Link>
        <Link to="/freshSardines">
            Fresh Sardines
        </Link>
    </nav>
  );
}

export default NavBar;