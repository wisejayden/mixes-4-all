import React from 'react';



const LoginButton = (props) => {
    return(
        <button id="login-button" name="login" onClick={props.loginOrRegister}>Login</button>
    )
};


export default LoginButton
