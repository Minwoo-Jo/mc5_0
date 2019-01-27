import React, { Component } from 'react';
import './App.css'

import ReactMarkdown from 'react-markdown';

import Editor from './component/Editor';
import Menu from './component/Menu';
import Header from './component/Header';
import MenuHeader from './component/MenuHeader';
import ProblemList from './component/ProblemList';

class App extends Component {
  state = {
    lectureMarkdown: '# Not Loaded',
    problemMarkdown: '# Not Loaded',
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
          <span className="nav-brand">λ</span>
          <Header ></Header>
        </div>
        <div className="main">
          <div className="side">
            <div className="side-header">
              <MenuHeader></MenuHeader>
            </div>
            <div className="side-content">
              <div className="desc"> 
                <div className="desc-menu">
                  <span onClick={this.toggleLectureOpen}>Menu</span>
                  <Menu></Menu>
                </div>
                { this.state.isLectureOpen?
                    ( <div className="desc-content">
                        CONTENT
                        <ReactMarkdown source={this.state.lectureMarkdown}/>
                      </div> )
                  : "" }
                
              </div>
              <div className="problem">
                <div className="problem-list">
                  <ProblemList data={["abc", "def", "3", "4", "5", "6", "7"]} />
                </div>
                <div className="problem-content">
                  CONTENT
                  <ReactMarkdown source={this.state.problemMarkdown}/>
                </div>
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
