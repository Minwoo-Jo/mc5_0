import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CodeFlask from 'codeflask';
import { run } from '../action/run.js'
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar'
import LogIn from './LogIn'


export default class Header extends Component {

    render() {
        return (
            <AppBar style= {{position : 'relative', height : '100%'}}><LogIn></LogIn></AppBar>

        )
    }
}