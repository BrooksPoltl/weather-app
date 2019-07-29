import React from 'react';

import SignupForm from '../../components/LandingPage/SignupForm';
import Registered from '../../components/LandingPage/Registered';
import Information from '../../components/LandingPage/Information'

import { LandingPageContainer } from './LandingPage.styling';


const LandingPage = (props) =>{
    
    return (
        <LandingPageContainer>
            <Information/>
            <SignupForm {...props}/>
        </LandingPageContainer>
    )
}


export default LandingPage;