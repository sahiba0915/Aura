import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {

  const state = useSelector((state) => state.handleCart);
  const { user, loginWithRedirect, logout, isAuthenticated } = useAuth0();


  return (
    <div>
      <nav className="navbar navbar-expand-lg py-1 shadow-lg">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-2" to="/">
            <i className="fa fa-snowflake-o">Aura</i>
          </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 fs-6">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">Products</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">Contact</NavLink>
              </li>
              {
                isAuthenticated &&(
                <li className="nav-item">
                <NavLink className="nav-link" to='/profile'>
                  <p>{user.name}</p>
                </NavLink>
                </li>)
              }

            </ul>
            <div className="buttons">
              {
                isAuthenticated ?
                  (
                    <NavLink to="/logout">
                      <button onClick={() => logout({ returnTo: window.location.origin })} class="btn btn-outline-dark">Log Out
                      </button></NavLink>
                  ) :
                  (
                    <NavLink to="/login">
                      <button onClick={() => loginWithRedirect()} class="btn btn-outline-dark">Log In</button>
                    </NavLink>
                  )
              }


              <NavLink to="/cart" className="btn btn-outline-dark ms-2">
                <i className="fa fa-cart-plus me-1"> Cart({state.length})</i>
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar