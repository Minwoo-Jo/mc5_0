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

    handleDetail = ( md, js ) => {
        console.log("TEST DETAIL")
        console.log(md)
        const { dispatch } = this.props;
        dispatch(selectProblem(md , js))
    }

  
    render() {
        const {index, problems} = this.props.state;
        const chap = index;
        
        console.log(problems)
        const probs = problems.map((prob) => {
            return ({
                js : Function(prob.js)(),
                md : prob.md,
        })})
        

        console.log(probs)
      
        const result = probs.map((prob) => {
            return (
                <Button size ="small" style={{width:"100%", height:"5%"}} onClick={()=> this.handleDetail(prob.md , prob.js)}>{prob.js.title}</Button>
            )
        })
        
        return( 
            <div>{result}</div>

        )
           
    }
}

function mapStateToProps(state) {
    console.log("PROBELM LIST UPDATE")
    return { state: state.menuReducer }
}
export default connect(mapStateToProps)(ProblemList);