import React, { Component } from 'react';
import {Link} from 'react-router'; 

class Navbar extends Component {
  render() {
    return (
      <div className=""> 
        <nav className="navbar navbar-default navbar-static-top">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <Link to="/" className="navbar-brand"> home </Link> 
           </div>
            <div id="navbar" className="navbar-collapse collapse">
              <ul className="nav navbar-nav navbar-right">
                <li>
          <Link to="/events/new" activeStyle={{ color: '#000000' }}> new </Link> 
                </li>
              </ul>
            </div>
          </div>
        </nav>

      </div> 
    ); 
  }
}

export default Navbar ;
