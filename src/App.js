import React, { Component } from 'react';
import './styles/App.css';
import Navbar from './components/common/Navbar.jsx'

class App extends Component {
  render() {
    return (
      <div className="">
      <Navbar /> 
      <div className="container">
        {this.props.children}
      </div>
      </div>
    );
  }
}

export default App;
