import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ReactMarkdown from 'react-markdown';

class Problem extends Component {
    static propTypes = {
        code: PropTypes.objectOf(PropTypes.any).isRequired,
        dispatch: PropTypes.func.isRequired,
    };

    render() {
        const { result } = this.props
        console.log(result)
        if (result.fetchingUpdate) {
            result.fetchingUpdate = !result.fetchingUpdate
            return (
                <ReactMarkdown source = {result.result}> </ReactMarkdown>
            )
        }
        else
            return (
                <ReactMarkdown source = {result.result}> </ReactMarkdown>
            )

    }
}

function mapStateToProps(state) {
    console.log("PROBLEM DETAIL UPDATE")
    return { result: state.problemReducer }
}
export default connect(mapStateToProps)(Problem);