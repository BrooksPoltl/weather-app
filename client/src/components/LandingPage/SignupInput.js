import React from 'react'

import changeHandler from '../../helpers/changeHandler';

import {

    SignupInputContainer,
    InputLabel,
    TextInput

} from './styles/SignupInput.styling'

const SignupInput = (props) =>{
    return (
        <SignupInputContainer>
            <InputLabel>{props.labelText}</InputLabel>
            <TextInput
                placeholder = {props.placeholder}
                type = {props.type}
                name = {props.name}
                onChange = {(event) =>changeHandler(event, props.user, props.setUser)}
            />
        </SignupInputContainer>
    )
}

export default SignupInput;