import React,  { useState, useEffect } from 'react';

import { LoadingIcon }  from '../AddCityForm/AddCityForm.styling';
import LoginOptions from './LoginOptions';
import {HeaderContainer} from '../Header/Header.styling';

import SignupInput from '../LandingPage/SignupInput';

import { checkValid } from "./helper";
import {
    
    SignupFormStyle,
    FormHeader,
    SignupFormButton,
    Error

} from './LoginForm.styling';

const SignupForm = (props) =>{
    const [user, setUser] = useState({});
    const [errorMessage, setErrorMessage] = useState("");
    const [disabled, setDisabled] = useState(true);

    useEffect(()=>{
        checkValid(user, setDisabled);
        if(props.loginError){
            setErrorMessage("could not login, username or password incorrect");
        }
        if(props.loggedIn){
            props.history.push("/dashboard");
        }
    })

    const handleSubmit = (event) =>{
        event.preventDefault();

        user.password = user.password.toString();
        user.username = user.username.toString();
        props.login({ username: user.username, password: user.password})
    }

    return(
        <HeaderContainer>
            <FormHeader>Login</FormHeader>
            <SignupFormStyle>
                <SignupInput
                    type = "text"
                    name = "username"
                    user = {user}
                    setUser = {setUser}
                    labelText = "username"
                    placeholder = "username"
                />
                <SignupInput
                    type = "password"
                    name = "password"
                    user = {user}
                    setUser = {setUser}
                    labelText = "password"
                    placeholder = "password"
                />
                {
                    props.loggingIn
                    ?   <LoadingIcon>
                            <i className="fas fa-circle-notch fa-spin"></i>
                        </LoadingIcon>
                    :   <SignupFormButton disabled = {disabled} onClick = {(event)=>handleSubmit(event)}>submit</SignupFormButton>
                }
                {
                    errorMessage
                    ?<p>{errorMessage}</p>
                    :null
                }
                <LoginOptions {...props}/>
            </SignupFormStyle>
        </HeaderContainer>
    )
}

export default SignupForm;