import React from 'react';

import { 
    
    HeaderContainer,
    AppName,
    Description

} from './Header.styling';

import { OptionButton } from '../LandingPage/styles/SignupForm.styling';

const Header = (props) =>{
    const token = localStorage.getItem('token')
    const logout = () =>{
        localStorage.removeItem('token')
        props.history.push("/dashboard")
        
    }
    return (
        <HeaderContainer>
            <AppName>Weather Tracker</AppName>
            <Description>
                This app helps you to find the perfect city for
                your desired weather. You just type the city you want to lookup
                and then add your desired range. We will check to see if it
                is within that desired range, and then keep track of your
                list of cities! You can edit the ranges of your cities
                and we will update them for you. You can also delete a city if you
                don't want it in your list anymore.
            </Description>
            {
                token
                ?<div style = {{display: "flex"}}>
                    <p>Want to logout?</p>
                    <OptionButton onClick = {()=> logout()}>logout</OptionButton>
                </div>
                :<div style = {{display: "flex"}}>
                    <p>Want to save your entries?</p>
                    <OptionButton onClick = {()=>props.history.push("/")}>signup</OptionButton>
                </div>
            }
        </HeaderContainer>
    )
}

export default Header;