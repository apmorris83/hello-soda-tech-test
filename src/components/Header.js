import React, { Component } from 'react';

import logo from '../../public/images/logo.svg';
import '../css/Header.css';

export default class Header extends Component {
    render() {
        return (
            <div className="jumbotron vertical-center">
                <div className="container logo-svg">
                    <img src={logo} alt="hello-soda-logo"/>
                </div>
            </div>
        );
    }
}