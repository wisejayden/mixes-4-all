import React from 'react';
import RegisterButton from './RegisterButton.js';
import LoginButton from './LoginButton.js';



const RegisterBox = (props) => {
    return(
        <div id="RegisterBox">
            <RegisterButton loginOrRegister={props.loginOrRegister} />
            <LoginButton loginOrRegister={props.loginOrRegister}/>

            {!props.loginTrue && !props.registerTrue &&
                <p>Welcome to Mix-It-Up</p>
            }
            {props.loginTrue &&
                <div>
                <p>Email Address</p>
                <input  value={props.emailInput} />
                <p>Password</p>
                <input />
                </div>
            }
            {props.registerTrue &&
                <div>
                <p>Welcome!</p>
                <p>Email address</p>
                <input onChange={e => this.setState(e.target.value)} value={props.emailInput} />
                <p>Password</p>
                <input />
                <p>Enter password again</p>
                <input />
                </div>
            }
        </div>
    )
};


export default RegisterBox



// <input value={this.state.formValue} onChange={e => this.setState(e.target.value)} />
