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
        console.log("INDEX")
        console.log(e)
        dispatch(selectMenu(e))
    }

    render() {
        const list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

        const { index } = this.props.state
        const result = list.map((_) => {
            if (index == _)
                return (
                    <Button variant="outlined" style={{ width: '100%', height: '9%' }} onClick={() => this.handleIndex(_)}>CH {index + 1}.</Button>
                )
            else
                return (
                    <Button style={{ width: '100%', height: '9%' }} onClick={() => this.handleIndex(_)}>CH {_ + 1}.</Button>
                )
        })
        if (this.props.fetchingUpdate) {
            this.props.fetchingUpdate = !this.props.fetchingUpdate
            return (

                <Fragment>
                    {result}
                </Fragment>
            )
        }
        else
            return (

                <Fragment>
                    {result}
                </Fragment>
            )

    }
}


function mapStateToProps(state) {
    console.log("MENU INDEX UPDATE")
    console.log(state)
    return { state: state.menuReducer }
}
export default connect(mapStateToProps)(Menu);