import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button'
import { selectProblem } from '../action/selectProblem'

class ProblemList extends Component {
    static propTypes = {
        index: PropTypes.objectOf(PropTypes.any).isRequired,
        dispatch: PropTypes.func.isRequired,
    };

    handleDetail = (chap) => ( index ) => {

        const { dispatch } = this.props;
        dispatch(selectProblem(chap)(index))
    }

  
    render() {
        const {index} = this.props;
        const chap = index;
        const list = Array(index)
        for(var i =0 ; i < index; i++){
            list[i] = i;
        }
        const result = list.map((index) => {
            return (
                <Button size ="small" style={{width:"100%", height:"5%"}} onClick={()=> this.handleDetail(chap)(index)}>{index}</Button>
            )
        })
        
        return( 
            <div>{result}</div>

        )
           
    }
}

function mapStateToProps(state) {
    console.log("PROBELM LIST UPDATE")
    return { index: state.menuReducer.index }
}
export default connect(mapStateToProps)(ProblemList);