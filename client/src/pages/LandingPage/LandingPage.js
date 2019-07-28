import React from 'react';

import Header from '../../components/Header/Header';
import SignupForm from '../../components/LandingPage/SignupForm';
import { AppContainer } from '../DashboardPage/DashboardPage.styling';


const LandingPage = (props) =>{
    return (
        <AppContainer>
            <Header/>
            <SignupForm {...props}/>
        </AppContainer>
    )
}


export default LandingPage;