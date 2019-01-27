import React, { Component } from 'react';
import './App.css'
import Editor from './component/Editor'
import Menu from './component/Menu'
import Header from './component/Header'
import MenuHeader from './component/MenuHeader'
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
        <div className="nav" style={{ position: 'relative', height: '100%' }}> <Header ></Header> </div>
        <div className="main">
          <div className="side">
            <div className="side-header">
              <MenuHeader></MenuHeader>
            </div>
            <div className="side-content">
              <div className="desc"> 
                <div className="desc-contents">
                  <div className="desc-menu">MENU<Menu></Menu></div>
                  <div className="desc-content">CONTENT</div>
                </div>
              </div>
              <div className="problem">
                <div className="problem-list">LIST</div>
                <div className="problem-content">CONTENT</div>
              </div>
            </div>
          </div>
          <div className="workspace">
            <div className="editor" style={{ position: 'relative', height: '100%' }}>
              <Editor></Editor>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
