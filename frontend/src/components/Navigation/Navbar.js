import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// import  { useHistory } from 'react-router-dom';
import { logout } from '../../store/actions/authenticate'

const Navbar = () => {

  const isAuth = useSelector(state => state.auth.isAuthenticated);
  const dispatch = useDispatch()

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
            <NavLink className="nav-link" exact to="/books">Books</NavLink>
            <NavLink className="nav-link" exact to="/categories">Categories</NavLink>
          </div>
          <div className="navbar-nav dropdown">
            <a
              href="#"
              className="nav-link dropdown-toggle"
              id="navbarDropdownMenuLink"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            > <i className="fas fa-user me-2"></i>
                Admin
            </a>
            <div className="dropdown-menu">
              {
                isAuth ? <p className="dropdown-item m-0" onClick={() => dispatch(logout())}>Sign out</p>
                  : <NavLink className="dropdown-item m-0" exact to="/login">Sign in</NavLink>
              }
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar