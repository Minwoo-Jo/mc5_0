import React, { Component } from 'react';
import './App.css'

import Button from '@material-ui/core/Button'

import Editor from './component/Editor'
import Menu from './component/Menu'
import Header from './component/Header'
import MenuHeader from './component/MenuHeader'
import Discription from './component/Discription'
import ProblemList from './component/ProblemList'
import Problem from './component/Problem'

class App extends Component {
  state = {
    isLectureOpen: true
  }

  toggleLectureOpen = () => {
    this.setState({
      isLectureOpen: !this.state.isLectureOpen
    });
  }

  render() {
    return (
      <div className="App">
        <div className="nav" style={{ position: 'relative', height: '100%' }}>
          <span className="nav-brand"><a href="#">λ</a></span>
          <Header ></Header>
        </div>
        <div className="main">
          <div className="side">
            {/*<div className="side-header">
              <MenuHeader />
            </div>*/}
            <div className="side-content">
              <div className={"desc" + (this.state.isLectureOpen ? "" : " desc-fold")}> 
                <div className="desc-menu">
                  <Button style={{width: '100%'}} onClick={this.toggleLectureOpen}>
                    {this.state.isLectureOpen ? "<<<" : ">>>"}
                  </Button>
                  <Menu index="0" />
                </div>
                <div className={"desc-content" + (this.state.isLectureOpen ? "" : " zdesc-content-fold")}>
                  <Discription />
                </div>
              </div>
              <div className="problem">
                <div className="problem-list">LIST<ProblemList></ProblemList> </div>
                <div className="problem-content">CONTENT<Problem> </Problem></div>
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
