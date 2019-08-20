import React from 'react';

import {
    NavWrapper
} from './NavBar.styling';


const NavBar = (props) =>{
    return(
        <NavWrapper>
            <h1>Weather Tracker</h1>
            <button>Logout</button>
        </NavWrapper>
    )
}

export default NavBar;