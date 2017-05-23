import React, { Component } from 'react';

import Header from './Header';
import PersonList from './PersonList';
import jsonData from '../../public/data/people.json';
import '../css/App.css';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = jsonData;
    }
    render() {
        console.log(jsonData);
        return (
            <div>
                <Header />
            

                <PersonList people={this.state.people} />
            </div>
        );
    }
}