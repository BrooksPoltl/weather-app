import React from 'react';

import Header from '../../components/Header/Header';
import SignupForm from '../../components/LandingPage/SignupForm';
import Registered from '../../components/LandingPage/Registered';
import LandingOptions from '../../components/LandingPage/LandingOptions';

import { AppContainer } from '../DashboardPage/DashboardPage.styling';


const LandingPage = (props) =>{
    return (
        <AppContainer>
            <Header/>
            {
                props.registered
                ?<Registered {...props}/>
                :<SignupForm {...props}/>
            }
            {
                props.registered
                ? null
                : <LandingOptions {...props}/>
                
            }
            
        </AppContainer>
    )
}


export default LandingPage;