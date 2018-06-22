import React from 'react';



const LoginButton = (props) => {
    return(
        <button id="register-button" name="login" onClick={props.loginOrRegister}>Sign In</button>
    )
};


export default LoginButton
