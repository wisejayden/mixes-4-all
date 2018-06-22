import React, { Component } from 'react';
import axios from 'axios';

import Header from './components/Header';
import RegisterBox from './components/RegisterBox.js';


export default class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state= {
            registerTrue: false,
            loginTrue: true,
            emailInput: '',
            passwordInput: '',
            confirmPasswordInput: '',
            errorMessage: false,
            passwordNotMatching: false,
            noMatchingEmail: false,
            incorrectPassword: false
        };
        this.loginOrRegister = this.loginOrRegister.bind(this);
        this.findFieldValue = this.findFieldValue.bind(this);
        this.submit = this.submit.bind(this);
    }
    findFieldValue(e) {
        if(e.target.name === 'email') {
            this.setState({
                emailInput: e.target.value
            })
        }
        if(e.target.name === 'password') {
            this.setState({
                passwordInput: e.target.value
            })
        }
        if(e.target.name === 'confirm-password') {
            this.setState({
                confirmPasswordInput: e.target.value
            })
        }
    }
    loginOrRegister(e) {
        this.setState({
            errorMessage: false,
            passwordNotMatching: false
        })
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
    submit(e) {
        this.setState({
            errorMessage: false,
            passwordNotMatching: false,
            incorrectPassword: false,
            noMatchingEmail: false
        })
        console.log(e.target.name);
        if(!this.state.emailInput || !this.state.passwordInput) {
            console.log("NOPE");
            this.setState({
                errorMessage: true
            })
            return;
        }
        if(e.target.name === 'register-submit') {
            if(!this.state.confirmPasswordInput) {
                this.setState({
                    errorMessage: true
                })
                return;
            } else if (this.state.passwordInput != this.state.confirmPasswordInput) {
                console.log("blue");
                this.setState({
                    passwordNotMatching: true
                })
                return;
            } else {
                this.registerSubmission();
            }
        }
        if(e.target.name === 'login-submit') {
            this.loginSubmission();
        }
    }
    loginSubmission() {
        console.log("logingingngg");
        axios.post('/login', {
            email: this.state.emailInput,
            password: this.state.passwordInput
        })
        .then(res => {
            console.log("loginSubmission client", res);
            if(res.data.success) {
                location.replace('/');
            } else {
                console.log("else, log data", res.data);
                if(res.data.reason === 'No matching email') {
                    console.log("no matching email");
                    this.setState({
                        noMatchingEmail: true
                    });
                    return;
                }
                if(res.data.reason === 'Incorrect Password') {
                    console.log("Incorrect password");
                    this.setState({
                        incorrectPassword: true
                    });
                }
            }
        })
    }
    registerSubmission() {
        console.log("REGISTERING");
        axios.post('/register', {
            email: this.state.emailInput,
            password: this.state.passwordInput
        })
        .then(res => {
            console.log("registerSubmission client", res);
            if(res.data.success) {
                console.log("success");
                location.replace('/');
            }
        })
    }
  render() {

    return (
            <div className="App">
            <video autoPlay muted loop id="myVideo">
                <source src="/video/origins.mp4" type="video/mp4"/>
            </video>


                <RegisterBox loginOrRegister={this.loginOrRegister} registerTrue={this.state.registerTrue} loginTrue={this.state.loginTrue} emailInput={this.state.emailInput} passwordInput={this.state.passwordInput} confirmPasswordInput={this.state.confirmPasswordInput} findFieldValue={this.findFieldValue} submit={this.submit} errorMessage={this.state.errorMessage} passwordNotMatching={this.state.passwordNotMatching} noMatchingEmail={this.state.noMatchingEmail} incorrectPassword={this.state.incorrectPassword }/>
            </div>
    )
  }
}
