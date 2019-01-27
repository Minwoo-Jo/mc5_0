import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectMenu } from '../action/selectMenu.js';


class Discription extends Component {
    static propTypes = {
        user: PropTypes.objectOf(PropTypes.any).isRequired,
        dispatch: PropTypes.func.isRequired,
    };
  
    render() {
        <div></div>
    }
}

function mapStateToProps(state) {
    return { user: state.user }
}
export default connect(mapStateToProps)(Login);