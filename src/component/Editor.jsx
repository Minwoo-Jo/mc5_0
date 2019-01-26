import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CodeFlask from 'codeflask';
import { run } from '../action/run.js'
import Button from '@material-ui/core/Button'
class Editor extends Component {

  static propTypes = {
    code: PropTypes.objectOf(PropTypes.any).isRequired,
    dispatch: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const flask = new CodeFlask('#codearea', {
      language: 'lflc',
      lineNumbers: true,
      tabSize: 2,
      handleSelfClosingCharacters: false,
      enableAutocorrect: false
    });
    const new_content = "";
    flask.elTextarea.style.fontSize = "18px";
    flask.elCode.style.fontSize = "18px";
    flask.updateCode(new_content);
    flask.addLanguage('lflc', {
      'comment': /#.*($|\n)/,
      'string': {
        pattern: /(")(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        greedy: true
      },
      'keyword': /@[A-Za-z0-9_]+|\b(?:if|print|first|second|nil|head|tail|isEmpty|I|K|S|U|Y|Z)\b/,
      'boolean': /\b(?:true|false)\b/,
      'number': /(\+|-)?[0-9]+/,
      'operator': /[-\\λ~!$%^&*=+:|<>,/?]+/,
      'punctuation': /[{}[\];().]/
    });
    flask.onUpdate((code) => {
      this.setState({
        code: flask.code
      })
    });
    flask.elTextarea.addEventListener('keydown', (e) => {
      let c = undefined;
      if (e.key === '\\') c = 'λ';
      if (c) {
        e.preventDefault();
        const selStartPos = flask.elTextarea.selectionStart;
        const selEndPos = flask.elTextarea.selectionEnd;
        const newCode = `${flask.code.substring(0, selStartPos)}${c}${flask.code.substring(selEndPos)}`;
        flask.updateCode(newCode);

        flask.elTextarea.selectionStart = selStartPos + 1;
        flask.elTextarea.selectionEnd = selStartPos + 1;
      }
    });
  }
  handleRun = (e) => {
    console.log(e)
    const code = this.state.code;

    const { dispatch } = this.props;
    code != "" ?
      dispatch(run(code)) : console.log("TEST")
  }
  render() {
    const { code } = this.props;
    console.log(this.props)
    console.log("$$$$$$")
    console.log(code)

    if (code.fetchingUpdate) {
      code.fetchingUpdate = !code.fetchingUpdate
      return <Fragment>
        <div id="codearea"></div>
        <div id="toolbar" >
          <Button onClick={this.handleRun} variant="outlined">RUN</Button><Button variant="outlined">Submit</Button>
        </div>
        <div className="console">
          <textarea value={code.code}></textarea>
        </div>

      </Fragment>

    }
    return <Fragment>
      <div id="codearea"></div>
      <div id="toolbar" >
        <Button onClick={this.handleRun} variant="outlined">RUN</Button><Button variant="outlined">Submit</Button>
      </div>
      <div className="console">
        <textarea value=""></textarea>
      </div>

    </Fragment>



  }

}

function mapStateToProps(state) {
  console.log("###")
  console.log(state)
  return { code: state.runReducer }
}

export default connect(mapStateToProps)(Editor);
