import React, { Component } from 'react';

import Header from './Header';
import Footer from './Footer';
import PersonList from './PersonList';
import jsonData from '../../public/data/people.json';
import '../css/App.css';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = jsonData;
    }
    render() {
        return (
            <div>
                <Header />
                <PersonList people={this.state.people} />
                <Footer />
            </div>
        );
    }
}