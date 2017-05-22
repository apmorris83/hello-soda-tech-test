import React, { Component } from 'react';

import Header from './Header';
import jsonData from '../../public/data/people.json';

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
                <h1>{this.state.people[0].personal.first_name}</h1>
            </div>
        );
    }
}