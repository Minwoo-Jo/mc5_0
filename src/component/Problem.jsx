import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Problem extends Component {
    static propTypes = {
        code: PropTypes.objectOf(PropTypes.any).isRequired,
        dispatch: PropTypes.func.isRequired,
    };

    render() {
        const { result } = this.props
        console.log("@!#@#!!@#!@#!#@!@##!@!@#!@#")
        console.log(result)
        if (result.fetchingUpdate) {
            result.fetchingUpdate = !result.fetchingUpdate
            return (
                <div>{result.result}</div>
            )
        }
        else
            return (
                <div>{result.result}</div>
            )

    }
}

function mapStateToProps(state) {
    console.log("PROBLEM DETAIL UPDATE")
    console.log(state)
    return { result: state.problemReducer }
}
export default connect(mapStateToProps)(Problem);