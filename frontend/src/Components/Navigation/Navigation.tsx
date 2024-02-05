import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom"
import React from "react";
import "./Navigation.scss";

const Navigation = () => {


    return (
        <Fragment>
          <div className="navigation">
          <div className="nav-links-container">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/signin">Sign In</Link>
            <Link className="nav-link" to="/signup">Sign Up</Link>
            </div>
            </div>
            <Outlet/>
        </Fragment>
    );
  }


export default Navigation;