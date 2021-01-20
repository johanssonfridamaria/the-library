import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {

  const isAuth = useSelector(state => state.auth.isAuthenticated);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" exact to="/">THE LIBRARY</NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse justify-content-between" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-link" exact to="/">Home</NavLink>
            <NavLink className="nav-link" exact to="/books">Library</NavLink>
            <NavLink className="nav-link" exact to="/categories">Categories</NavLink>
          </div>
          {/* <ul class="navbar-nav"> */}
          <div class="navbar-nav dropdown">
            <a
              href="!#"
              class="nav-link dropdown-toggle"
              // id="navbarDropdownMenuLink"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            > <i class="fas fa-user me-2"></i>
                Admin
            </a>
            <div class="dropdown-menu">
              {
                isAuth ? <NavLink class="dropdown-item m-0" exact to="/signin">Sign in</NavLink>
                  : <p class="dropdown-item m-0">Sign out</p>
              }
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar