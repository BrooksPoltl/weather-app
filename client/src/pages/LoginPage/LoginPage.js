import React from 'react';
import { AppContainer } from '../DashboardPage/DashboardPage.styling';

import LoginForm from '../../components/LoginPage/LoginForm';
import LoginOptions from '../../components/LoginPage/LoginOptions';

const LoginPage = (props) =>{
    return (
        <AppContainer>
            <LoginForm {...props}/>
            <LoginOptions {...props}/>
        </AppContainer>
    )
}


export default LoginPage;