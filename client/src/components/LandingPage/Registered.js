import React from 'react';

import { RegisteredContainer, RegisteredButton } from './styles/Registered.style';

const Registered = (props) =>{
    return (
        <RegisteredContainer>
            <p>Thank you for registering, click here to</p>
            <RegisteredButton onClick = {()=>props.history.push("/login")}>Login</RegisteredButton>
        </RegisteredContainer>
    )
}

export default Registered;
