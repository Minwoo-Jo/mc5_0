import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CodeFlask from 'codeflask';
import { selectMenu } from '../action/selectMenu.js'
import Button from '@material-ui/core/Button';


class Menu extends Component {
    static propTypes = {
        index: PropTypes.objectOf(PropTypes.any).isRequired,
        dispatch: PropTypes.func.isRequired,
    };
    handleIndex = (e) => {
        const { dispatch } = this.props;
        dispatch(selectMenu(e))
    }

 
    render() {
        return (
            <Fragment>
                <Button variant="outlined" style={{width:'100%', height:'9%'}}>CH 1.</Button>
                <Button variant="outlined" style={{width:'100%', height:'9%'}}>CH 2.</Button>
                <Button variant="outlined" style={{width:'100%', height:'9%'}}>CH 3.</Button>
                <Button variant="outlined" style={{width:'100%', height:'9%'}}>CH 4.</Button>
                <Button variant="outlined" style={{width:'100%', height:'9%'}}>CH 5.</Button>
                <Button variant="outlined" style={{width:'100%', height:'9%'}}>CH 6.</Button>
                <Button variant="outlined" style={{width:'100%', height:'9%'}}>CH 7.</Button>
                <Button variant="outlined" style={{width:'100%', height:'9%'}}>CH 8.</Button>
                <Button variant="outlined" style={{width:'100%', height:'9%'}}>CH 9.</Button>
                <Button variant="outlined" style={{width:'100%', height:'9%'}}>CH 10.</Button>
            </Fragment>

        )
    }
}


function mapStateToProps(state) {
    return {  }
}
export default connect(mapStateToProps)(Menu);