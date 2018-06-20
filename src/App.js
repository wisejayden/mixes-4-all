import React, { Component } from 'react';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state= {};
        this.register = this.register.bind(this);
    }
    register() {
        console.log("register!");
    }
  render() {
    return (
            <div className="App">
                <p>App</p>
            </div>

    );
  }
}
