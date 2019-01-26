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
        const { discription } = this.props;
        console.log(this.props)
        console.log(user)
        return (
            user
                ? <div>로그인 성공</div>
                :
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <span>아이디</span>
                        <input ref={(ref) => { this.id = ref; }} />
                    </label>
                    <label>
                        <span>비밀번호</span>
                        <input type="password" ref={(ref) => { this.password = ref; }} />
                    </label>
                    <button onClick={this.handleSubmit}>LOGIN</button>
                </form>
                
        );
    }
}

function mapStateToProps(state) {
    return { user: state.user }
}
export default connect(mapStateToProps)(Login);