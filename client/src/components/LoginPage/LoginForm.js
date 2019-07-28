import React,  { useState, useEffect } from 'react';

import changeHandler from '../../helpers/changeHandler';
import { LoadingIcon }  from '../AddCityForm/AddCityForm.styling';

const SignupForm = (props) =>{
    const [user, setUser] = useState({});
    const [errorMessage, setErrorMessage] = useState("");
    useEffect(()=>{
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
        <div>
            <h1>Login</h1>
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
                {
                    props.loggingIn
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