import React,  { useState, useEffect } from 'react';

import SignupInput from './SignupInput';
import LandingOptions from './LandingOptions';
import Registered from '../../components/LandingPage/Registered';


import { LoadingIcon }  from '../AddCityForm/AddCityForm.styling';
import {HeaderContainer} from '../Header/Header.styling';

import {
    
    SignupFormStyle,
    FormHeader,
    SignupFormButton,
    Error

} from './styles/SignupForm.styling';

import { checkValid } from './helper';


const SignupForm = (props) =>{
    const [user, setUser] = useState({});
    const [errorMessage, setErrorMessage] = useState("");
    const [disabled, setDisabled] = useState(true);
    useEffect(()=>{
        checkValid(user,setDisabled,setErrorMessage)
        if(props.registerError){
            setErrorMessage("could not register, please try a different username");
        }
    })

    const handleSubmit = (event) =>{
        event.preventDefault();

        if(user.password !== user.confirmPassword){
            return setErrorMessage("passwords do not match");
        }

        user.password = user.password.toString();
        user.username = user.username.toString();
        props.register({ username: user.username, password: user.password})
    }

    return(
        <HeaderContainer>
            <FormHeader>Signup</FormHeader>
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
                <SignupInput
                    type = "password"
                    name = "confirmPassword"
                    user = {user}
                    setUser = {setUser}
                    labelText = "confirm password"
                    placeholder = "confirm password"
                />
                {
                    props.registering
                    ?   <LoadingIcon>
                            <i className="fas fa-circle-notch fa-spin"></i>
                        </LoadingIcon>
                    :   <SignupFormButton 
                            disabled = {disabled}
                            onClick = {(event)=>handleSubmit(event)}
                        >submit
                        </SignupFormButton>
                }
                {
                    errorMessage
                    ?<Error>{errorMessage}</Error>
                    :null
                }
                {
                    true//props.registered
                    ? <Registered {...props}/>
                    : <LandingOptions {...props}/>
                
                }
                
            </SignupFormStyle>
        </HeaderContainer>
    )
}

export default SignupForm;