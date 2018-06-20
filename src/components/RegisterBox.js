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
                    {props.errorMessage &&
                        <p style={{color: "red"}}>Please enter all details</p>
                    }
                    <p>Email Address</p>
                    <input type="password" name="email" onChange={props.findFieldValue} value={props.emailInput} />
                    <p>Password</p>
                    <input type="password" name="password" onChange={props.findFieldValue} value={props.passwordInput} />
                    <button onClick={props.submit} name="login-submit">Login</button>
                </div>
            }
            {props.registerTrue &&
                <div>
                    <p>Welcome!</p>
                    {props.errorMessage &&
                        <p style={{color: "red"}}>Please enter all details</p>
                    }
                    {props.passwordNotMatching &&
                        <p style={{color: "red"}}>Your passwords do not match!</p>
                    }

                    <p>Email address</p>

                    <input name="email" onChange={props.findFieldValue} value={props.emailInput} />
                    <p>Password</p>
                    <input type="password" name="password" onChange={props.findFieldValue} value={props.passwordInput} />
                    <p>Confirm Pasword</p>
                    <input type="password" name="confirm-password" onChange={props.findFieldValue} value={props.confirmPasswordInput} />
                    <button onClick={props.submit} name="register-submit">Register</button>
                </div>
            }
        </div>
    )
};


export default RegisterBox



// <input value={this.state.formValue} onChange={e => this.setState(e.target.value)} />
