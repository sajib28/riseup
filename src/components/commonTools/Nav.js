import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Link,
  NavLink
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
class Nav extends Component {
  componentDidMount() {
    window.onscroll = function () { headerFixed() };
    let header = document.getElementById("mainMenu");
    let sticky = header.offsetTop;

    function headerFixed() {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky-header");
      } else {
        header.classList.remove("sticky-header");
      }
    }
  }
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     menuPositon: false
  //   };

  //   this.handleScroll = this.handleScroll.bind(this);
  // }
  // componentDidMount() {
  //   window.addEventListener('scroll', this.handleScroll);
  // }
  // componentWillUnmount() {
  //   window.removeEventListener('scroll', this.handleScroll);
  // }
  // handleScroll(event) {
  //   if (window.scrollY >= 0) {
  //     // alert('scroll');
  //     this.setState({
  //       menuPositon: false
  //     });
  //     if (window.scrollY >= 100) {
  //       // alert('scroll');
  //       this.setState({
  //         menuPositon: true
  //       });

  //     }
  //   }
  //   else{
  //     this.setState({
  //       menuPositon: false
  //     });
  //   }

  // }
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
                <NavLink activeClassName="active" className="nav-link" to="/press">Press</NavLink>
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