import React from 'react';

import { AppContainer } from './LoginPage.styling';

import LoginForm from '../../components/LoginPage/LoginForm';

const LoginPage = (props) =>{
    return (
        <AppContainer>
            <LoginForm {...props}/>
        </AppContainer>
    )
}


export default LoginPage;