import React from 'react';
import RegisterButton from './RegisterButton.js';
import LoginButton from './LoginButton.js';



const RegisterBox = (props) => {
    return(
        <div id="RegisterBox">

            <p id="welcome-message">Mix-It-Up</p>

            {props.loginTrue &&
                <div>
                    {props.errorMessage &&
                        <p style={{color: "red"}}>Please enter all details</p>
                    }
                    {props.noMatchingEmail &&
                        <p style={{color: "red"}}>Email does not exist</p>
                    }
                    {props.incorrectPassword &&
                        <p style={{color: "red"}}>Password is not correct</p>
                    }

                    <div className="login-form">
                        <div>
                            <p>Username</p>
                            <input name="email" onChange={props.findFieldValue} value={props.emailInput} />
                        </div>
                        <div>
                            <p>Password</p>
                            <input type="password" name="password" onChange={props.findFieldValue} value={props.passwordInput} />
                        </div>
                    </div>
                    <button className="login-button" onClick={props.submit} name="login-submit">Sign In</button>
                </div>
            }
            {props.registerTrue &&
                <div>
                    {props.errorMessage &&
                        <p style={{color: "red"}}>Please enter all details</p>
                    }
                    {props.passwordNotMatching &&
                        <p style={{color: "red"}}>Your passwords do not match!</p>
                    }
                    <div className="login-form">
                        <div>
                            <p>Username</p>
                            <input name="email" onChange={props.findFieldValue} value={props.emailInput} />
                        </div>
                        <div>
                            <p>Password</p>
                            <input type="password" name="password" onChange={props.findFieldValue} value={props.passwordInput} />
                        </div>
                        <div>
                            <p>Confirm Pasword</p>
                            <input type="password" name="confirm-password" onChange={props.findFieldValue} value={props.confirmPasswordInput} />
                        </div>
                    </div>
                    <button className="login-button" onClick={props.submit} name="register-submit">Register</button>
                </div>
            }






            <div className="bottom-register-box">
                {props.loginTrue &&
                    <div>
                        <p>Don't have an account?</p>
                        <RegisterButton loginOrRegister={props.loginOrRegister} />
                    </div>
                }
                {props.registerTrue &&
                    <div>
                        <p>Already have an account?</p>
                        <LoginButton loginOrRegister={props.loginOrRegister} />
                    </div>
                }

            </div>



        </div>
    )
};


export default RegisterBox



// <input value={this.state.formValue} onChange={e => this.setState(e.target.value)} />
