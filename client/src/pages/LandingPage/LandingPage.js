import React from 'react';

import SignupForm from '../../components/LandingPage/SignupForm';
import Registered from '../../components/LandingPage/Registered';
import Information from '../../components/LandingPage/Information';
import NavBar from '../../components/NavBar/NavBar';

import { LandingPageContainer } from './LandingPage.styling';


const LandingPage = (props) =>{
    return (
        <div>
            <NavBar/>
            <LandingPageContainer>
                <Information/>
                <SignupForm {...props}/>
            </LandingPageContainer>
        </div>
    )
}


export default LandingPage;