import React from 'react';

import {

    NavWrapper,
    NavText,
    LogoutButton,

} from './NavBar.styling';


const NavBar = (props) =>{
    return(
        <NavWrapper>
            <NavText>Weather Tracker</NavText>
            <LogoutButton>Logout</LogoutButton>
        </NavWrapper>
    )
}

export default NavBar;