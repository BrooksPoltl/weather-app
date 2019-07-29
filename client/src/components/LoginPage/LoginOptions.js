import React from 'react';

import { OptionButton } from '../LandingPage/styles/SignupForm.styling';

const LoginOptions = (props) =>{
    return(
        <div>
            <div style = {{ display: "flex"}}>
                <p>Don't have an account? </p>
                <OptionButton onClick = {()=> props.history.push('/')}>signup</OptionButton>
            </div>
            <div style = {{ display: "flex"}}>
                <p>Don't want to login?</p>
                <OptionButton onClick = {()=> props.history.push('/dashboard')}>continue</OptionButton>
            </div>
        </div>
    )
}

export default LoginOptions;