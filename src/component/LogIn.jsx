import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../action/user.js';

class Login extends Component {
    static propTypes = {
        user: PropTypes.objectOf(PropTypes.any).isRequired,
        dispatch: PropTypes.func.isRequired,
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { dispatch } = this.props;
        const id = this.id.value;
        const pw = this.password.value;
        dispatch(login(id, pw));
        console.log(this.props)
    };


    render() {
        const { user } = this.props;
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