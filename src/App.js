import React, { Component } from 'react';
import './App.css'

class App extends Component {
  state = {
    isOpen: false
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className="App">
        <div className="nav"> abc </div>
        <div className="main">
          <div className="desc">
            <div className="desc-menu">menu</div>
            <div className="desc-content">content</div>
          </div>
          <div className="problem">
            <div className="problem-list">list</div>
            <div className="problem-content">content</div>
          </div>
          <div className="workspace">
            <div className="editor">
              <textarea></textarea>
            </div>
            <div className="console">
              <textarea></textarea>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
