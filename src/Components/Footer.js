import React, { Component } from 'react';

class Footer extends Component {
  render() {

    return (
      <footer>

     <div className="row">
        <div className="twelve columns">
           <ul className="social-links">
           </ul>

           <ul className="copyright">
              <li>&copy; Copyright 2020 Ouvio Systems</li>
           </ul>

        </div>
        <div id="go-top"><a className="smoothscroll" title="Regresar al Inicio" href="#home"><i className="icon-up-open"></i></a></div>
     </div>
  </footer>
    );
  }
}

export default Footer;
