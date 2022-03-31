import React, { Component } from 'react';

class Header extends Component {

    render() {
      return (
        <nav className="navbar is-primary has-shadow is-spaced" aria-label="main navigation">

            <div className="navbar-brand">
              <div className="navbar-item">
                <span className="label">Reminda: Settlements</span>
              </div>
            </div>
  
            <div id="main-menu" className="navbar-menu">
              <div className="navbar-end">
                <p className="navbar-item" to="/userinfo">
                  <span className="">Welcome Mr. User</span>
                </p>
                <p className="navbar-item" to="/signin">
                  <span className="icon">
                    <i className="fas fa-sign-in-alt" />
                  </span>
                  <span>Login</span>
                </p>
                <p className="navbar-item" to="/logout">
                  <span className="icon">
                    <i className="fas fa-sign-out-alt" />
                  </span>
                  <span>Logout</span>
                </p>
              </div>
            </div>

        </nav>
      );
    }
}

export default Header;
