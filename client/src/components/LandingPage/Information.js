import React from 'react'

import {
    
    InformationContainer,
    HeaderText,
    SecondHeader,
    TextContainer,
    Description

} from './styles/Information.styling'

const Information = () =>{
   
    return(
        <InformationContainer>
            <HeaderText>Weather Tracker</HeaderText>
            <TextContainer>
                <SecondHeader>how does it work?</SecondHeader>
                <Description>Weather Tracker is an app that allows users to keep tabs on the weather in their favorite cities!</Description>
                <Description>Enter a name of a city and a corresponding range of desired temperature and we will handle the rest.</Description>
                <Description>We automatically sort your cities so you know which ones are within your range!</Description>
            </TextContainer>
        </InformationContainer>
    )
}

export default Information;