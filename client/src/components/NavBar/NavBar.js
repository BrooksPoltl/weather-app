import React, { useState, useEffect } from 'react';

import {

    NavWrapper,
    NavText,
    LogoutButton,

} from './NavBar.styling';


const NavBar = (props) =>{
    const [buttonText, setButtonText] = useState('Signup');
    const token = localStorage.getItem('token');
    useEffect(()=>{
        if(token){
            setButtonText('Logout');
        }
    })
    
    const logout = () =>{
        localStorage.removeItem('token')
        props.history.push("/dashboard")
        if(buttonText === "Signup"){
            props.history.push("/")
        }
    };
    return(
        <NavWrapper>
            <NavText>Weather Tracker</NavText>
            <LogoutButton onClick = {logout}>{buttonText}</LogoutButton>
        </NavWrapper>
    )
}

export default NavBar;