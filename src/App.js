import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    currentPage : "index"
  }
  render() {
    const RenderedPage = React.createElement(
      this.state.currentPage,
      null
    )

    return(
      <div className="App">
        { RenderedPage }
      </div>
    )
  };
}

export default App;
