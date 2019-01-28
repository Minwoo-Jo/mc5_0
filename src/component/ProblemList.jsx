import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectMenu } from '../action/selectMenu.js'
import Button from '@material-ui/core/Button';


class ProblemList extends Component {
    static propTypes = {
        index: PropTypes.objectOf(PropTypes.any).isRequired,
        data: PropTypes.arrayOf(PropTypes.string).isRequired,
        dispatch: PropTypes.func.isRequired,
    };
    static defaultProps = {
      data: []
    };

    handleIndex = (e) => {
        const { dispatch } = this.props;
        dispatch(selectMenu(e))
    }

 
    render() {
        const { data } = this.props;
        const list = data.map(
            info => (<Button variant="outlined">{info}</Button>)
        );
        return (
            <Fragment>
              List
              {list}
            </Fragment>
        );
    }
}


function mapStateToProps(state) {
    return {  }
}
export default connect(mapStateToProps)(ProblemList);