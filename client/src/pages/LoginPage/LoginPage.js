import React from 'react';

import { AppContainer } from './LoginPage.styling';

import LoginForm from '../../components/LoginPage/LoginForm';
import NavBar from '../../components/NavBar/NavBar';

const LoginPage = (props) =>{
    return (
        <AppContainer>
            <NavBar/>
            <LoginForm {...props}/>
        </AppContainer>
    )
}


export default LoginPage;