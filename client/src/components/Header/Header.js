import React from 'react';

import { 
    
    HeaderContainer,
    AppName,
    Description

} from './Header.styling';

const Header = () =>{
    return (
        <HeaderContainer>
            <AppName>Weather App</AppName>
            <Description>
                This app helps you to find the perfect city for
                your desired weather. You just type the city you want to lookup
                and then add your desired range. We will check to see if it
                is within that desired range, and then keep track of your
                list of cities! You can also edit the ranges of your cities
                and we will update them for you. You can also delete a city if you
                don't want it in your list anymore.
            </Description>
        </HeaderContainer>
    )
}

export default Header