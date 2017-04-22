import React, { Component } from 'react';
import Header from './Header';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div>
          <Header/>
          <br/>
              {this.props.children}
          <br/>
      </div>
    );
  }
}

export default App;
