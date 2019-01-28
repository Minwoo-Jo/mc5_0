import React, { Component } from 'react';
import './App.css'

import ReactMarkdown from 'react-markdown';

import Button from '@material-ui/core/Button';

import Editor from './component/Editor';
import Menu from './component/Menu';
import Header from './component/Header';
import MenuHeader from './component/MenuHeader';
import ProblemList from './component/ProblemList';

class App extends Component {
  state = {
    lectureMarkdown: `
하지만 아쉽게도 LFLC에서는 이 두가지 모두 다 작성이 불가능합니다. 우선 첫번째로 반복문이 없고, 두번째로는 재귀호출이 없기 때문입니다. 아래의 경우 sum을 정의한 람다 내에 sum이 있습니다. 하지만, LFLC에서는 위와 같은 코드는 다음과 같이 바뀝니다.

\`\`\`lflc
(λn. if (n == 0) 0 (n + sum (n - 1))) =: λsum.
  ...
\`\`\`

즉, \`λsum. ...\`이라는 함수 **밖에서** sum을 호출하려고 하고 있는 것이죠. \`=:\` 좌변에서는 sum에 관한 그 어떤 정보도 없기 때문에 이 코드는 \`sum\`이 바인딩 되지 않았다고 나오면서 컴파일 에러가 나옵니다.
하지만 아쉽게도 LFLC에서는 이 두가지 모두 다 작성이 불가능합니다. 우선 첫번째로 반복문이 없고, 두번째로는 재귀호출이 없기 때문입니다. 아래의 경우 sum을 정의한 람다 내에 sum이 있습니다. 하지만, LFLC에서는 위와 같은 코드는 다음과 같이 바뀝니다.

하지만 아쉽게도 LFLC에서는 이 두가지 모두 다 작성이 불가능합니다. 우선 첫번째로 반복문이 없고, 두번째로는 재귀호출이 없기 때문입니다. 아래의 경우 sum을 정의한 람다 내에 sum이 있습니다. 하지만, LFLC에서는 위와 같은 코드는 다음과 같이 바뀝니다.
하지만 아쉽게도 LFLC에서는 이 두가지 모두 다 작성이 불가능합니다. 우선 첫번째로 반복문이 없고, 두번째로는 재귀호출이 없기 때문입니다. 아래의 경우 sum을 정의한 람다 내에 sum이 있습니다. 하지만, LFLC에서는 위와 같은 코드는 다음과 같이 바뀝니다.

하지만 아쉽게도 LFLC에서는 이 두가지 모두 다 작성이 불가능합니다. 우선 첫번째로 반복문이 없고, 두번째로는 재귀호출이 없기 때문입니다. 아래의 경우 sum을 정의한 람다 내에 sum이 있습니다. 하지만, LFLC에서는 위와 같은 코드는 다음과 같이 바뀝니다.
즉, \`λsum. ...\`이라는 함수 **밖에서** sum을 호출하려고 하고 있는 것이죠. \`=:\` 좌변에서는 sum에 관한 그 어떤 정보도 없기 때문에 이 코드는 \`sum\`이 바인딩 되지 않았다고 나오면서 컴파일 에러가 나옵니다.
하지만 아쉽게도 LFLC에서는 이 두가지 모두 다 작성이 불가능합니다. 우선 첫번째로 반복문이 없고, 두번째로는 재귀호출이 없기 때문입니다. 아래의 경우 sum을 정의한 람다 내에 sum이 있습니다. 하지만, LFLC에서는 위와 같은 코드는 다음과 같이 바뀝니다.

하지만 아쉽게도 LFLC에서는 이 두가지 모두 다 작성이 불가능합니다. 우선 첫번째로 반복문이 없고, 두번째로는 재귀호출이 없기 때문입니다. 아래의 경우 sum을 정의한 람다 내에 sum이 있습니다. 하지만, LFLC에서는 위와 같은 코드는 다음과 같이 바뀝니다.
하지만 아쉽게도 LFLC에서는 이 두가지 모두 다 작성이 불가능합니다. 우선 첫번째로 반복문이 없고, 두번째로는 재귀호출이 없기 때문입니다. 아래의 경우 sum을 정의한 람다 내에 sum이 있습니다. 하지만, LFLC에서는 위와 같은 코드는 다음과 같이 바뀝니다.

하지만 아쉽게도 LFLC에서는 이 두가지 모두 다 작성이 불가능합니다. 우선 첫번째로 반복문이 없고, 두번째로는 재귀호출이 없기 때문입니다. 아래의 경우 sum을 정의한 람다 내에 sum이 있습니다. 하지만, LFLC에서는 위와 같은 코드는 다음과 같이 바뀝니다.
`,
    problemMarkdown: `
하지만 아쉽게도 LFLC에서는 이 두가지 모두 다 작성이 불가능합니다. 우선 첫번째로 반복문이 없고, 두번째로는 재귀호출이 없기 때문입니다. 아래의 경우 sum을 정의한 람다 내에 sum이 있습니다. 하지만, LFLC에서는 위와 같은 코드는 다음과 같이 바뀝니다.

\`\`\`lflc
(λn. if (n == 0) 0 (n + sum (n - 1))) =: λsum.
  ...
\`\`\`

즉, \`λsum. ...\`이라는 함수 **밖에서** sum을 호출하려고 하고 있는 것이죠. \`=:\` 좌변에서는 sum에 관한 그 어떤 정보도 없기 때문에 이 코드는 \`sum\`이 바인딩 되지 않았다고 나오면서 컴파일 에러가 나옵니다.
하지만 아쉽게도 LFLC에서는 이 두가지 모두 다 작성이 불가능합니다. 우선 첫번째로 반복문이 없고, 두번째로는 재귀호출이 없기 때문입니다. 아래의 경우 sum을 정의한 람다 내에 sum이 있습니다. 하지만, LFLC에서는 위와 같은 코드는 다음과 같이 바뀝니다.

하지만 아쉽게도 LFLC에서는 이 두가지 모두 다 작성이 불가능합니다. 우선 첫번째로 반복문이 없고, 두번째로는 재귀호출이 없기 때문입니다. 아래의 경우 sum을 정의한 람다 내에 sum이 있습니다. 하지만, LFLC에서는 위와 같은 코드는 다음과 같이 바뀝니다.
하지만 아쉽게도 LFLC에서는 이 두가지 모두 다 작성이 불가능합니다. 우선 첫번째로 반복문이 없고, 두번째로는 재귀호출이 없기 때문입니다. 아래의 경우 sum을 정의한 람다 내에 sum이 있습니다. 하지만, LFLC에서는 위와 같은 코드는 다음과 같이 바뀝니다.

하지만 아쉽게도 LFLC에서는 이 두가지 모두 다 작성이 불가능합니다. 우선 첫번째로 반복문이 없고, 두번째로는 재귀호출이 없기 때문입니다. 아래의 경우 sum을 정의한 람다 내에 sum이 있습니다. 하지만, LFLC에서는 위와 같은 코드는 다음과 같이 바뀝니다.

    `,
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
              <div className={ "desc " + (this.state.isLectureOpen? "" : "desc-fold") }>
                <div className="desc-menu">
                  <Button onClick={this.toggleLectureOpen}>
                    { this.state.isLectureOpen? "<<<" : ">>>" }
                  </Button>
                  <Menu></Menu>
                </div>
                <div className="desc-content">
                  CONTENT
                  <div className="markdown">
                    <ReactMarkdown source={this.state.lectureMarkdown}/>
                  </div>
                </div>
              </div>
              <div className="problem">
                <div className="problem-list">
                  <ProblemList data={["abc", "def", "3", "4", "5", "6", "7"]} />
                </div>
                <div className="problem-content">
                  CONTENT
                  <div className="markdown">
                    <ReactMarkdown source={this.state.problemMarkdown}/>
                  </div>
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
