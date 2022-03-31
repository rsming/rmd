import React, { Component } from 'react';
import './Header.css';

class Header extends Component {

    componentDidMount() {
        // $(".navbar-burger").click(function () {
        // 	$(".navbar-burger").toggleClass("is-active");
        // 	$(".navbar-menu").toggleClass("is-active");
        // });
        // $(".navbar-item").click(function () {
        // 	$(".navbar-burger").toggleClass("is-active");
        // 	$(".navbar-menu").toggleClass("is-active");
        // });
    }

    render() {
      return (
        <nav className="navbar is-primary has-shadow is-spaced" aria-label="main navigation">
          <div className="container">
            <div className="navbar-brand">

              <div className="navbar-start">
                <span>Settlements</span>
              </div>

              <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="main-menu">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
              
            </div>
  
            <div id="main-menu" className="navbar-menu">
              <div className="navbar-end">
                <span>Login</span>
              </div>
            </div>
          </div>
        </nav>
      );
    }
}

export default Header;
