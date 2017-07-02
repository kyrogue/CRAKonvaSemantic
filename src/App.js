import React, { Component } from 'react';
import './App.css';
import KonvaContainer from './KonvaContainer';
import Header from './components/Header';
class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          <Header/>
        </p>
        <KonvaContainer/>
      </div>
    );
  }
}

export default App;
