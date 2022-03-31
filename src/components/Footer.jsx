import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer className="footer has-background-white-ter">
        <div className="columns">

          <div className="column is-4">
          </div>

          <div className="column is-4 has-text-centered">
            <h4 className="bd-footer-title">Copyright &copy; 2022. All rights reserved.</h4>
          </div>
          
        </div>
      </footer>
    );
  }
}

export default Footer;
