import React,  { useState } from 'react';

import changeHandler from '../../helpers/changeHandler';

const SignupForm = (props) =>{
    const [user, setUser] = useState({});
    const [errorMessage, setErrorMessage] = useState("");
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
                <button onClick = {(event)=>handleSubmit(event)}>submit</button>
            </form>
        </div>
    )
}

export default SignupForm;