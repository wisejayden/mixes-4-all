import React, { Component } from 'react';
import Header from './components/Header';
import RegisterBox from './components/RegisterBox.js';


export default class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state= {
            registerTrue: false,
            loginTrue: false,
            emailInput: ''
        };
        this.loginOrRegister = this.loginOrRegister.bind(this);
    }

    loginOrRegister(e) {
        if(e.target.name === 'register') {
            this.setState({
                registerTrue: true,
                loginTrue: false
            })
        }
        if(e.target.name === 'login') {
            this.setState({
                registerTrue: false,
                loginTrue: true
            })
        }
    }
  render() {
    return (
            <div className="App">
                <RegisterBox loginOrRegister={this.loginOrRegister} registerTrue={this.state.registerTrue} loginTrue={this.state.loginTrue} emailInput={this.state.emailInput}/>

            </div>
    )
  }
}
