import React, { Component } from 'react';
import './App.css';
import Index from './pages/Index';
import ParallaxBackground from './modules/ParallaxBackground'
import Header from './modules/Header'

class App extends Component {
  state = {
    currentPage : "Index"
  };
  Components = {
    Index : Index
  }
  render() {
    var CurrentPageComponent = this.Components[this.state.currentPage]

    return(
      <div className="App">
        <ParallaxBackground />
        <Header />
        <div className="content-container">
          <div className="content">
            <CurrentPageComponent />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          </div>
        </div>
      </div>
    )
  };
}

export default App;
