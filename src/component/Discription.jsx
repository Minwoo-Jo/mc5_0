import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectMenu } from '../action/selectMenu.js';

class Discription extends Component {
    static propTypes = {
        index: PropTypes.objectOf(PropTypes.any).isRequired,
        dispatch: PropTypes.func.isRequired,
    };
  
    render() {
        const { index } = this.props
        return( 
            <div>{index}</div>

        )
           
    }
}

function mapStateToProps(state) {
    console.log("DISCRIPTION UPDATE")
    return { index: state.menuReducer.index }
}
export default connect(mapStateToProps)(Discription);