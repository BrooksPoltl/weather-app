import React from 'react';

import {  OptionButton } from './styles/SignupForm.styling';

const LandingOptions = (props) =>{
    return(
        <div>
            <div style = {{ display: "flex"}}>
                <p>Already have an account? </p>
                <OptionButton onClick = {()=> props.history.push('/login')}>login</OptionButton>
            </div>
            <div style = {{display: "flex"}}>
                <p>Don't want to login?</p>
                <OptionButton onClick = {()=> props.history.push('/dashboard')}>continue</OptionButton>
            </div>
        </div>
    )
}

export default LandingOptions;