import React from 'react';



const LoginButton = (props) => {
    return(
        <button name="login" onClick={props.loginOrRegister}>Login</button>
    )
};


export default LoginButton
