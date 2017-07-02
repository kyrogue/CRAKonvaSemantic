import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Sidepopup from './components/Sidepopup';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      isOpen: false
    }
  }

  toggleSidebar = () => {
    this.setState({isOpen: !this.state.isOpen})
  }

  render() {
    return (
      <div className="App">
        <p className="App-intro">
          <Header toggleSidebar={this.toggleSidebar}/>
        </p>
        <Sidepopup isOpen={this.state.isOpen}/>
      </div>
    );
  }
}

export default App;
