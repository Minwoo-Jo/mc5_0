import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectMenu } from '../action/selectMenu.js';
import Markdown from './Markdown'
import ReactMarkdown from 'react-markdown';
class Discription extends Component {
    static propTypes = {
        index: PropTypes.objectOf(PropTypes.any).isRequired,
        dispatch: PropTypes.func.isRequired,
    };


    render() {

        const { index, text } = this.props.data

        return (
            <Fragment>
                <div>{index}</div> 
                <ReactMarkdown source = {text}> </ReactMarkdown>

     
            </Fragment>
        )

    }
}

function mapStateToProps(state) {
    console.log("DISCRIPTION UPDATE")
    return { data: state.menuReducer }
}
export default connect(mapStateToProps)(Discription);

// export default class TestComponent extends React.Component {

//     render() {
//         return (
           
//         );
//     }
// }
// export default class BlogPost1 extends React.Component {
//     render() {
//         return (
//             <TestComponent />
//         );
//     }
// }