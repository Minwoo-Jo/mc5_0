import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../action/user.js';

class Login extends Component {
    static propTypes = {
        user: PropTypes.objectOf(PropTypes.any).isRequired,
        dispatch: PropTypes.func.isRequired,
    };

    handleLogIn = (e) => {
        e.preventDefault();
        const { dispatch } = this.props;
        const id = this.id.value;
        const pw = this.password.value;
        dispatch(login(id, pw));
    };
    handleSignIn = (e) => {

    }


    render() {
        const { user } = this.props;
        return (
            user.isLoggedIn
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
                    <button onClick={this.handleLogIn}>LOG IN</button>
                    <button onClick={this.handleSignIn}>SIGN IN</button>
                </form>
                
        );
    }
}

function mapStateToProps(state) {
    console.log("LOGIN UPDATE")
    return { user: state.userReducer }
}
export default connect(mapStateToProps)(Login);