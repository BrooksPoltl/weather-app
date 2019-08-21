import React from 'react';

import { AppContainer } from './LoginPage.styling';

import LoginForm from '../../components/LoginPage/LoginForm';
import NavBar from '../../components/NavBar/NavBar';

const LoginPage = (props) =>{
    return (
        <div>
            <NavBar/>
            <AppContainer>
                <LoginForm {...props}/>
            </AppContainer>
        </div>
        
    )
}


export default LoginPage;