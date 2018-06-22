import React from 'react';




const RegisterButton = (props) => {
    return(
        <button id="register-button" name="register" onClick={props.loginOrRegister}>
        Create Account Now</button>
    )
};


export default RegisterButton
