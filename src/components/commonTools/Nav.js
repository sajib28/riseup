import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Link,
  NavLink
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
class Nav extends Component {
  render() {
    return (
      
      <nav id="mainMenu" className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" to="/">Demo Logo</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"><FontAwesomeIcon icon={faBars} /></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink activeClassName="active" className="nav-link" to="/service">Service</NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName="active" className="nav-link" to="/work">Work</NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName="active" className="nav-link"  to="/press">Press</NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName="active" className="nav-link" to="/blog">Blog</NavLink>
              </li>

              <li className="nav-item">
                <NavLink activeClassName="active" className="nav-link" to="/career">Career</NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName="active" className="nav-link" to="/about">About Us</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
export default Nav;