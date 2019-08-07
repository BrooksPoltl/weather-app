import React from 'react';

import { RegisteredContainer, RegisteredButton } from './styles/Registered.style';

const Registered = (props) =>{
    const handleRegistered = ()=>{
        props.Registered = false
        props.history.push("/login")
        
    }
    return (
        <RegisteredContainer>
            <p>Thank you for registering, click here to</p>
            <RegisteredButton onClick = {()=>handleRegistered()}>Login</RegisteredButton>
        </RegisteredContainer>
    )
}

export default Registered;
