import React,  { useState, useEffect } from 'react';

import changeHandler from '../../helpers/changeHandler';
import { LoadingIcon }  from '../AddCityForm/AddCityForm.styling';

const SignupForm = (props) =>{
    const [user, setUser] = useState({});
    const [errorMessage, setErrorMessage] = useState("");
    useEffect(()=>{
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
        <div>
            <h1>Signup Form</h1>
            <form>
                <label>username</label>
                <input 
                    type = "text"
                    name = "username"
                    onChange = {(event) =>changeHandler(event, user, setUser)}
                />
                <label>password</label>
                <input 
                    type = "password"
                    name = "password"
                    onChange = {(event) =>changeHandler(event, user, setUser)}
                />
                <label>confirm password</label>
                <input 
                    type = "password"
                    name = "confirmPassword"
                    onChange = {(event) =>changeHandler(event, user, setUser)}
                />
                {
                    props.registering
                    ?   <LoadingIcon>
                            <i className="fas fa-circle-notch fa-spin"></i>
                        </LoadingIcon>
                    :   <button onClick = {(event)=>handleSubmit(event)}>submit</button>
                }
                {
                    errorMessage
                    ?<p>{errorMessage}</p>
                    :null
                }
            </form>
        </div>
    )
}

export default SignupForm;