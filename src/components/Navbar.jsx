import React from "react";
import { Link } from "react-router-dom";

function Navbar(){
    return <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">HOME</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <li className="nav-item">
          <Link className="navbar-brand" to="/recipes">RECIPES</Link>
        </li>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            
          </ul>
        </div>
      </div>
    </nav>

}

export default Navbar;